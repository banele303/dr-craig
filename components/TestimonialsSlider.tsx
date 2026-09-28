"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, User } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  duration: string;
  quote: string;
  rating: number;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah L.",
    location: "Constantia, Cape Town",
    condition: "Chronic Fatigue Syndrome & Post-Viral Malaise",
    duration: "18 Months of illness prior to treatment",
    quote:
      "After a year and a half of being told my blood tests were 'normal' while barely having energy to walk up stairs, Dr. Craig Wright changed everything. His comprehensive 90-minute consultation looked at my immune history from childhood. Within 8 weeks on his bespoke Withania and adrenal botanical tincture, the debilitating brain fog lifted. I am back to hiking Table Mountain.",
    rating: 5,
    treatment: "Phytotherapy Botanical Tincture & Constitutional Homeopathy",
  },
  {
    id: "2",
    name: "Markus V.",
    location: "Newlands, Cape Town",
    condition: "Ulcerative Colitis & Severe IBS Spasms",
    duration: "5 Years of flare-ups",
    quote:
      "Dr. Craig's dual mastery of herbal pharmacology and classical homeopathy brought me genuine mucosal healing. The Leonotis and demulcent herbal formulation completely settled the severe cramping that prescription antispasmodics couldn't touch. His dietary guidance was realistic and clinically thorough.",
    rating: 5,
    treatment: "Cape Botanical Gut Mucosa Protocol & Diet Revision",
  },
  {
    id: "3",
    name: "Elena R.",
    location: "Kamps Bay / Kenilworth",
    condition: "Perimenopausal Insomnia & Anxiety Surges",
    duration: "2 Years of disrupted sleep",
    quote:
      "I was waking up drenched in sweat at 3 AM with my heart pounding. Rather than putting me on synthetic sedatives, Dr. Craig prescribed an individual homeopathic remedy alongside botanical nervines. My sleep architecture restored within 3 weeks. It felt like my nervous system finally breathed out.",
    rating: 5,
    treatment: "Neuro-Endocrine Botanical Tonic & Ignatia 200CH",
  },
  {
    id: "4",
    name: "David K.",
    location: "Rondebosch, Cape Town",
    condition: "Adult Atopic Dermatitis & Eczema",
    duration: "3 Years refractory to steroid creams",
    quote:
      "My hands and elbows were cracked and bleeding from eczema. Dr. Craig treated the internal hepatic burden and digestive dysbiosis rather than just suppressing the skin. Three months later, my skin is clear, supple, and I haven't touched a cortisone cream in six months.",
    rating: 5,
    treatment: "Hepatic Phytotherapy Complex & Tissue Salt Protocol",
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white dark:bg-slate-900 border border-sage-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-soft-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1 text-amber-400">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/40 px-3 py-1 rounded-full">
            Verified Clinical Patient
          </span>
        </div>

        <Quote className="w-10 h-10 text-sage-200 dark:text-slate-700 mb-4" />

        <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic">
          &ldquo;{active.quote}&rdquo;
        </p>

        <div className="mt-8 pt-6 border-t border-sage-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-full bg-sage-700 text-white flex items-center justify-center font-serif font-bold text-sm">
              {active.name.split(" ")[0][0]}
              {active.name.split(" ")[1] ? active.name.split(" ")[1][0] : ""}
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                {active.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {active.location} &bull; <span className="text-emerald-600 dark:text-emerald-400 font-medium">{active.condition}</span>
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 sm:text-right">
            <div className="font-semibold text-slate-700 dark:text-slate-300">
              Protocol: {active.treatment}
            </div>
            <div>Duration: {active.duration}</div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex space-x-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i
                    ? "w-8 bg-sage-700 dark:bg-emerald-500"
                    : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-sage-200 dark:border-slate-700 hover:bg-sage-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
              aria-label="Previous patient story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-sage-200 dark:border-slate-700 hover:bg-sage-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
              aria-label="Next patient story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
