import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Stethoscope,
  Leaf,
  Activity,
  FlaskConical,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info,
  Clock,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Treatments & Clinical Modalities | Classical Homeopathy & Phytotherapy",
  description:
    "Explore individual treatment modalities with Dr. Craig Wright: Classical Homeopathy, Botanical Phytotherapy, Clinical Nutrition, and Targeted Supplementation in Cape Town.",
};

const services = [
  {
    id: "homeopathy",
    title: "Classical Homeopathic Medicine",
    subtitle: "Constitutional & Acute Simillimum Prescribing",
    badge: "Primary Modality",
    icon: Stethoscope,
    image: "/images/homeopathic-remedies.jpg",
    imageCaption: "Classical Homeopathic Dilutions & Sucrose Pillules",
    description:
      "Classical Homeopathy is a 200-year-old system of regulated natural medicine predicated on the biological principle of 'like cures like' (Similia Similibus Curentur). By identifying a single, deeply matched remedy that reflects the totality of your physical, mental, and emotional characteristics, homeopathy acts as an energetic and biological stimulus to rebalance your vital self-regulatory systems.",
    mechanisms: [
      "Dynamic stimulation of neuro-immunological autoregulation without drug toxicity",
      "Resolution of chronic susceptibility (miasmatic clearing)",
      "Non-suppressive remediation of inflammatory flare-ups",
    ],
    conditions: [
      "Recurrent childhood otitis, asthma & eczema",
      "Anxiety, panic, grief trauma & psychosomatic tension",
      "Migraines, hormonal headaches & menstrual irregularities",
      "Autoimmune predispositions & constitutional debility",
    ],
    details:
      "Remedies are prepared according to official homeopathic pharmacopoeias (HAB, HPUS) using serial dilutions and succussions. Prescriptions are dispensed as lactose-free sucrose globules, distilled water solutions, or oral drops, making them completely safe across all ages, including pregnancy, lactation, infants, and patients on multiple prescription medications.",
  },
  {
    id: "phytotherapy",
    title: "Phytotherapy (Botanical Medicine)",
    subtitle: "Pharmacologically Active Plant Extracts & Cape Flora",
    badge: "Herbal Science",
    icon: Leaf,
    image: "/images/apothecary-dispensary.jpg",
    imageCaption: "Artisan Phytotherapy Compounding Dispensary",
    description:
      "Phytotherapy is the clinical practice of using plant-derived medications backed by modern pharmacological research and phytochemical analysis. Rather than isolating single molecules, botanical phytotherapy employs the rich, synergistic spectrum of whole herbs to restore organ function, balance the endocrine system, and downregulate chronic cellular inflammation.",
    mechanisms: [
      "Adaptogenic modulation of the Hypothalamic-Pituitary-Adrenal (HPA) axis",
      "Hepatic phase I and phase II enzymatic clearance support",
      "Antispasmodic and demulcent tonification of visceral smooth muscle",
    ],
    conditions: [
      "Chronic Fatigue Syndrome (CFS/ME) & adrenal exhaustion",
      "Irritable Bowel Syndrome (IBS), SIBO & mucosal hyperpermeability",
      "Perimenopause, PCOS, endometriosis & thyroid hypofunction",
      "Metabolic syndrome, insulin resistance & chronic dyslipidemia",
    ],
    details:
      "At our Kenilworth dispensary, Dr. Craig compounds individualized liquid extracts tailored to the exact milligram required for your constitution. We specialize in ethically harvested, organic South African Cape medicinal botanicals (such as Leonotis leonurus, Sutherlandia frutescens, and Pelargonium sidoides) alongside renowned global phytomedicines.",
  },
  {
    id: "nutrition",
    title: "Dietary & Lifestyle Advice",
    subtitle: "Anti-Inflammatory & Metabolic Reprogramming",
    badge: "Foundational Health",
    icon: Activity,
    image: "/images/clinical-nutrition.jpg",
    imageCaption: "Evidence-Based Clinical Nutrition & Gut Protocol",
    description:
      "Food is biochemical information. What you ingest continuously instructs gene expression, regulates microbiome biodiversity, and modulates systemic inflammatory cascades. Dr. Craig provides therapeutic, structured dietary guidance that removes toxic burdens and introduces restorative, nutrient-dense nutrition without dogma or unsustainable restriction.",
    mechanisms: [
      "Restoration of intestinal epithelial tight junctions ('leaky gut' repair)",
      "Normalization of postprandial glucose and insulin excursions",
      "Circadian dietary synchronization for nocturnal recovery and deep sleep",
    ],
    conditions: [
      "Food intolerances (histamine, FODMAP, dairy, gluten sensitivities)",
      "Systemic low-grade inflammation and joint arthralgias",
      "Brain fog, post-meal somnolence & cognitive dips",
      "Gastroesophageal reflux disease (GERD) & chronic dysbiosis",
    ],
    details:
      "Rather than generic meal templates, recommendations are engineered around your specific metabolic rate, blood type or pathology results, work routine, and budget. Dr. Craig works closely with you to establish achievable habits that sustain your clinical progress indefinitely.",
  },
  {
    id: "supplementation",
    title: "Nutritional Supplementation",
    subtitle: "Orthomolecular & Bioavailable Micronutrients",
    badge: "Targeted Replenishment",
    icon: FlaskConical,
    image: "/images/african-sage-oxymel.jpg",
    imageCaption: "Therapeutic Micronutrients & Indigenous Botanical Oxymels",
    description:
      "Even with an optimal diet, chronic illness, chronic stress, soil depletion, and genetic polymorphisms (such as MTHFR) can cause severe intracellular nutrient deficiencies. Clinical nutritional supplementation involves prescribing therapeutic doses of biologically active vitamins, chelated minerals, amino acids, and Schuessler tissue salts to restore biochemical enzymatic pathways.",
    mechanisms: [
      "Replenishment of depleted mitochondrial ATP co-factors (CoQ10, PQQ, NAD+)",
      "Correction of intracellular electrolyte imbalances with mineral tissue salts",
      "Cellular antioxidant defense support (liposomal glutathione, NAC)",
    ],
    conditions: [
      "Post-viral immune depletion & recurring respiratory infections",
      "Paresthesia, peripheral neuropathy & restless legs",
      "Osteopenia, joint degeneration & connective tissue laxity",
      "Heavy metal burdens and Phase II methylation bottlenecks",
    ],
    details:
      "Every supplement prescribed is rigorously vetted for bioavailability, heavy metal testing, and purity. We explicitly avoid mass-market supplements packed with magnesium stearate, artificial binders, and synthetic dyes that overburden compromised digestive tracts.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40 mb-4">
          <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Integrated Natural Medicine</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
          Clinical Treatments & Diagnostic Modalities
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Dr. Craig Wright integrates four foundational healing disciplines into a cohesive, evidence-informed treatment strategy tailored to your physiological blueprint.
        </p>
      </section>

      {/* 2. SERVICES DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-sage-200/80 dark:border-slate-800 shadow-soft-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-sage-100 dark:bg-slate-800 text-sage-800 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {service.badge}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="font-serif text-base text-emerald-800 dark:text-emerald-300 italic">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Mechanisms of Action */}
                  <div className="pt-2 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Physiological Mechanisms:
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {service.mechanisms.map((mech, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                          <span>{mech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Details */}
                  <div className="p-4 rounded-2xl bg-sage-50/70 dark:bg-slate-800/60 border border-sage-100 dark:border-slate-700/60 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>Dispensary & Administration:</strong> {service.details}
                  </div>
                </div>

                {/* Right Column: Imagery & Conditions Treated */}
                <div className="lg:col-span-5 bg-sage-50/40 dark:bg-slate-850 p-6 sm:p-8 rounded-2xl border border-sage-200/60 dark:border-slate-700/60 space-y-6">
                  {service.image && (
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-soft border border-sage-200/80 dark:border-slate-700">
                      <Image
                        src={service.image}
                        alt={service.imageCaption || service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                        <span className="text-white text-[11px] font-serif font-medium">
                          {service.imageCaption}
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-3">
                      Clinically Indicated For:
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {service.conditions.map((cond, i) => (
                        <li key={i} className="flex items-start space-x-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-sage-200/60 dark:border-slate-700 space-y-3">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Interested in whether this modality suits your case?
                    </div>
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-sage-700 hover:bg-sage-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider shadow transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Initial Intake</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 3. FUNCTIONAL PATHOLOGY & LAB DIAGNOSTICS */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-sage-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
                Diagnostic Precision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Functional Lab Pathology & Diagnostic Testing
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When complex or longstanding cases require objective biomarker clarification, Dr. Craig collaborates with leading accredited South African and international pathology laboratories (such as PathCare, Ampath, and Lancet).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive Stool & GI-MAP Microbiome</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Salivary Diurnal Cortisol & DHEA Profiles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Thyroid Hormone Cascade (TSH, fT3, fT4, Antibodies)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IgG / IgE Food Sensitivity & Intolerance Panels</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                href="/consultations"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs uppercase tracking-wider shadow transition-colors"
              >
                <span>Read About the Patient Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
