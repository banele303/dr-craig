"use client";

import React from "react";
import Link from "next/link";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  HeartHandshake,
  ArrowUpRight 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      {/* Top Banner / Accreditation Ribbon */}
      <div className="bg-sage-900/90 border-b border-sage-800/60 py-4 px-4 sm:px-6 lg:px-8 text-xs font-medium text-sage-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Registered with the Allied Health Professions Council of South Africa (AHPCSA Reg. No. A 08846-HM) &bull; Practice No. 008 000 0356131
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline">Member of HSA &amp; SAARP &bull; Former AHPCSA Council Chairperson</span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-semibold">
              Medical Aid Claimable
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Practice Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sage-700 text-white flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  Dr. Craig Wright
                </h3>
                <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                  M.Tech.Hom(TN) &bull; PCH(UK) &bull; MSc(Herb.Med)(Wales)
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Evidence-informed classical homeopathy, botanical phytotherapy, and individualized clinical nutrition. Dedicated to uncovering the root causes of chronic fatigue, autoimmune dysregulation, gastrointestinal disorders, and nervous system stress in Cape Town.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>20A Bray Road, Kenilworth, Cape Town, 7708</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>021 020 1043</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>reception@craigwright.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore Practice
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-300 transition-colors">
                  Home Practice Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-300 transition-colors">
                  About Dr. Craig & Credentials
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-300 transition-colors">
                  Treatments & Clinical Modalities
                </Link>
              </li>
              <li>
                <Link href="/consultations" className="hover:text-emerald-300 transition-colors">
                  Consultation Journey & Pricing
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-emerald-300 transition-colors">
                  Cape Flora & Research Articles
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-300 transition-colors flex items-center space-x-1.5 text-emerald-400 font-medium">
                  <span>AI Patient Wellness Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300 transition-colors">
                  Appointments & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Consultations */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Practice Hours
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-slate-200">Monday, Wednesday, Friday</div>
                  <div>09:00 &ndash; 18:00 (In-person &amp; Telehealth)</div>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-slate-200">Tuesday &amp; Thursday</div>
                  <div>Telehealth &amp; Lab Review Days</div>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-slate-200">Saturday &amp; Sunday</div>
                  <div>Closed</div>
                </div>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 leading-snug">
              Dispensary pickups available weekdays between 10:00 & 14:00 by arrangement.
            </div>
          </div>

          {/* Botanical Dispatch / Medical Aid */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Patient Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe for seasonal Cape herbal monographs, clinical lifestyle guides, and dispensary updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                aria-label="Email subscription"
              />
              <button
                type="button"
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Join Dispatch
              </button>
            </form>
            <div className="mt-4 flex items-center space-x-2 text-[11px] text-slate-400">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Full ICD-10 diagnostic billing codes provided for all registered medical schemes.</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Medical Notice:</strong> The information provided on this website is for educational and appointment booking purposes only and does not constitute individual medical prescription or substitute for direct diagnostic evaluation. In the event of an acute medical emergency, please immediately contact your nearest hospital casualty department or call ER24 (084 124) / Netcare 911 (082 911). Dr. Craig Wright is registered with the Allied Health Professions Council of South Africa under the statutory Allied Health Professions Act (Act 63 of 1982).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <div>
              &copy; {new Date().getFullYear()} Dr. Craig Wright Practice. All rights reserved.
            </div>
            <div className="flex space-x-4 text-slate-400">
              <span>Privacy Policy</span>
              <span>&bull;</span>
              <span>POPIA Compliance</span>
              <span>&bull;</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
