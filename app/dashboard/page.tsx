"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Calendar,
  Clock,
  Sparkles,
  TrendingDown,
  TrendingUp,
  ShieldCheck,
  FlaskConical,
  Heart,
  AlertCircle,
  CheckCircle2,
  Sliders,
  FileText,
  User,
  Bell,
  ArrowRight,
} from "lucide-react";
import { AIWellnessTracker } from "@/components/AIWellnessTracker";
import { SectionHeading } from "@/components/SectionHeading";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"tracker" | "dispensary" | "assessment">("tracker");
  
  // Interactive Assessment State
  const [energyRating, setEnergyRating] = useState<number>(7);
  const [sleepRating, setSleepRating] = useState<number>(8);
  const [digestiveRating, setDigestiveRating] = useState<number>(8);
  const [adherenceChecked, setAdherenceChecked] = useState<boolean>(true);
  const [assessmentSubmitted, setAssessmentSubmitted] = useState<boolean>(false);

  const calculateDailyScore = () => {
    return Math.round(((energyRating + sleepRating + digestiveRating) / 30) * 100);
  };

  return (
    <div className="py-10 sm:py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* 1. PORTAL HEADER & PATIENT BANNER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-slate-800 shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sage-800 to-emerald-600 text-white flex items-center justify-center font-serif text-xl font-bold shadow-md">
            SL
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Active Protocol: Week 8 of 12
              </span>
              <span className="text-xs text-slate-400">#CW-84920</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Patient Wellness Portal: Sarah L.
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Prescribing Clinician: <strong>Dr. Craig Wright</strong> (Kenilworth Sanctuary Clinic)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Next Review</span>
          </Link>
          <a
            href="tel:+27217611234"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Clinic Hours</span>
          </a>
        </div>
      </div>

      {/* 2. KPI METRICS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Symptom Reduction */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-sage-200/80 dark:border-slate-800 shadow-soft">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>Symptom VAS</span>
            <TrendingDown className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
              -74%
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              88 &rarr; 23 / 100
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Primary distress complaints markedly attenuated over 8 weeks.
          </p>
        </div>

        {/* Card 2: Vitality Index */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-sage-200/80 dark:border-slate-800 shadow-soft">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>Vitality & Energy</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
              84
            </span>
            <span className="text-xs text-slate-500">/ 100</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium ml-1">
              +46 pts
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Morning stamina restored, sustained cognitive endurance.
          </p>
        </div>

        {/* Card 3: Adherence Streak */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-sage-200/80 dark:border-slate-800 shadow-soft">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>Remedy Adherence</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
              96%
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              42-day streak
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Optimal botanical bioavailability achieved through consistent dosing.
          </p>
        </div>

        {/* Card 4: Active Dispensary Items */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-sage-200/80 dark:border-slate-800 shadow-soft">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>Active Formulations</span>
            <FlaskConical className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
              3 Items
            </span>
            <span className="text-xs text-slate-500">In rotation</span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Herbal tincture, homeopathic constitutional, and tissue salts.
          </p>
        </div>
      </div>

      {/* 3. DASHBOARD NAVIGATION TABS */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-8 text-sm font-medium">
        <button
          onClick={() => setActiveTab("tracker")}
          className={`pb-4 border-b-2 transition-colors ${
            activeTab === "tracker"
              ? "border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Interactive AI Trajectory Tracker
        </button>
        <button
          onClick={() => setActiveTab("assessment")}
          className={`pb-4 border-b-2 transition-colors ${
            activeTab === "assessment"
              ? "border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Daily Wellness Log & AI Score
        </button>
        <button
          onClick={() => setActiveTab("dispensary")}
          className={`pb-4 border-b-2 transition-colors ${
            activeTab === "dispensary"
              ? "border-emerald-600 text-emerald-700 dark:text-emerald-400 font-semibold"
              : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Active Dispensary Prescription
        </button>
      </div>

      {/* 4. TAB CONTENT */}
      {activeTab === "tracker" && (
        <div className="space-y-8">
          <AIWellnessTracker />

          {/* Clinical Case Notes Feed */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200 dark:border-slate-800 shadow-soft space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                  Clinical Progress Notes from Dr. Craig
                </h3>
              </div>
              <span className="text-xs text-slate-400">Confidential Medical Record</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-100 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Week 6 Clinical Review Milestone
                  </span>
                  <span className="text-slate-400">18 September 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  &ldquo;Patient Sarah L. reports profound improvement in morning cortisol awakening response. No crashes at 15:00. Sleep architecture continuous for 7.5 hours. Downregulated Withania dosage slightly to 3.5ml daily; maintained Phosphoricum Acidum 200CH single dose on alternate Sundays. Advised continuation for 4 further weeks before transitioning to seasonal fynbos tonic.&rdquo;
                </p>
                <div className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                  Signed: Dr. Craig Wright (M.Tech.Hom, MSc Herb.Med)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Week 2 Initial Follow-up Call
                  </span>
                  <span className="text-slate-400">22 August 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  &ldquo;Mild transient detox headache on Day 4 resolved spontaneously with increased hydration and tissue salt intake (Ferrum Phos & Mag Phos). Bowel transit normalized to daily morning rhythm. Excellent early compliance with herbal tinctures.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "assessment" && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200 dark:border-slate-800 shadow-soft space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Interactive Self-Reporting
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Log Today&apos;s Wellness & Remedy Intake
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Move the sliders to record your current somatic state. The AI engine recalculates your daily wellness score instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sage-50/70 dark:bg-slate-800/70 border border-sage-100 dark:border-slate-700 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                <span>Vital Energy Level</span>
                <span className="text-emerald-600 text-sm">{energyRating} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={energyRating}
                onChange={(e) => setEnergyRating(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Exhausted</span>
                <span>Vibrant</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sage-50/70 dark:bg-slate-800/70 border border-sage-100 dark:border-slate-700 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                <span>Sleep Quality & Rest</span>
                <span className="text-emerald-600 text-sm">{sleepRating} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={sleepRating}
                onChange={(e) => setSleepRating(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Fragmented</span>
                <span>Restorative</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sage-50/70 dark:bg-slate-800/70 border border-sage-100 dark:border-slate-700 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                <span>Digestive Comfort</span>
                <span className="text-emerald-600 text-sm">{digestiveRating} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={digestiveRating}
                onChange={(e) => setDigestiveRating(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Bloated/Pain</span>
                <span>Calm & Settled</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
            <input
              id="adherence-check"
              type="checkbox"
              checked={adherenceChecked}
              onChange={(e) => setAdherenceChecked(e.target.checked)}
              className="w-5 h-5 rounded text-emerald-600 accent-emerald-600 cursor-pointer"
            />
            <label htmlFor="adherence-check" className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-pointer">
              I have taken all morning & evening botanical doses as prescribed today.
            </label>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Instant Daily AI Calculated Score
              </div>
              <div className="text-3xl font-bold font-serif mt-1">
                {calculateDailyScore()} / 100 &ndash;{" "}
                <span className="text-emerald-300 text-lg">
                  {calculateDailyScore() >= 80 ? "Optimal Resonance" : "Progressing Well"}
                </span>
              </div>
            </div>

            <button
              onClick={() => setAssessmentSubmitted(true)}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              {assessmentSubmitted ? "Logged to Dr. Craig's File" : "Sync Today's Metrics"}
            </button>
          </div>
        </div>
      )}

      {activeTab === "dispensary" && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-sage-200 dark:border-slate-800 shadow-soft space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Active Dispensary Schedule & Formulations
              </h3>
              <p className="text-xs text-slate-500">
                Freshly compounded at Kenilworth Sanctuary Dispensary &bull; Batch #KSD-2026-09
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Refill Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-200/80 dark:border-slate-700 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Morning & Noon (With Water)
              </span>
              <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                Adrenal & Adaptogenic Botanical Tincture
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <em>Withania somnifera</em> (1:2), <em>Eleutherococcus senticosus</em>, <em>Glycyrrhiza glabra</em>.
              </p>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 pt-2 border-t border-slate-200 dark:border-slate-700">
                Dose: 4.5ml in 50ml warm water before breakfast and lunch.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-200/80 dark:border-slate-700 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Alternate Sundays (Bedtime)
              </span>
              <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                Constitutional Homeopathic Simillimum
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <em>Phosphoricum Acidum</em> 200CH sucrose globules.
              </p>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 pt-2 border-t border-slate-200 dark:border-slate-700">
                Dose: 3 globules dissolved sublingually; avoid coffee/mint for 30 mins prior.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-200/80 dark:border-slate-700 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Daily Afternoon
              </span>
              <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                Biochemic Mineral Tissue Salt Complex
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <em>Mag Phos</em> 6X + <em>Kali Phos</em> 6X + <em>Ferrum Phos</em> 6X.
              </p>
              <div className="text-xs font-medium text-slate-800 dark:text-slate-200 pt-2 border-t border-slate-200 dark:border-slate-700">
                Dose: 2 tablets chewed at 16:00 to support neuromuscular relaxation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. NEXT APPOINTMENT REMINDER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider justify-center sm:justify-start">
            <Bell className="w-3.5 h-3.5" />
            <span>Upcoming Clinical Review</span>
          </div>
          <div className="font-serif text-xl sm:text-2xl font-bold">
            Week 8 Consultation &ndash; Thursday, 8 October 2026 at 10:30 AM
          </div>
          <p className="text-xs text-emerald-100">
            In-person at Kenilworth Sanctuary Clinic (24 Main Road, Kenilworth, Cape Town)
          </p>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-white text-emerald-950 font-semibold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-colors shadow shrink-0"
        >
          Confirm / Reschedule
        </Link>
      </div>

    </div>
  );
}
