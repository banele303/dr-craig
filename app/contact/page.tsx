"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send,
  Navigation,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const timeSlots = [
  { time: "09:00 AM", available: true },
  { time: "10:30 AM", available: true },
  { time: "12:00 PM", available: false },
  { time: "02:00 PM", available: true },
  { time: "03:30 PM", available: true },
  { time: "05:00 PM", available: false },
];

const availableDays = [
  { day: "Thu", date: "01 Oct", available: true },
  { day: "Fri", date: "02 Oct", available: true },
  { day: "Mon", date: "05 Oct", available: true },
  { day: "Tue", date: "06 Oct", available: true },
  { day: "Wed", date: "07 Oct", available: false },
  { day: "Thu", date: "08 Oct", available: true },
];

export default function ContactPage() {
  // Calendar selection state
  const [selectedDay, setSelectedDay] = useState<string>("01 Oct");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:30 AM");

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consultationType: "initial-90",
    medicalAid: "discovery",
    preferredLocation: "in-person",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      errs.email = "A valid email address is required";
    if (!formData.phone.trim() || formData.phone.length < 8)
      errs.phone = "Valid telephone number is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40 mb-4">
          <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Kenilworth Practice & Appointments</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
          Contact & Consultation Booking
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Arrange your in-person consultation at our Kenilworth clinic in Cape Town, or schedule a secure Telehealth appointment from anywhere in South Africa.
        </p>
      </section>

      {/* 2. MAIN 2-COLUMN BOOKING & CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Booking Calendar & Details */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Interactive Calendar Mockup */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-slate-800 shadow-soft">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Step 1: Choose Your Slot
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                    Live Appointment Availability
                  </h3>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-Time Sync</span>
                </div>
              </div>

              {/* Day Selector */}
              <div className="mt-6">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-3">
                  Select Available Date:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDays.map((d) => (
                    <button
                      key={d.date}
                      type="button"
                      disabled={!d.available}
                      onClick={() => setSelectedDay(d.date)}
                      className={`p-3 rounded-xl text-center border transition-all ${
                        selectedDay === d.date
                          ? "bg-sage-800 dark:bg-emerald-600 text-white border-transparent shadow-sm"
                          : d.available
                          ? "bg-sage-50/70 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-sage-200 dark:border-slate-700 hover:border-emerald-500"
                          : "opacity-40 bg-slate-100 dark:bg-slate-850 text-slate-400 border-transparent cursor-not-allowed"
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold">{d.day}</div>
                      <div className="text-xs font-semibold mt-1">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-6">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-3">
                  Select Appointment Time ({selectedDay}):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        selectedSlot === slot.time
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                          : slot.available
                          ? "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-sage-50"
                          : "opacity-40 bg-slate-100 dark:bg-slate-850 text-slate-400 border-transparent cursor-not-allowed"
                      }`}
                    >
                      {slot.time} {slot.available ? "" : "(Full)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Confirmation Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-sage-50/80 dark:bg-slate-800/80 border border-sage-200/60 dark:border-slate-700 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400">Selected Appointment:</span>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                    {selectedDay} at {selectedSlot}
                  </div>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-lg">
                  Slot Reserved for 15m
                </span>
              </div>
            </div>

            {/* Operating Hours & Practice Details */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-slate-800 shadow-soft space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Kenilworth Sanctuary Practice Details
              </h3>

              <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Physical Location:</strong>
                    20A Bray Road, Kenilworth, Cape Town, 7708
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Direct Line:</strong> 021 020 1043
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Reception:</strong> reception@craigwright.co.za
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Practice Hours:</strong>
                    Mon, Wed, Fri: 09:00 &ndash; 18:00 | Tue & Thu: Closed / Urgent By Arrangement
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Contact & Intake Form */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-sage-200 dark:border-slate-800 shadow-soft-lg">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your provisional booking for <strong>{selectedDay} at {selectedSlot}</strong> has been logged with our Kenilworth reception.
                  </p>
                  <div className="p-4 rounded-2xl bg-sage-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Booking Reference: <strong className="font-mono text-emerald-700 dark:text-emerald-400">CW-BOOK-{Math.floor(100000 + Math.random() * 900000)}</strong>
                    <br />
                    We have dispatched your intake health questionnaire to <strong>{formData.email}</strong>.
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline pt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Step 2: Patient Registration
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      Case Intake Details
                    </h3>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Lindemann"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@example.co.za"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Mobile Telephone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+27 82 555 1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Consultation Type & Modality */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Consultation Type
                      </label>
                      <select
                        value={formData.consultationType}
                        onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="initial-90">Initial Case History (90 Mins &bull; R1,450)</option>
                        <option value="followup-45">Follow-Up Review (45 Mins &bull; R850)</option>
                        <option value="acute-25">Acute Prescription (25 Mins &bull; R520)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        Format
                      </label>
                      <select
                        value={formData.preferredLocation}
                        onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="in-person">In-Person (Kenilworth Sanctuary)</option>
                        <option value="telehealth">Telehealth (Secure Video Call)</option>
                      </select>
                    </div>
                  </div>

                  {/* Medical Aid Scheme */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Medical Aid Provider (For Invoice Coding)
                    </label>
                    <select
                      value={formData.medicalAid}
                      onChange={(e) => setFormData({ ...formData, medicalAid: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="discovery">Discovery Health</option>
                      <option value="fedhealth">Fedhealth</option>
                      <option value="bonitas">Bonitas</option>
                      <option value="momentum">Momentum Health</option>
                      <option value="medscheme">Medscheme / Bankmed</option>
                      <option value="private">Private / Self-funding</option>
                    </select>
                  </div>

                  {/* Primary Concerns / Message */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Primary Health Symptoms / Reason for Visit
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your symptoms, duration, and any previous treatments..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Consultation Booking</span>
                  </button>

                  <div className="pt-2 text-[11px] text-slate-400 text-center leading-relaxed">
                    By submitting, your data is stored in compliance with the Protection of Personal Information Act (POPIA). Full tariff statement will be issued post-appointment.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. EMBEDDED MAP & DIRECTIONS (KENILWORTH, CAPE TOWN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-sage-200 dark:border-slate-800 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Directions & Parking
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Finding the Kenilworth Sanctuary
              </h2>
            </div>
            <a
              href="https://goo.gl/maps/BkBEFwySpK5ARK3R8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider hover:bg-sage-200 transition-colors shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="relative aspect-[21/9] min-h-[300px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            {/* Map styling grid & pin */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#365948_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 text-center space-y-3 p-6 max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-sage-200 dark:border-slate-700">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Kenilworth Practice & Dispensary
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  20A Bray Road, Kenilworth, Cape Town, 7708
                </p>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-2">
                  Coordinates: 33.9892&deg; S, 18.4719&deg; E &bull; Tel: 021 020 1043 &bull; Free Secure Off-Street Parking
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs text-slate-600 dark:text-slate-300">
            <div>
              <strong className="text-slate-900 dark:text-white block mb-1">From M3 / Southern Suburbs:</strong>
              Take the Constantia Main Road offramp toward Kenilworth. Proceed 1.8km; the sanctuary is on the left after Kenilworth Station intersection.
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white block mb-1">From Atlantic Seaboard / City Bowl:</strong>
              Follow Philip Kgosana Drive / M3 Southbound. Approximately 15 minutes drive outside peak congestion.
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white block mb-1">Dispensary Collection:</strong>
              Designated parking bays 1 & 2 directly adjacent to the dispensary door for rapid prescription collection.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
