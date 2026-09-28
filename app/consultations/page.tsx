import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Calendar,
  CreditCard,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  FileQuestion,
  FlaskConical,
  Activity,
  ArrowRight,
  HelpCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Consultations & Patient Journey | Pricing & Medical Aid",
  description:
    "Explore the step-by-step patient journey with Dr. Craig Wright in Kenilworth, Cape Town. Comprehensive 90-minute initial consultations, transparent pricing, and medical aid claim guidance.",
};

export default function ConsultationsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40 mb-4">
          <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Patient-Centered Clinical Pathway</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
          The Consultation Journey & Pricing
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Comprehensive, unhurried care at our tranquil Kenilworth sanctuary clinic or via secure Telehealth nationwide.
        </p>
      </section>

      {/* 2. THE 4-STEP PATIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          badge="The Four Phases"
          title="From Initial Intake to Sustainable Vitality"
          subtitle="Unlike conventional 10-minute symptom checks, holistic medicine requires understanding your biochemical individuality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phase 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200/80 dark:border-slate-800 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 dark:bg-slate-800/40 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-4">
              <span className="font-serif text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                01
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Pre-Consultation Health Audit
              </h3>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                Sent 48h Prior via Patient Portal
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You will complete a detailed lifestyle, dietary, and symptomatic survey. You can attach recent bloodwork, previous pathology reports, and current medication lists so Dr. Craig can study your timeline before you even walk through the door.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Duration: 15-20 mins (completed at home)
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200/80 dark:border-slate-800 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 dark:bg-slate-800/40 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-4">
              <span className="font-serif text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                02
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Initial 90-Min Case History
              </h3>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                In-Depth Clinical Investigation
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                An unhurried, exhaustive examination exploring constitutional traits, emotional triggers, thermoregulation, digestive transit, sleep architecture, and physical vitals. We map how disparate symptoms connect into one systemic pattern.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Duration: 90 Minutes Dedicated Face-to-Face
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200/80 dark:border-slate-800 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 dark:bg-slate-800/40 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-4">
              <span className="font-serif text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                03
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Bespoke Compounding & Plan
              </h3>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                In-Clinic Pharmacy Dispensing
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Dr. Craig formulates your individualized herbal tincture blend and chooses your constitutional homeopathic remedy. You receive written dosage guidelines, dietary instructions, and access to our AI wellness tracking portal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Dispensed same-day or delivered nationwide
            </div>
          </div>

          {/* Phase 4 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200/80 dark:border-slate-800 shadow-soft flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 dark:bg-slate-800/40 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-4">
              <span className="font-serif text-4xl font-bold text-emerald-700 dark:text-emerald-400">
                04
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Follow-Up & Milestone Reviews
              </h3>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                At 4 to 6 Weeks Post-Intake
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We review symptom improvements, evaluate remedy responsiveness, adjust herbal potencies, and gradually reduce therapeutic dependence as your vitality and resilience are restored.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              Duration: 45 Minutes Review
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT PRICING STRUCTURE */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-sage-100 dark:border-slate-800 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clear Pricing"
            title="Fee Structure & Consultation Options"
            subtitle="Transparent professional fees with no hidden booking surcharges. All major credit/debit cards, EFT, and SnapScan accepted."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Initial Comprehensive */}
            <div className="relative bg-sage-50/70 dark:bg-slate-800/80 rounded-3xl p-8 border-2 border-emerald-500/50 dark:border-emerald-500/60 shadow-soft-lg flex flex-col justify-between">
              <div className="absolute -top-3.5 left-8 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Most Popular for New Patients
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Initial Consultation
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    90 Mins
                  </span>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold font-serif text-slate-900 dark:text-white">
                    R1,450
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">/ once-off</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprehensive full-body case intake for all new patients presenting with complex, chronic, or multifaceted conditions.
                </p>

                <ul className="pt-2 space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Full 90 minutes with Dr. Craig</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Prior lab & bloodwork diagnostic review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Individualized written treatment strategy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>AI Wellness Portal tracking access</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Initial 90-Min</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Follow-Up Consultation */}
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-8 border border-sage-200 dark:border-slate-700 shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Follow-Up Review
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-750 text-slate-700 dark:text-slate-300">
                    45 Mins
                  </span>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold font-serif text-slate-900 dark:text-white">
                    R850
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">/ visit</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Scheduled 4 to 6 weeks after initial intake to re-evaluate symptoms, assess progress, and refine remedy potencies.
                </p>

                <ul className="pt-2 space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>45 minutes clinical review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Tincture & homeopathic potency adjust</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Follow-up pathology ordering if needed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Available in-clinic or Telehealth</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Follow-Up</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Acute / Telehealth */}
            <div className="bg-white dark:bg-slate-850 rounded-3xl p-8 border border-sage-200 dark:border-slate-700 shadow-soft flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Acute Prescription
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-750 text-slate-700 dark:text-slate-300">
                    25 Mins
                  </span>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold font-serif text-slate-900 dark:text-white">
                    R520
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">/ consult</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  For established patients experiencing sudden flare-ups (colds, influenza, acute gastroenteritis, or sports injury).
                </p>

                <ul className="pt-2 space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Rapid targeted acute symptom assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Same-day acute remedy prescription</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Fast courier or dispensary pickup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Established patients only</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Acute Slot</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            * Note: Bespoke botanical tinctures, homeopathic remedies, and nutritional supplements are billed separately from consultation time (average R180 &ndash; R380 per compounded formulation).
          </div>
        </div>
      </section>

      {/* 4. MEDICAL AID CLAIMS INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-sage-50/80 dark:bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-sage-200 dark:border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Reimbursement Process</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
                Claiming From Your South African Medical Aid
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As a registered Homeopath with the AHPCSA and holding a valid BHF Practice Number (008 000 0356131), Dr. Craig&apos;s professional consultations and prescribed homeopathic medicines are recognized for reimbursement under most medical scheme plans.
              </p>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <p>
                  <strong>How It Works:</strong> Dr. Craig Wright operates as a direct-settlement (cash/card) practice. Immediately following your appointment, our reception emails you an official detailed statement featuring all statutory tariff codes, practice credentials, and diagnostic ICD-10 codes.
                </p>
                <p>
                  You submit this invoice directly through your medical aid app (Discovery Health, Fedhealth, Bonitas, Momentum, Medscheme, Bankmed, etc.) for reimbursement from your medical savings account or day-to-day benefit pool.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-sage-200 dark:border-slate-700 space-y-3 text-xs">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                Practice Billing Codes:
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-slate-500">Practice Number:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">008 000 0356131</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-slate-500">AHPCSA Reg:</span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">A 08846-HM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-slate-500">Sub-discipline:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">Homeopathy / 008</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tariff Codes:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">001 (Initial), 002 (Follow-up)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & ACCESSIBILITY (KENILWORTH, CAPE TOWN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-sage-200 dark:border-slate-800 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-4 h-4" />
                <span>Sanctuary Clinic</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
                Visit Us in Kenilworth, Cape Town
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The practice is located in a leafy, heritage medical sanctuary at 20A Bray Road in Kenilworth, Cape Town. Easily accessible from the M3 highway, Southern Suburbs, Atlantic Seaboard, and City Bowl.
              </p>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Secure, free off-street parking behind automated gates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Wheelchair and ramp accessible consultation rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Private garden waiting lounge with complimentary herbal teas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Telephone: 021 020 1043 &bull; Open Mon, Wed, Fri 09:00 &ndash; 18:00</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://goo.gl/maps/BkBEFwySpK5ARK3R8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open 20A Bray Road in Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-sage-200 dark:border-slate-700">
                <Image
                  src="/images/consultation-office.jpg"
                  alt="Dr. Craig Wright Kenilworth Consultation Office and Garden View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-serif font-medium">
                    Dr. Craig Wright&apos;s Kenilworth Consultation Suite overlooking garden flora
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-sage-50/70 dark:bg-slate-800 text-xs space-y-2">
                <h4 className="font-serif font-bold text-slate-900 dark:text-white">
                  Telehealth Consultations Nationwide
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  Living outside Cape Town? Dr. Craig conducts full video consultations via secure medical software with express medicine dispatch straight to your door across South Africa.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>Book Telehealth consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
