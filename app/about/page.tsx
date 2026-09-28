import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  BookOpen,
  Leaf,
  Heart,
  Scale,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Building,
  FileText,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Dr. Craig Wright | Qualifications & Philosophy",
  description:
    "Learn about Dr. Craig Wright (M.Tech.Hom, MSc Herb.Med), registered with AHPCSA & SAARP. Over 15 years practicing classical homeopathy and botanical phytotherapy in Kenilworth, Cape Town.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* 1. HERO / BIO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>AHPCSA Reg: A 08846-HM &bull; Practice: 008 000 0356131</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Dr. Craig Wright
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-emerald-800 dark:text-emerald-300 font-medium italic">
              M.Tech.Hom(TN) &bull; PCH(UK) &bull; MSc(Herb.Med)(Wales)
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Dr. Craig Wright is a registered homeopath and phytotherapy practitioner offering highly individualized natural medicine treatments in Kenilworth, Cape Town. He integrates the precision of classical homeopathy with rigorous botanical medicine to provide tailor-made solutions to complex health problems.
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              He has served as <strong>Chairperson of the Allied Health Professions Council of South Africa (AHPCSA)</strong>, is an appointed member of the Complementary Medicines Expert Committee of the <strong>South African Health Products Regulatory Authority (SAHPRA)</strong>, and is an active member of the <strong>Homeopathic Association of South Africa (HSA)</strong> and the <strong>South African Association of Registered Phytotherapists (SAARP)</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Consultation</span>
              </Link>
              <Link
                href="/consultations"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>View Consultation Structure</span>
              </Link>
            </div>
          </div>

          {/* Profile Card & Portrait */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-sage-200 dark:border-slate-800 shadow-soft-lg space-y-6">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/craig-wright.jpg"
                  alt="Dr. Craig Wright M.Tech.Hom MSc Herb.Med"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Dr. Craig Wright</h3>
                  <p className="text-xs text-emerald-300">Registered Homeopath &bull; Phytotherapist</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-sage-50/70 dark:bg-slate-800/60 border border-sage-100 dark:border-slate-700/60 flex items-start space-x-3">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Allied Health Professions Council of SA (AHPCSA)
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mt-0.5">
                      Registration No: <strong>A 08846-HM</strong> &bull; Former Council Chairperson
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sage-50/70 dark:bg-slate-800/60 border border-sage-100 dark:border-slate-700/60 flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Board of Healthcare Funders (BHF)
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mt-0.5">
                      Practice Number: <strong>008 000 0356131</strong> &bull; Medical Aid Claimable
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sage-50/70 dark:bg-slate-800/60 border border-sage-100 dark:border-slate-700/60 flex items-start space-x-3">
                  <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      SAHPRA Expert Committee &amp; SAARP / HSA
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 mt-0.5">
                      Complementary Medicines Expert Committee member &amp; Phytotherapy specialist
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400 italic">
                * Consultations in Kenilworth, Cape Town (20A Bray Road) and Telehealth nationwide.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ACADEMIC & CLINICAL QUALIFICATIONS */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Rigorous Education"
            title="Academic Credentials & Clinical Training"
            subtitle="Dr. Craig's practice is built upon 7+ years of rigorous formal medical and scientific education followed by ongoing clinical inquiry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Qualification 1 */}
            <div className="p-8 rounded-3xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-200/80 dark:border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-200/80 dark:bg-slate-700 text-sage-800 dark:text-emerald-300 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Master of Technology: Homeopathy (M.Tech.Hom)
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                5-Year Full-Time Medical Degree Curriculum & Clinical Internship
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Completed over five intensive academic years encompassing conventional clinical diagnosis, pathology, physiology, anatomy, pharmacology, biochemistry, and classical homeopathic materia medica. Training included 2 years of supervised clinical outpatient practice treating complex acute and chronic conditions.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Clinical Diagnostics
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Materia Medica
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Case Analysis
                </span>
              </div>
            </div>

            {/* Qualification 2 */}
            <div className="p-8 rounded-3xl bg-sage-50/60 dark:bg-slate-800/60 border border-sage-200/80 dark:border-slate-700 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-200/80 dark:bg-slate-700 text-sage-800 dark:text-emerald-300 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                Master of Science: Herbal Medicine (MSc Herb.Med)
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Advanced Botanical Pharmacognosy & Clinical Phytotherapy
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Postgraduate scientific dissertation focusing on the pharmacodynamics of active plant constituents (flavonoids, saponins, iridoids, alkaloids) and their synergy in chronic inflammatory states. Special research focus on South African medicinal fynbos flora including <em>Leonotis leonurus</em> and <em>Sutherlandia frutescens</em>.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Phytochemistry
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Cape Flora Research
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Herb-Drug Interactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL PHILOSOPHY OF HOLISTIC MEDICINE */}
      <section className="py-20 lg:py-28 bg-[#fafaf7] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Healing Paradigm"
            title="Philosophy of Holistic Medicine"
            subtitle="Health is not merely the absence of lab-detectable pathology; it is the resilient harmony of physiological, psychological, and cellular dynamics."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sage-200/80 dark:border-slate-800 shadow-soft space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                1. Vis Medicatrix Naturae
              </h4>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                The Innate Healing Power of Nature
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The human body possesses a biological drive toward homeostatic balance. Symptoms (fever, inflammation, fatigue) are often the organism&apos;s adaptive attempt to restore order. Our therapies assist this natural impulse rather than shutting it down.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sage-200/80 dark:border-slate-800 shadow-soft space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                2. Similia Similibus Curentur
              </h4>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                The Classical Law of Similars
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A substance capable of producing a pattern of symptoms in a healthy person can stimulate recovery in an ill person exhibiting that exact constellation of symptoms. This principle ensures prescriptions match the whole person.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-sage-200/80 dark:border-slate-800 shadow-soft space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                3. Botanical Synergism
              </h4>
              <p className="text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-400">
                Full-Spectrum Molecular Harmony
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Plants are complex chemical ecosystems. Whole-plant extracts contain secondary metabolites that moderate side effects and potentiate therapeutic outcomes far more gently than isolated single-molecule synthetic agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE KENILWORTH DISPENSARY & PHARMACY */}
      <section className="py-20 bg-white dark:bg-slate-900 border-b border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950 text-sage-800 dark:text-emerald-300">
                The In-House Dispensary
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Freshly Compounded Formulations, Hand-Crafted in Kenilworth
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Unlike generic commercial supplements sitting on supermarket shelves for months, medicines dispensed at Dr. Craig&apos;s practice are compounded fresh during or immediately following your consultation.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Over 250 European & Cape Mother Tinctures:</strong> Sourced from certified biodynamic and organic growers with verified analytical profiles.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Classical Homeopathic Centesimal Potencies:</strong> Preserved in alcohol tinctures or lactose-free sucrose pilules across 6CH to 10MK potencies.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Excipient Compromises:</strong> Free from magnesium stearate, artificial binders, heavy metals, and synthetic colorings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-sage-50/70 dark:bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-sage-200 dark:border-slate-700 space-y-4">
              <div className="overflow-hidden rounded-2xl aspect-[16/10] shadow-sm">
                <img
                  src="/images/consultation-office.jpg"
                  alt="Kenilworth Consultation Room and Sanctuary"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                Dispensary Safety &amp; Drug Interaction Review
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Prior to compounding any herbal formula, Dr. Craig screens your complete list of conventional prescription medications using clinical interaction databases (including cytochrome P450 enzyme pathways) to ensure 100% pharmacological safety and compatibility.
              </p>
              <div className="pt-4 border-t border-sage-200/60 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Kenilworth Practice: 20A Bray Road</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Compliant with SAHPRA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Partner With an Experienced Holistic Clinician
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Take the first step toward understanding the root causes of your symptoms with Dr. Craig Wright in Cape Town.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
