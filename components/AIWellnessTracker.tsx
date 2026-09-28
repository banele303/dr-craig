"use client";

import React, { useState, useId } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Activity,
  Sparkles,
  TrendingDown,
  CheckCircle2,
  Calendar,
  Layers,
  Info,
  Sliders,
  AlertCircle,
  FlaskConical,
} from "lucide-react";

interface ProtocolDataPoint {
  week: string;
  symptomSeverity: number; // 0 - 100 (lower is better)
  remedyAdherence: number; // 0 - 100%
  vitalityScore: number; // 0 - 100 (higher is better)
  inflammationIndex: number;
  clinicalNote: string;
  botanicalsActive: string[];
}

const protocols: Record<
  string,
  {
    name: string;
    description: string;
    condition: string;
    remedies: string;
    data: ProtocolDataPoint[];
  }
> = {
  fatigue: {
    name: "Chronic Fatigue & Adrenal Recovery",
    description:
      "Hypothalamic-Pituitary-Adrenal (HPA) axis restoration combining adaptogens and homeopathic Phosphoricum Acidum.",
    condition: "Post-Viral Fatigue & Exhaustion",
    remedies: "Withania somnifera (Ashwagandha) + Eleutherococcus + Phos. Ac 200CH",
    data: [
      {
        week: "Wk 1",
        symptomSeverity: 88,
        remedyAdherence: 70,
        vitalityScore: 22,
        inflammationIndex: 78,
        clinicalNote: "Initial case intake. Severe morning exhaustion, brain fog, cortisol nadir.",
        botanicalsActive: ["Withania somnifera 1:2", "Avena sativa tincture"],
      },
      {
        week: "Wk 2",
        symptomSeverity: 82,
        remedyAdherence: 85,
        vitalityScore: 29,
        inflammationIndex: 72,
        clinicalNote: "Sleep architecture stabilizing; less mid-afternoon crashing.",
        botanicalsActive: ["Withania somnifera", "Eleutherococcus senticosus"],
      },
      {
        week: "Wk 4",
        symptomSeverity: 68,
        remedyAdherence: 92,
        vitalityScore: 44,
        inflammationIndex: 58,
        clinicalNote: "Cognitive endurance increased to 5 hours uninterrupted. Mild detox headache resolved.",
        botanicalsActive: ["Adaptogenic elixir", "Phosphoricum Acidum 200CH"],
      },
      {
        week: "Wk 6",
        symptomSeverity: 52,
        remedyAdherence: 95,
        vitalityScore: 58,
        inflammationIndex: 44,
        clinicalNote: "Morning waking unprompted at 07:00. Exercise tolerance returning without relapse.",
        botanicalsActive: ["Glycyrrhiza glabra low-dose", "Withania"],
      },
      {
        week: "Wk 8",
        symptomSeverity: 36,
        remedyAdherence: 98,
        vitalityScore: 72,
        inflammationIndex: 31,
        clinicalNote: "Significant vitality gain. Adrenal saliva profile normalized by 62%.",
        botanicalsActive: ["Botanical maintenance tonic"],
      },
      {
        week: "Wk 10",
        symptomSeverity: 24,
        remedyAdherence: 94,
        vitalityScore: 81,
        inflammationIndex: 22,
        clinicalNote: "Resilient stress response during high-demand work project.",
        botanicalsActive: ["Rhodiola rosea micro-dose", "Tissue Salts"],
      },
      {
        week: "Wk 12",
        symptomSeverity: 14,
        remedyAdherence: 96,
        vitalityScore: 89,
        inflammationIndex: 15,
        clinicalNote: "Full remission of chronic fatigue symptom constellation. Transition to seasonal maintenance.",
        botanicalsActive: ["Seasonal constitutional remedy"],
      },
    ],
  },
  gut: {
    name: "Gastrointestinal Dysbiosis & Leaky Gut",
    description:
      "Mucosal membrane restoration, eradication of dysbiotic flora, and vagus nerve tonification.",
    condition: "IBS, Bloating & Small Intestinal Bacterial Imbalance",
    remedies: "Leonotis leonurus + Matricaria chamomilla + Hydrastis Canadensis",
    data: [
      {
        week: "Wk 1",
        symptomSeverity: 92,
        remedyAdherence: 75,
        vitalityScore: 30,
        inflammationIndex: 85,
        clinicalNote: "Postprandial distension, severe bloating, visceral hypersensitivity.",
        botanicalsActive: ["Leonotis leonurus decoction", "Matricaria chamomilla"],
      },
      {
        week: "Wk 2",
        symptomSeverity: 80,
        remedyAdherence: 88,
        vitalityScore: 38,
        inflammationIndex: 76,
        clinicalNote: "Spasmodic pain reduced by 40%. Introduction of demulcent herbs.",
        botanicalsActive: ["Ulmus rubra", "Althaea officinalis radix"],
      },
      {
        week: "Wk 4",
        symptomSeverity: 62,
        remedyAdherence: 94,
        vitalityScore: 50,
        inflammationIndex: 60,
        clinicalNote: "Transit time regularized to 24 hrs. Gut-brain anxiety markedly reduced.",
        botanicalsActive: ["Curcuma longa optimized", "Nux Vomica 30CH"],
      },
      {
        week: "Wk 6",
        symptomSeverity: 45,
        remedyAdherence: 95,
        vitalityScore: 65,
        inflammationIndex: 42,
        clinicalNote: "Reintroduction of fermented foods tolerated without flare-up.",
        botanicalsActive: ["Spore probiotics", "Cape Wild Dagga extract"],
      },
      {
        week: "Wk 8",
        symptomSeverity: 28,
        remedyAdherence: 96,
        vitalityScore: 78,
        inflammationIndex: 26,
        clinicalNote: "Complete resolution of postprandial cramping. Energy surging.",
        botanicalsActive: ["Gentiana lutea bitters", "L-Glutamine complex"],
      },
      {
        week: "Wk 12",
        symptomSeverity: 11,
        remedyAdherence: 95,
        vitalityScore: 91,
        inflammationIndex: 12,
        clinicalNote: "Microbiome biodiversity verified restored. No dietary restriction required.",
        botanicalsActive: ["Digestive bitters as needed"],
      },
    ],
  },
  anxiety: {
    name: "Neuro-Endocrine & Anxiety Regulation",
    description:
      "GABAergic botanical modulation, sympathetic nervous system downregulation, and emotional equilibrium.",
    condition: "Generalized Stress, Insomnia & Sympathetic Dominance",
    remedies: "Passiflora incarnata + Melissa officinalis + Ignatia Amara 200CH",
    data: [
      {
        week: "Wk 1",
        symptomSeverity: 86,
        remedyAdherence: 80,
        vitalityScore: 28,
        inflammationIndex: 70,
        clinicalNote: "Restless racing thoughts at 03:00, palpitations, somatic tension.",
        botanicalsActive: ["Passiflora incarnata", "Melissa officinalis"],
      },
      {
        week: "Wk 2",
        symptomSeverity: 74,
        remedyAdherence: 90,
        vitalityScore: 39,
        inflammationIndex: 62,
        clinicalNote: "Sleep latency dropped from 90 mins to 35 mins.",
        botanicalsActive: ["Valeriana officinalis", "Ignatia 200CH"],
      },
      {
        week: "Wk 4",
        symptomSeverity: 55,
        remedyAdherence: 93,
        vitalityScore: 56,
        inflammationIndex: 48,
        clinicalNote: "Daytime panic triggers muted. Heart rate variability (HRV) improved +18ms.",
        botanicalsActive: ["Scutellaria lateriflora", "Magnesium Glycinate"],
      },
      {
        week: "Wk 6",
        symptomSeverity: 40,
        remedyAdherence: 97,
        vitalityScore: 68,
        inflammationIndex: 35,
        clinicalNote: "Deep sleep stage percentage increased to 22% of nocturnal cycle.",
        botanicalsActive: ["Neuro-botanical nervine tonic"],
      },
      {
        week: "Wk 8",
        symptomSeverity: 25,
        remedyAdherence: 96,
        vitalityScore: 82,
        inflammationIndex: 24,
        clinicalNote: "Calm nervous system baseline. Coping mechanisms robust.",
        botanicalsActive: ["Evening nervous trophorestorative"],
      },
      {
        week: "Wk 12",
        symptomSeverity: 12,
        remedyAdherence: 94,
        vitalityScore: 92,
        inflammationIndex: 14,
        clinicalNote: "Sustained emotional steadiness and restorative restorative sleep cycle.",
        botanicalsActive: ["Constitutional maintenance drops"],
      },
    ],
  },
};

export function AIWellnessTracker() {
  const [mounted, setMounted] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<"fatigue" | "gut" | "anxiety">("fatigue");
  const [complianceMultiplier, setComplianceMultiplier] = useState<number>(100);
  const [showVitality, setShowVitality] = useState(true);
  const [showInflammation, setShowInflammation] = useState(false);
  const [selectedDataIndex, setSelectedDataIndex] = useState<number>(0);
  const gradientId = useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const protocol = protocols[selectedProtocol];

  // Adjust data dynamically based on adherence simulator slider
  const simulatedData = protocol.data.map((item, idx) => {
    const factor = complianceMultiplier / 100;
    // Lower adherence slows symptom reduction and lowers vitality gains
    const penalty = (1 - factor) * (idx * 5);
    const adjustedSeverity = Math.min(100, Math.round(item.symptomSeverity + penalty));
    const adjustedVitality = Math.max(10, Math.round(item.vitalityScore * factor));
    const adjustedAdherence = Math.round(item.remedyAdherence * factor);

    return {
      ...item,
      symptomSeverity: adjustedSeverity,
      vitalityScore: adjustedVitality,
      remedyAdherence: adjustedAdherence,
    };
  });

  const activePoint = simulatedData[selectedDataIndex] || simulatedData[0];
  const initialSeverity = simulatedData[0].symptomSeverity;
  const currentSeverity = simulatedData[simulatedData.length - 1].symptomSeverity;
  const totalReductionPct = Math.round(((initialSeverity - currentSeverity) / initialSeverity) * 100);

  return (
    <div className="bg-white dark:bg-slate-900/95 border border-sage-200 dark:border-slate-800 rounded-3xl shadow-soft-lg overflow-hidden transition-all duration-300">
      {/* Header bar */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-sage-50/70 via-white to-emerald-50/40 dark:from-slate-800/60 dark:via-slate-900 dark:to-emerald-950/20 border-b border-sage-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>AI Clinical Efficacy Engine</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Patient Wellness & Remedy Adherence Tracker
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Real-world simulated recovery trajectory based on 12-week clinical phytotherapy & homeopathic care.
            </p>
          </div>

          {/* Protocol selector tabs */}
          <div className="flex flex-wrap gap-2 bg-sage-100/60 dark:bg-slate-800 p-1.5 rounded-2xl border border-sage-200/50 dark:border-slate-700">
            {(
              [
                { id: "fatigue", label: "Adrenal & Fatigue" },
                { id: "gut", label: "Gut & Microbiome" },
                { id: "anxiety", label: "Neuro-Endocrine" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedProtocol(tab.id);
                  setSelectedDataIndex(0);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedProtocol === tab.id
                    ? "bg-white dark:bg-slate-700 text-sage-900 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Protocol Meta Banner */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-sage-200/60 dark:border-slate-800 text-xs">
          <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
            <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>
              <strong>Target Condition:</strong> {protocol.condition}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
            <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate">
              <strong>Key Botanicals:</strong> {protocol.remedies}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-semibold">
            <TrendingDown className="w-4 h-4 shrink-0" />
            <span>Avg. Symptom Reduction: -{totalReductionPct}% by Week 12</span>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="p-6 sm:p-8">
        {/* Toggleable metrics & adherence simulation slider */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Metric Layers:
            </span>
            <button
              onClick={() => setShowVitality(!showVitality)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                showVitality
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
              }`}
            >
              Vitality & Energy Index
            </button>
            <button
              onClick={() => setShowInflammation(!showInflammation)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                showInflammation
                  ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700"
                  : "bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700"
              }`}
            >
              Systemic Inflammation Index
            </button>
          </div>

          {/* Interactive adherence simulator slider */}
          <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
            <Sliders className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <label htmlFor="adherence-slider" className="text-xs font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
              Patient Adherence: <strong>{complianceMultiplier}%</strong>
            </label>
            <input
              id="adherence-slider"
              type="range"
              min="50"
              max="100"
              step="5"
              value={complianceMultiplier}
              onChange={(e) => setComplianceMultiplier(Number(e.target.value))}
              className="w-28 accent-emerald-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Recharts Component */}
        <div className="w-full h-80 sm:h-96">
          {!mounted ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-400 space-y-2">
              <Activity className="w-6 h-6 animate-pulse text-emerald-500" />
              <span className="text-xs font-medium">Initializing AI Patient Wellness Telemetry...</span>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={simulatedData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                onClick={(e) => {
                  if (e && e.activeTooltipIndex !== undefined) {
                    setSelectedDataIndex(e.activeTooltipIndex);
                  }
                }}
              >
                <defs>
                  <linearGradient id={`severity-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id={`vitality-${gradientId}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.15} />

                <XAxis
                  dataKey="week"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#cbd5e1" }}
                />

                <YAxis
                  domain={[0, 100]}
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#cbd5e1" }}
                  unit="%"
                />

                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as ProtocolDataPoint;
                      return (
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-sage-200 dark:border-slate-700 text-xs max-w-xs space-y-2">
                          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                            <span className="font-bold text-slate-900 dark:text-white font-serif">
                              {label} Review Milestone
                            </span>
                            <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                              Adherence: {data.remedyAdherence}%
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-rose-600 dark:text-rose-400 font-medium">
                              <span>Symptom VAS Score:</span>
                              <span className="font-bold">{data.symptomSeverity}/100</span>
                            </div>
                            {showVitality && (
                              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                                <span>Vitality Index:</span>
                                <span className="font-bold">{data.vitalityScore}/100</span>
                              </div>
                            )}
                            {showInflammation && (
                              <div className="flex justify-between text-amber-600 dark:text-amber-400 font-medium">
                                <span>Inflammation Marker:</span>
                                <span className="font-bold">{data.inflammationIndex}/100</span>
                              </div>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 italic border-t border-slate-100 dark:border-slate-800">
                            &ldquo;{data.clinicalNote}&rdquo;
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />

                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ paddingBottom: "12px", fontSize: "12px" }}
                />

                {/* Adherence Bar (Background Context) */}
                <Bar
                  dataKey="remedyAdherence"
                  name="Herbal Adherence (%)"
                  fill="#cbd5e1"
                  opacity={0.3}
                  radius={[4, 4, 0, 0]}
                />

                {/* Symptom Severity Area & Line */}
                <Area
                  type="monotone"
                  dataKey="symptomSeverity"
                  name="Symptom Severity (VAS)"
                  stroke="#e11d48"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill={`url(#severity-${gradientId})`}
                />

                {/* Vitality Score */}
                {showVitality && (
                  <Area
                    type="monotone"
                    dataKey="vitalityScore"
                    name="Vitality & Energy Index"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill={`url(#vitality-${gradientId})`}
                  />
                )}

                {/* Inflammation Score */}
                {showInflammation && (
                  <Line
                    type="monotone"
                    dataKey="inflammationIndex"
                    name="Systemic Inflammation Index"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ r: 4 }}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Milestone Detail Card - Driven by Click or Selection */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-5 rounded-2xl bg-sage-50/60 dark:bg-slate-800/70 border border-sage-200/60 dark:border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-800 dark:text-emerald-400 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Clinical Snapshot: {activePoint.week}</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Click any chart bar or point to inspect
                </span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {activePoint.clinicalNote}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-sage-200/50 dark:border-slate-700 flex flex-wrap gap-2 items-center">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Active Botanical Inclusions:
              </span>
              {activePoint.botanicalsActive.map((herb, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full text-[11px] bg-white dark:bg-slate-900 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-serif italic"
                >
                  {herb}
                </span>
              ))}
            </div>
          </div>

          {/* AI Clinical Summary Stat */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Efficacy Outcome</span>
              </div>
              <div className="mt-3">
                <div className="text-3xl font-bold font-serif">
                  -{totalReductionPct}%
                </div>
                <div className="text-xs text-emerald-100 font-normal mt-0.5">
                  Reduction in primary distress symptoms over 12 weeks
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-500/40 text-[11px] text-emerald-100 leading-snug">
              Consistent adherence (&gt;90%) accelerates constitutional remedy resonance by up to 2.4&times;.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
