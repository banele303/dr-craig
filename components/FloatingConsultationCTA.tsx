"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Phone, X, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export function FloatingConsultationCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-sage-200 dark:border-slate-800 p-5 animate-in fade-in slide-in-from-bottom-5 duration-200 text-slate-800 dark:text-slate-100">
          <div className="flex items-start justify-between pb-3 border-b border-sage-100 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                Practice Reception
              </span>
              <h4 className="font-serif text-base font-semibold mt-1 text-slate-900 dark:text-white">
                Book with Dr. Craig
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close booking popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Next available new patient slot: <strong>This Thursday</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Medical Aid claimable (ICD-10 codes provided)</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-sage-700 hover:bg-sage-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Select Date & Time</span>
            </Link>

            <a
              href="tel:+27217611234"
              className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sage-600 dark:text-emerald-400" />
              <span>Call Reception (021 761 1234)</span>
            </a>
          </div>
        </div>
      )}

      {/* Main floating action button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2.5 py-3.5 px-5 rounded-full bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sage-500/30"
        aria-label="Book a consultation with Dr. Craig Wright"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <Calendar className="w-4 h-4 text-emerald-300" />
        <span className="text-xs font-semibold tracking-wide uppercase">
          Book Consultation
        </span>
      </button>
    </div>
  );
}
