import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  Activity,
  Heart,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronDown,
  Stethoscope,
  FlaskConical,
  Scale,
  Smile,
  Phone,
} from "lucide-react";
import { AIWellnessTracker } from "@/components/AIWellnessTracker";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-sage-50/80 via-white to-transparent dark:from-slate-900/90 dark:via-slate-900 dark:to-transparent">
        {/* Subtle decorative botanical background orb */}
        <div className="absolute top-10 right-0 -mr-32 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-0 -ml-20 w-80 h-80 bg-sage-200/40 dark:bg-slate-800/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>AHPCSA Registered &bull; Kenilworth, Cape Town</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Restoring Vitality Through{" "}
                <span className="text-sage-700 dark:text-emerald-400 underline decoration-sage-300 dark:decoration-emerald-700/60 decoration-wavy underline-offset-8">
                  Botanical Science
                </span>{" "}
                & Classical Homeopathy.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Dr. Craig Wright (M.Tech.Hom, MSc Herb.Med) provides deep root-cause healing for chronic fatigue, gastrointestinal disorders, hormonal imbalances, and immune dysregulation with individualized plant pharmacology.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-2xl text-sm font-semibold tracking-wide uppercase bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sage-500/30"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Book Initial 90-Min Case</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link
                  href="/consultations"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-sage-50 dark:hover:bg-slate-750 transition-colors shadow-sm"
                >
                  <span>Explore Patient Journey & Fees</span>
                </Link>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Years Clinical Practice
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    4,200+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Individual Cases Treated
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                    94%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    Symptom Improvement
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card / Clinical Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-3xl bg-gradient-to-tr from-sage-700 via-emerald-600 to-teal-800 p-1 shadow-2xl overflow-hidden group">
                  <div className="relative rounded-[22px] overflow-hidden bg-white dark:bg-slate-900">
                    {/* Clinic Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src="/images/hero-botanical-clinic.jpg"
                        alt="Kenilworth Botanical Medicine Sanctuary & Dispensary"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                          Kenilworth Sanctuary Clinic
                        </span>
                        <h3 className="font-serif text-lg font-bold mt-1 text-white">
                          20A Bray Road, Kenilworth
                        </h3>
                        <p className="text-xs text-emerald-200">
                          Cape Town Botanical Dispensary &bull; Mon, Wed, Fri 9am - 6pm
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Highlight Credentials */}
                      <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span><strong>Statutory Practice:</strong> AHPCSA Reg. A 08846-HM &bull; Practice No. 008 000 0356131</span>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span><strong>Former AHPCSA Chairperson:</strong> SAHPRA Complementary Medicines Expert Committee member.</span>
                        </div>
                        <div className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span><strong>Medical Aid Covered:</strong> Discovery, Fedhealth, Bonitas &amp; Medscheme claimable.</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <Link
                          href="/contact"
                          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book Consult</span>
                        </Link>
                        <a
                          href="tel:0210201043"
                          className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>021 020 1043</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL PHILOSOPHY / INTRO STRIP */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-sage-50/50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Phytotherapy & Pharmacognosy
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Science-backed botanical preparations using full-spectrum plant extracts that act gently yet decisively on biochemical pathways.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-sage-50/50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Classical Homeopathy
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Individualized constitutional prescribing that stimulates your innate regulatory mechanisms (Vis Medicatrix Naturae) without toxic side effects.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-sage-50/50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Functional Clinical Nutrition
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Targeted orthomolecular nutrition, gut barrier repair, and anti-inflammatory diets calibrated specifically to your metabolic profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="py-20 lg:py-32 bg-[#fafaf7] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Clinical Modalities"
            title="Comprehensive Holistic Treatments"
            subtitle="Integrating centuries of herbal wisdom with contemporary physiological diagnostics to address deep-seated chronic conditions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Classical Homeopathy */}
            <div className="group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-emerald-950/80 text-sage-800 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Classical Homeopathy
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Careful single-remedy constitutional prescribing based on Samuel Hahnemann&apos;s classical tenets. Restoring physical equilibrium and emotional resilience simultaneously.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Constitutional evaluation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Chronic miasmatic clearing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Safe for infants, pregnancy & elderly</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services#homeopathy"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Phytotherapy */}
            <div className="group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-emerald-950/80 text-sage-800 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Phytotherapy & Herbalism
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Medical herbalism using certified pharmaceutical-grade extracts, fluid tinctures, and indigenous South African botanicals compounded to your exact physiological needs.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Cape indigenous flora (Leonotis, Sutherlandia)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>HPA-axis adaptogenic tonics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Custom compounded in-clinic</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services#phytotherapy"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Clinical Nutrition */}
            <div className="group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-emerald-950/80 text-sage-800 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Dietary & Lifestyle Advice
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Therapeutic nutrition focusing on gut barrier rehabilitation, circadian alignment, and cellular detoxification without unsustainable fad diets.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Microbiome dysbiosis protocols</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Food sensitivity elimination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Cardiometabolic stabilization</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services#nutrition"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Supplementation */}
            <div className="group bg-white dark:bg-slate-900 rounded-3xl p-7 border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-emerald-950/80 text-sage-800 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Targeted Supplementation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Precision orthomolecular prescriptions using bioavailable mineral chelation, liposomal antioxidants, and co-factors with zero unnecessary fillers.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Schuessler tissue salt therapy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Mitochondrial co-factors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Pathology-verified deficiency replenishment</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/services#supplementation"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE AI WELLNESS TRACKER WIDGET SECTION */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-y border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Evidence & Data"
            title="AI Patient Wellness & Adherence Tracker"
            subtitle="Explore how structured herbal adherence correlates with symptom regression and long-term vitality recovery across our 12-week clinical protocols."
          />

          <AIWellnessTracker />

          <div className="mt-8 text-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              <span>View full Patient Analytics Dashboard with interactive health inputs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BRIEF BIO SNIPPET */}
      <section className="py-20 bg-sage-50/60 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="aspect-[4/5] rounded-3xl bg-sage-200 dark:bg-slate-800 overflow-hidden relative shadow-2xl border-4 border-white dark:border-slate-800 group">
                  {/* Dr. Craig Wright's Official Portrait */}
                  <img
                    src="/images/craig-wright.jpg"
                    alt="Dr. Craig Wright - Homeopath and Phytotherapist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-700/90 text-white px-2.5 py-1 rounded-full">
                      Primary Practitioner
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                      Dr. Craig Wright
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium">
                      M.Tech.Hom(TN) &bull; PCH(UK) &bull; MSc(Herb.Med)(Wales)
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-sage-100 dark:border-slate-800">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">AHPCSA Reg. A 08846-HM</div>
                      <div className="text-[11px] text-slate-500">Practice # 008 000 0356131</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950 text-sage-800 dark:text-emerald-300">
                Meet Your Practitioner
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                &ldquo;True healing requires listening to the nuanced story behind the pathology.&rdquo;
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                With dual Masters qualifications in classical homeopathy and herbal pharmacology (Technikon Natal and the Scottish School of Herbal Medicine / University of Wales), Dr. Craig Wright is one of South Africa&apos;s foremost registered natural medicine clinicians. He has served as <strong>Chairperson of the Allied Health Professions Council of South Africa (AHPCSA)</strong> and is an appointed member of the Complementary Medicines Expert Committee of <strong>SAHPRA</strong>.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Practicing from 20A Bray Road in Kenilworth, Cape Town, Dr. Craig integrates deep constitutional homeopathic analysis with freshly compounded South African Cape medicinal tinctures (*Leonotis leonurus*, *Sutherlandia frutescens*, African Sage oxymels) formulated specifically for your physiology.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-sage-800 hover:bg-sage-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                >
                  <span>Read Full Professional Bio & Credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. AUTHENTIC BOTANICAL FORMULATIONS FROM THE KENILWORTH DISPENSARY */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dispensary Compounding"
            title="Hand-Crafted Botanical Medicines"
            subtitle="Explore indigenous South African Cape tinctures, oxymels, and soothing demulcent syrups compounded on-site by Dr. Craig Wright in Kenilworth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Leonotis */}
            <div className="group bg-sage-50/70 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/leonotis-leonurus.jpg"
                  alt="Leonotis Leonurus Wild Dagga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Cape Indigenous Flora
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Leonotis Leonurus
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Wild Dagga &bull; Lion&apos;s Ear
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Smooth muscle antispasmodic, cardiotonic, and hypotensive herb harvested in the Western Cape.
                </p>
              </div>
            </div>

            {/* Card 2: Sutherlandia */}
            <div className="group bg-sage-50/70 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/sutherlandia-tincture.jpg"
                  alt="Sutherlandia Frutescens Tincture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Compounded Tincture
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Sutherlandia Tincture
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Cancer Bush / Kankerbos (1:3 Tincture)
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Supreme South African adaptogen and immune tonic indicated for post-viral convalescence and chronic fatigue.
                </p>
              </div>
            </div>

            {/* Card 3: Althaea Syrup */}
            <div className="group bg-sage-50/70 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/althaea-syrup.jpg"
                  alt="Althaea Marshmallow Root Syrup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Mucosal Healing
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Althaea Syrup
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Marshmallow Root Demulcent Elixir
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Soothing botanical preparation formulated for inflamed gastrointestinal mucosal linings and irritable coughs.
                </p>
              </div>
            </div>

            {/* Card 4: African Sage Oxymel */}
            <div className="group bg-sage-50/70 dark:bg-slate-800/60 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-700 shadow-soft hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/african-sage-oxymel.jpg"
                  alt="African Sage Oxymel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Artisan Remedy
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  African Sage Oxymel
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  Salvia africana-lutea &bull; Raw Honey &amp; ACV
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Traditional coastal fynbos medicinal formulation combining aromatic volatile oils with organic unheated honey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC TESTIMONIALS SLIDER SECTION */}
      <section className="py-20 lg:py-28 bg-[#fafaf7] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Patient Outcomes"
            title="Real Stories of Chronic Recovery"
            subtitle="Read documented experiences from patients treated at our Kenilworth practice for complex, refractory health challenges."
          />
          <TestimonialsSlider />
        </div>
      </section>

      {/* 7. STEP-BY-STEP PATIENT JOURNEY PREVIEW */}
      <section className="py-20 bg-sage-50/60 dark:bg-slate-950 border-t border-sage-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Clinical Path"
            title="What to Expect on Your Healing Journey"
            subtitle="Transparent, compassionate, and thorough care from your initial intake through to sustained vitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-sage-200/80 dark:border-slate-800 shadow-sm relative">
              <span className="text-3xl font-serif font-bold text-sage-200 dark:text-slate-800 absolute top-4 right-4">
                01
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                Intake & History
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Initial 90-minute consultation mapping your complete health history, family predispositions, environmental stressors, and previous bloodwork.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-sage-200/80 dark:border-slate-800 shadow-sm relative">
              <span className="text-3xl font-serif font-bold text-sage-200 dark:text-slate-800 absolute top-4 right-4">
                02
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                Custom Formulation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Compounding your bespoke herbal tincture and selecting your constitutional homeopathic remedy in the on-site dispensary.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-sage-200/80 dark:border-slate-800 shadow-sm relative">
              <span className="text-3xl font-serif font-bold text-sage-200 dark:text-slate-800 absolute top-4 right-4">
                03
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                Therapeutic Protocol
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Commencing your 4 to 8 week initial course with structured dosage guidelines, dietary adjustments, and patient adherence tracking.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-sage-200/80 dark:border-slate-800 shadow-sm relative">
              <span className="text-3xl font-serif font-bold text-sage-200 dark:text-slate-800 absolute top-4 right-4">
                04
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                Review & Maintenance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                45-minute follow-up to evaluate symptom relief, refine remedy potencies, and transition toward seasonal constitutional resilience.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/consultations"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 hover:text-emerald-600"
            >
              <span>Explore full consultation fees and medical aid claim details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-br from-sage-900 via-slate-900 to-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Begin Your Restoration</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Address the Root Cause of Your Symptoms?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Appointments available at our Kenilworth clinic in Cape Town or securely online via Telehealth across South Africa and internationally.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Consultation Online</span>
            </Link>
            <a
              href="tel:+27217611234"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Call Reception (021 761 1234)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
