import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Leaf,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  Search,
  FlaskConical,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Insights & South African Flora | Botanical Monographs & Articles",
  description:
    "Explore clinical monographs on South African indigenous medicinal plants (Leonotis leonurus, Sutherlandia frutescens, Pelargonium) and holistic living guides by Dr. Craig Wright.",
};

const botanicalPlants = [
  {
    id: "leonotis",
    commonName: "Wild Dagga / Lion's Ear",
    botanicalName: "Leonotis leonurus",
    family: "Lamiaceae",
    image: "/images/leonotis-leonurus.jpg",
    activeCompounds: "Leonurine, marrubiin, diterpenoids",
    indications: "Cardiovascular hypertension, bronchial asthma, smooth muscle spasticity, visceral anxiety",
    properties: "Antispasmodic, mild cardiotonic, anti-inflammatory, hypotensive",
    summary:
      "A revered indigenous Cape shrub whose brilliant orange whorled flowers yield diterpenoids that exhibit documented calcium-channel modulating and relaxant effects on bronchial and vascular smooth muscle.",
    clinicalTip:
      "Dr. Craig incorporates Leonotis in individual formulas for hyper-sympathetic nervous states presenting with cardiac palpitations and digestive cramping.",
  },
  {
    id: "sutherlandia",
    commonName: "Cancer Bush / Kankerbos",
    botanicalName: "Sutherlandia frutescens (Lessertia)",
    family: "Fabaceae",
    image: "/images/sutherlandia-tincture.jpg",
    activeCompounds: "Canavanine, pinitol, GABA, triterpenoid saponins",
    indications: "Chronic immune depletion, post-viral convalescence, cachexia, chronic fatigue",
    properties: "Immunomodulator, adaptogen, metabolic restorative, mild anxiolytic",
    summary:
      "Perhaps the most legendary South African medicinal adaptogen, traditionally used across the Karoo and Cape to restore physical stamina in debilitating illnesses without causing over-excitation.",
    clinicalTip:
      "High L-canavanine content helps interfere with viral protein synthesis while natural GABA levels promote physiological equilibrium under chronic immunological strain.",
  },
  {
    id: "pelargonium",
    commonName: "African Geranium / Rabassam",
    botanicalName: "Pelargonium sidoides",
    family: "Geraniaceae",
    image: "/images/althaea-syrup.jpg",
    activeCompounds: "Umckalin, coumarins, catechin gallates",
    indications: "Acute bronchitis, sinusitis, tonsillitis, recurrent respiratory infections",
    properties: "Antiviral, antibacterial, mucolytic, ciliary beat accelerator",
    summary:
      "Native to the coastal eastern grasslands and Cape, the dark red tubers of this plant hold international patent recognition as an effective botanical medication for upper respiratory tract infections.",
    clinicalTip:
      "Prevents bacterial adherence to respiratory mucous membranes and stimulates macrophage phagocytosis during winter virus exposure.",
  },
  {
    id: "aloe-ferox",
    commonName: "Cape Aloe / Bitter Aloe",
    botanicalName: "Aloe ferox",
    family: "Asphodelaceae",
    image: "/images/african-sage-oxymel.jpg",
    activeCompounds: "Aloin, barbaloin, polymannans, chromones",
    indications: "Sluggish bowel transit, hepatic congestion, skin wound healing, gut dysbiosis",
    properties: "Hepatic stimulant, peristaltic bitter tonic, anti-inflammatory, antimicrobial",
    summary:
      "Harvested traditionally in the dry scrub of the Western and Eastern Cape, the bitter yellow crystalline juice stimulates bile production and peristalsis, while the inner gel soothes damaged tissues.",
    clinicalTip:
      "Used at micro-doses to tone bowel motility without creating dependency seen with synthetic laxatives.",
  },
  {
    id: "cyclopia",
    commonName: "Honeybush / Heuningbos",
    botanicalName: "Cyclopia intermedia & genistoides",
    family: "Fabaceae",
    image: "/images/cape-fynbos-flora.jpg",
    activeCompounds: "Mangiferin, isomangiferin, hesperitin",
    indications: "Perimenopausal hot flushes, metabolic syndrome, cellular oxidative stress",
    properties: "Phytoestrogenic, antioxidant, chemoprotective, anti-inflammatory",
    summary:
      "An indigenous mountain fynbos plant with pleasant aromatic honey fragrance. Its rich xanthone polyphenols support estrogen balance and insulin sensitivity without cardiovascular risk.",
    clinicalTip:
      "An exceptional daily restorative botanical infusion for menopausal vasomotor symptoms and gentle endocrine modulation.",
  },
];

const articles = [
  {
    slug: "hpa-axis-fatigue",
    title: "The HPA Axis Reset: Navigating Cortisol Dysregulation in High-Demand Careers",
    category: "Endocrinology & Stress",
    image: "/images/clinical-nutrition.jpg",
    readTime: "7 min read",
    date: "14 Sept 2026",
    excerpt:
      "Why 'adrenal fatigue' is a misnomer, and how the brain's hypothalamic-pituitary signaling uncouples under prolonged stress. Practical botanical steps using Withania and Rhodiola to restore diurnal rhythm.",
  },
  {
    slug: "gut-brain-vagus",
    title: "The Vagus Nerve & Gut-Brain Crosstalk: Healing IBS from the Autonomic Nervous System",
    category: "Gastroenterology",
    image: "/images/cape-fynbos-flora.jpg",
    readTime: "9 min read",
    date: "28 August 2026",
    excerpt:
      "When digestive symptoms persist despite strict elimination diets, the autonomic tone of the vagus nerve is often the overlooked mediator. How classical homeopathy and bitter botanicals reinstate gut motility.",
  },
  {
    slug: "homeopathy-science",
    title: "Understanding Homeopathic Potencies: Nanotechnology, Water Memory, and the Law of Similars",
    category: "Homeopathic Science",
    image: "/images/homeopathic-remedies.jpg",
    readTime: "11 min read",
    date: "04 August 2026",
    excerpt:
      "A scientific appraisal of ultra-high dilutions, nanoparticulate structures, and how modern hormesis and biodynamics illuminate Samuel Hahnemann's classical discoveries.",
  },
  {
    slug: "weaning-sleep-aids",
    title: "Restoring Natural Sleep Architecture: Transitioning Off Chronic Sleep Medication",
    category: "Nervous System & Sleep",
    image: "/images/apothecary-dispensary.jpg",
    readTime: "8 min read",
    date: "19 July 2026",
    excerpt:
      "Step-by-step guidance on collaborating with your prescribing physician to gently taper off z-drugs and sedatives using botanical GABA modulators such as Passiflora, Valeriana, and Eschscholzia.",
  },
];

export default function InsightsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 dark:bg-emerald-950/70 text-sage-800 dark:text-emerald-300 border border-sage-200 dark:border-emerald-800/40 mb-4">
          <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Botanical Knowledge & Research</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
          Insights, Research & Cape Medicinal Flora
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Educational monographs exploring South Africa&apos;s rich botanical biodiversity, clinical pharmacognosy, and evidence-informed holistic health strategies.
        </p>
      </section>

      {/* 2. BOTANICAL SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-sage-200 dark:border-slate-800">
          <div className="relative aspect-[21/9] min-h-[300px] w-full">
            <Image
              src="/images/cape-fynbos-flora.jpg"
              alt="Cape Floral Kingdom Botanical Pharmacognosy by Dr. Craig Wright"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent flex items-center p-8 sm:p-12">
              <div className="max-w-xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
                  Cape Floral Kingdom Research
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                  Ethnobotany &amp; Clinical Pharmacognosy
                </h2>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  The Cape Floristic Region encompasses over 9,000 vascular plant species, nearly 70% of which are strictly endemic. Dr. Craig Wright bridges centuries of traditional South African knowledge with contemporary phytochemical profiling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTANICAL SHOWCASE: SOUTH AFRICAN MEDICINAL PLANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-sage-200/80 dark:border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Pharmacognosy Series
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              South African Medicinal Plants in Clinical Practice
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs text-slate-500">
            Formulated in our Kenilworth Dispensary
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {botanicalPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
            >
              {plant.image && (
                <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.commonName}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono uppercase bg-slate-900/80 backdrop-blur text-white px-2 py-0.5 rounded shadow">
                      {plant.family}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-7 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      {plant.commonName}
                    </h3>
                    <p className="font-serif text-sm text-emerald-700 dark:text-emerald-400 italic">
                      {plant.botanicalName}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {plant.summary}
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong>Active Principles:</strong> {plant.activeCompounds}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <strong>Therapeutic Actions:</strong> {plant.properties}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-sage-50/70 dark:bg-slate-800/70 border border-sage-100 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                  <strong className="text-emerald-800 dark:text-emerald-400">Clinical Application:</strong> {plant.clinicalTip}
                </div>
              </div>

              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Cape Indigenous</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Regulated Tincture</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLINICAL ARTICLES & ESSAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          badge="Clinical Perspectives"
          title="Articles & Holistic Living Guides"
          subtitle="Deep dive into pathophysiology, classical prescribing, and evidence-informed self-care protocols."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-sage-200/80 dark:border-slate-800 shadow-soft hover:shadow-soft-lg transition-all flex flex-col justify-between"
            >
              {art.image && (
                <div className="relative aspect-[16/8] w-full bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-8 space-y-3">
                <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-sage-100 dark:bg-emerald-950 text-sage-800 dark:text-emerald-300 font-medium">
                    {art.category}
                  </span>
                  <span>&bull;</span>
                  <span>{art.readTime}</span>
                  <span>&bull;</span>
                  <span>{art.date}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {art.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="p-8 pt-0">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">By Dr. Craig Wright</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:text-emerald-600"
                  >
                    <span>Discuss in Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. NEWSLETTER & BOTANICAL DISPATCH */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-sage-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
          <Sparkles className="w-8 h-8 text-emerald-300 mx-auto" />
          <h2 className="font-serif text-3xl font-bold">
            The Seasonal Cape Botanical Dispatch
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Receive monthly clinical research summaries, Cape plant identification profiles, and practical seasonal wellness advice directly from Dr. Craig&apos;s desk.
          </p>
          <div className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your preferred email"
              className="flex-grow px-4 py-3 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            Zero spam. Only deeply researched botanical insights. Unsubscribe at any time.
          </div>
        </div>
      </section>
    </div>
  );
}
