"use client";

import { useState, useEffect } from "react";

// ============================================
// SVG Icon Components (Medical Line Icons)
// ============================================

const Icons = {
  // Health dimensions
  energy: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  weight: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
  recovery: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  aging: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" strokeLinecap="round" />
    </svg>
  ),
  // Actions & Objects
  syringe: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2l4 4M15 5l6 6-9 9-6-6 9-9zM3 21l6-6M9 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sun: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
    </svg>
  ),
  moon: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  clock: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  ),
  user: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  activity: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  beaker: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3h6M10 3v6.5L5 20h14l-5-10.5V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  droplet: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dumbbell: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 5v14M18 5v14M6 9h12M6 15h12M2 9h4M2 15h4M18 9h4M18 15h4" strokeLinecap="round" />
    </svg>
  ),
  leaf: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 21c3-3.5 5-7 6-13 1 6 3 9.5 6 13M12 8c-5 0-8 3-8 8M12 8c5 0 8 3 8 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  brain: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5a3 3 0 00-3-3 3 3 0 00-3 3c0 1-1 2-2 2a2 2 0 00-2 2c0 2 2 3 3 3-1 1-2 2-2 4a3 3 0 003 3 3 3 0 003-3h4a3 3 0 003 3 3 3 0 003-3c0-2-1-3-2-4 1 0 3-1 3-3a2 2 0 00-2-2c-1 0-2-1-2-2a3 3 0 00-3-3 3 3 0 00-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5v11" strokeLinecap="round" />
    </svg>
  ),
  pill: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10.5 1.5l-8 8a5 5 0 007.07 7.07l8-8a5 5 0 00-7.07-7.07zM7 10l7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  info: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
    </svg>
  ),
  chart: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  molecule: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M14.5 9.5l3-3M9.5 9.5l-3-3M14.5 14.5l3 3M9.5 14.5l-3 3" />
    </svg>
  ),
  close: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  calendar: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
    </svg>
  ),
  creditCard: (className = "icon") => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" strokeLinecap="round" />
    </svg>
  ),
};

// ============================================
// Type Definitions
// ============================================

type HealthDimension = "energy" | "weight" | "recovery" | "aging";

interface HealthScores {
  energy: number;
  weight: number;
  recovery: number;
  aging: number;
}

interface Peptide {
  name: string;
  description: string;
  benefits: string[];
  researchNote?: string;
  citation?: string;
}

interface LifestyleStep {
  title: string;
  description: string;
  iconKey: keyof typeof Icons;
  timeOfDay: "morning" | "midday" | "evening" | "anytime";
}

interface TimelinePhase {
  name: string;
  duration: string;
  focus: string;
}

interface Protocol {
  primaryPeptides: Peptide[];
  supportPeptides: Peptide[];
  lifestyleSteps: LifestyleStep[];
  timeline: TimelinePhase[];
}

// Wellness Archetypes
interface Archetype {
  name: string;
  tagline: string;
  iconKey: keyof typeof Icons;
}

const archetypes: Record<HealthDimension, Archetype> = {
  energy: {
    name: "Energy & Vitality Focus",
    tagline: "Optimizing your natural energy levels and sleep quality",
    iconKey: "energy",
  },
  weight: {
    name: "Metabolic Optimization Focus",
    tagline: "Supporting healthy body composition and metabolic function",
    iconKey: "weight",
  },
  recovery: {
    name: "Recovery & Performance Focus",
    tagline: "Enhancing tissue repair and physical resilience",
    iconKey: "recovery",
  },
  aging: {
    name: "Longevity & Wellness Focus",
    tagline: "Supporting cellular health and long-term vitality",
    iconKey: "aging",
  },
};

// Research insights based on answers (shown between questions)
interface Insight {
  condition: (answers: Map<string, number | number[]>) => boolean;
  title: string;
  text: string;
  iconKey: keyof typeof Icons;
}

const insightTriggers: { afterQuestion: string; insights: Insight[] }[] = [
  {
    afterQuestion: "energy",
    insights: [
      {
        condition: (answers) => {
          const val = answers.get("energy") as number;
          return val !== undefined && val <= 2;
        },
        title: "Mitochondrial Energy Production",
        text: "Chronic fatigue often correlates with declining mitochondrial function. MOTS-c, a mitochondrial-derived peptide, has been shown to improve cellular energy metabolism and exercise capacity in clinical trials, with participants reporting improved stamina within 4-6 weeks.",
        iconKey: "energy",
      },
      {
        condition: (answers) => {
          const val = answers.get("energy") as number;
          return val !== undefined && val >= 4;
        },
        title: "Sustaining Peak Performance",
        text: "Even with good baseline energy, NAD+ precursors can enhance cellular metabolism. Clinical trials show NMN supplementation increases blood NAD+ by 139%, supporting sustained energy production and reducing age-related metabolic decline.",
        iconKey: "activity",
      },
      {
        condition: (answers) => {
          const val = answers.get("energy") as number;
          return val !== undefined && val === 3;
        },
        title: "Gut-Energy Connection",
        text: "BPC-157, a gut-healing peptide, has demonstrated systemic benefits beyond digestion. Studies show it modulates the gut-brain axis, with patients reporting improved energy and mood as gut inflammation decreases—often within 2-3 weeks.",
        iconKey: "heart",
      },
    ],
  },
  {
    afterQuestion: "exercise",
    insights: [
      {
        condition: (answers) => {
          const exercise = answers.get("exercise") as number;
          return exercise !== undefined && exercise >= 2; // Moderate or intense
        },
        title: "Accelerating Recovery",
        text: "BPC-157 and TB-500 work synergistically to speed tissue repair. Clinical data shows wounds healed in 22 days vs 57 days with placebo—a 2.6x improvement. Athletes report reduced soreness and faster return to training.",
        iconKey: "recovery",
      },
      {
        condition: (answers) => {
          const exercise = answers.get("exercise") as number;
          return exercise !== undefined && exercise <= 1; // None or light
        },
        title: "Starting Your Fitness Journey",
        text: "Peptide therapy can help ease the transition to more activity. Studies on AOD-9604 show enhanced fat metabolism without stimulant effects, while BPC-157 supports joint and connective tissue health—reducing barriers to exercise.",
        iconKey: "activity",
      },
    ],
  },
  {
    afterQuestion: "symptoms",
    insights: [
      {
        condition: (answers) => {
          const symptoms = answers.get("symptoms") as number[] | undefined;
          return symptoms !== undefined && symptoms.includes(2); // Joint pain/slow recovery
        },
        title: "Tissue Repair Breakthrough",
        text: "BPC-157 accelerates tendon and ligament healing by promoting angiogenesis (new blood vessel formation). Controlled studies show 42% faster healing at day 4 and 61% at day 7, with improved collagen organization.",
        iconKey: "recovery",
      },
      {
        condition: (answers) => {
          const symptoms = answers.get("symptoms") as number[] | undefined;
          return symptoms !== undefined && symptoms.includes(0); // Brain fog
        },
        title: "Cognitive Enhancement Research",
        text: "Semax, a nootropic peptide, increases BDNF (brain-derived neurotrophic factor) levels. In clinical trials, participants achieved 71% accuracy on memory tests vs 41% in controls—demonstrating significant cognitive enhancement.",
        iconKey: "brain",
      },
      {
        condition: (answers) => {
          const symptoms = answers.get("symptoms") as number[] | undefined;
          return symptoms !== undefined && symptoms.includes(4); // Stubborn belly fat
        },
        title: "Targeted Fat Reduction",
        text: "Tesamorelin is FDA-approved specifically for visceral fat. Phase III trials demonstrated 15-20% reduction in trunk fat over 26 weeks, with 69% achieving clinically significant reduction vs 33% placebo—without affecting lean mass.",
        iconKey: "weight",
      },
      {
        condition: (answers) => {
          const symptoms = answers.get("symptoms") as number[] | undefined;
          return symptoms !== undefined && symptoms.includes(3); // Poor sleep
        },
        title: "Sleep Quality Research",
        text: "DSIP (Delta Sleep-Inducing Peptide) directly targets sleep architecture. Studies show normalized cortisol patterns and increased delta wave sleep—the deepest, most restorative phase—with improvements often noticed within the first week.",
        iconKey: "moon",
      },
      {
        condition: (answers) => {
          const symptoms = answers.get("symptoms") as number[] | undefined;
          return symptoms === undefined || symptoms.length === 0;
        },
        title: "Preventive Optimization",
        text: "Even without symptoms, peptide therapy can optimize cellular repair. GHK-Cu, a copper peptide, activates over 4,000 genes involved in tissue remodeling. Studies show improved skin elasticity and wound healing in healthy subjects.",
        iconKey: "shield",
      },
    ],
  },
  {
    afterQuestion: "age",
    insights: [
      {
        condition: (answers) => {
          const val = answers.get("age") as number;
          return val !== undefined && val >= 2; // 40+
        },
        title: "Cellular Aging is Reversible",
        text: "Epithalon activates telomerase, the enzyme that maintains chromosome integrity. In landmark research, treated cells exceeded the normal division limit—extending from the 34th passage to beyond the 44th—suggesting true cellular rejuvenation.",
        iconKey: "aging",
      },
      {
        condition: (answers) => {
          const val = answers.get("age") as number;
          return val !== undefined && val < 2; // Under 40
        },
        title: "Building Your Foundation",
        text: "Starting optimization early compounds benefits over time. NAD+ levels begin declining in your 30s. Clinical trials show NMN supplementation maintains youthful NAD+ levels, supporting energy metabolism and DNA repair before decline accelerates.",
        iconKey: "chart",
      },
    ],
  },
  {
    afterQuestion: "sleep",
    insights: [
      {
        condition: (answers) => {
          const val = answers.get("sleep") as number;
          return val !== undefined && val <= 2;
        },
        title: "Restoring Deep Sleep",
        text: "Poor sleep disrupts every system. Ipamorelin, a selective peptide, increases deep sleep duration by ~50% without affecting cortisol or prolactin. Most patients report noticeably better sleep quality within 1-2 weeks of starting.",
        iconKey: "moon",
      },
      {
        condition: (answers) => {
          const val = answers.get("sleep") as number;
          return val !== undefined && val >= 4;
        },
        title: "Optimizing Recovery Windows",
        text: "Good sleep enables optimal recovery. During deep sleep, the body releases repair signals naturally. Targeted peptides like BPC-157 work synergistically with this process, enhancing tissue regeneration during your body's natural repair window.",
        iconKey: "recovery",
      },
      {
        condition: (answers) => {
          const val = answers.get("sleep") as number;
          return val !== undefined && val === 3;
        },
        title: "The Sleep-Metabolism Link",
        text: "Moderate sleep issues often impact metabolism. Research shows poor sleep increases ghrelin (hunger hormone) by 28% and decreases leptin (satiety hormone) by 18%. Optimizing sleep architecture can naturally support weight management goals.",
        iconKey: "weight",
      },
    ],
  },
];

// Question Types
type QuestionType = "single" | "multi" | "slider" | "screening";

interface BaseQuestion {
  id: string;
  question: string;
  type: QuestionType;
}

interface SingleQuestion extends BaseQuestion {
  type: "single";
  options: {
    text: string;
    scores: Partial<HealthScores>;
  }[];
}

interface MultiQuestion extends BaseQuestion {
  type: "multi";
  options: {
    text: string;
    scores: Partial<HealthScores>;
  }[];
}

interface SliderQuestion extends BaseQuestion {
  type: "slider";
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
  scoring: (value: number) => Partial<HealthScores>;
}

interface ScreeningQuestion extends BaseQuestion {
  type: "screening";
  options: {
    text: string;
    requiresReview: boolean;
  }[];
  note: string;
}

type Question = SingleQuestion | MultiQuestion | SliderQuestion | ScreeningQuestion;

// Questions Data
const questions: Question[] = [
  {
    id: "goal",
    question: "What are your health goals? (Select all that apply)",
    type: "multi",
    options: [
      { text: "Boost daily energy and reduce fatigue", scores: { energy: 3 } },
      { text: "Improve body composition and lose fat", scores: { weight: 3 } },
      { text: "Recover faster from workouts and build muscle", scores: { recovery: 3 } },
      { text: "Slow aging and optimize longevity", scores: { aging: 3 } },
      { text: "Improve sleep quality", scores: { energy: 2, aging: 1 } },
    ],
  },
  {
    id: "energy",
    question: "How would you rate your current energy levels?",
    type: "slider",
    min: 1,
    max: 5,
    minLabel: "Constantly fatigued",
    maxLabel: "High energy all day",
    scoring: (value: number) => ({
      energy: value <= 2 ? 3 : value === 3 ? 1 : 0,
    }),
  },
  {
    id: "metabolism",
    question: "How would you describe your metabolism?",
    type: "single",
    options: [
      { text: "Sluggish - I gain weight easily", scores: { weight: 2, energy: 1 } },
      { text: "Average - I maintain weight with some effort", scores: { weight: 1 } },
      { text: "Fast - I struggle to gain weight/muscle", scores: { recovery: 2 } },
      { text: "Unpredictable - It varies a lot", scores: { aging: 1, weight: 1 } },
    ],
  },
  {
    id: "exercise",
    question: "What's your current exercise routine?",
    type: "single",
    options: [
      { text: "None or minimal activity", scores: { energy: 1, weight: 1, recovery: 0 } },
      { text: "Light activity (walking, yoga)", scores: { recovery: 1, aging: 1 } },
      { text: "Moderate (3-4 days/week cardio or weights)", scores: { recovery: 2 } },
      { text: "Intense training (5+ days, heavy lifting or athletics)", scores: { recovery: 3 } },
    ],
  },
  {
    id: "symptoms",
    question: "Do you experience any of these? (Select all that apply)",
    type: "multi",
    options: [
      { text: "Brain fog or difficulty concentrating", scores: { energy: 1, aging: 2 } },
      { text: "Afternoon energy crashes", scores: { energy: 2 } },
      { text: "Joint pain or slow injury recovery", scores: { recovery: 2 } },
      { text: "Poor sleep quality", scores: { energy: 1, aging: 1 } },
      { text: "Stubborn belly fat", scores: { weight: 2 } },
      { text: "Low motivation or mood", scores: { energy: 1, aging: 1 } },
    ],
  },
  {
    id: "age",
    question: "What's your age range?",
    type: "single",
    options: [
      { text: "Under 30", scores: { recovery: 1 } },
      { text: "30-40", scores: { aging: 1, recovery: 1 } },
      { text: "40-50", scores: { aging: 2, energy: 1 } },
      { text: "50+", scores: { aging: 3, energy: 1 } },
    ],
  },
  {
    id: "cognitive",
    question: "How would you rate your current mental clarity and focus?",
    type: "slider",
    min: 1,
    max: 5,
    minLabel: "Often foggy or distracted",
    maxLabel: "Sharp and focused",
    scoring: (value: number) => ({
      aging: value <= 2 ? 2 : value === 3 ? 1 : 0,
      energy: value <= 2 ? 1 : 0,
    }),
  },
  {
    id: "sleep",
    question: "How would you rate your sleep quality?",
    type: "slider",
    min: 1,
    max: 5,
    minLabel: "Poor - I rarely feel rested",
    maxLabel: "Excellent - I wake refreshed",
    scoring: (value: number) => ({
      energy: value <= 2 ? 2 : 0,
      aging: value <= 2 ? 1 : 0,
      recovery: value <= 2 ? 1 : 0,
    }),
  },
  {
    id: "screening",
    question: "Do any of these apply to you?",
    type: "screening",
    note: "This helps your care team personalize your protocol",
    options: [
      { text: "None of these apply to me", requiresReview: false },
      { text: "I'm currently pregnant or breastfeeding", requiresReview: true },
      { text: "I have a history of cancer", requiresReview: true },
      { text: "I'm currently on hormone therapy or insulin", requiresReview: true },
    ],
  },
];

// Peptide Protocols Data - Expanded with tiered options based on need intensity
const peptideDatabase: Record<HealthDimension, { primary: Peptide[]; support: Peptide[]; advanced: Peptide[] }> = {
  energy: {
    primary: [
      {
        name: "CJC-1295/Ipamorelin",
        description: "This combination works with your body's natural rhythm to optimize growth hormone release—especially during sleep. Most people notice improved sleep quality within 1-2 weeks, followed by better daytime energy.",
        benefits: ["Better sleep", "More energy", "Faster recovery", "Improved body composition"],
        researchNote: "Clinical studies showed 2-10x increase in GH levels, ~50% increase in deep sleep, and effects lasting 6+ days per dose.",
      },
    ],
    support: [
      {
        name: "BPC-157",
        description: "Originally discovered in gastric juice, this peptide supports gut health and reduces systemic inflammation—two hidden causes of fatigue that many people overlook.",
        benefits: ["Gut healing", "Reduced inflammation", "Better nutrient absorption"],
        researchNote: "Studies show accelerated tissue healing with increased blood vessel formation and organized collagen production.",
      },
    ],
    advanced: [
      {
        name: "Semax",
        description: "A nootropic peptide that enhances mental energy and focus by boosting BDNF. Particularly helpful when fatigue has a cognitive component—brain fog, difficulty concentrating, or afternoon mental crashes.",
        benefits: ["Mental clarity", "Cognitive energy", "Focus & alertness"],
        researchNote: "Clinical trial: 71% accuracy on memory tests vs 41% in controls. Increases BDNF for enhanced neural plasticity.",
      },
      {
        name: "DSIP",
        description: "Delta Sleep-Inducing Peptide helps regulate sleep architecture and stress response. Particularly useful for those whose fatigue stems from poor sleep quality or high stress levels.",
        benefits: ["Deep sleep support", "Stress regulation", "Sleep architecture"],
        researchNote: "Studies show improved delta wave sleep and normalized cortisol patterns in stressed individuals.",
      },
    ],
  },
  weight: {
    primary: [
      {
        name: "Tesamorelin",
        description: "The only FDA-approved peptide for reducing visceral (belly) fat. It specifically targets the dangerous fat around your organs while preserving the muscle you've worked hard to build.",
        benefits: ["Visceral fat reduction", "Preserved muscle mass", "Improved metabolic markers"],
        researchNote: "FDA-approved. Clinical trials: 15-20% visceral fat reduction, 69% success rate vs 33% placebo, triglycerides down 50 mg/dL.",
      },
    ],
    support: [
      {
        name: "AOD-9604",
        description: "A fragment of growth hormone that stimulates fat burning without affecting blood sugar or causing other GH-related effects. A good option if you're concerned about glucose levels.",
        benefits: ["Fat metabolism", "Blood sugar neutral", "Weight management support"],
        researchNote: "Clinical trials confirmed blood sugar neutrality. Participants lost 3x more weight than placebo (2.8kg vs 0.8kg).",
      },
    ],
    advanced: [
      {
        name: "CJC-1295/Ipamorelin",
        description: "Optimizes growth hormone to support overall metabolic function. GH helps maintain muscle mass during weight loss and supports fat metabolism, especially when combined with exercise.",
        benefits: ["Metabolic support", "Muscle preservation", "Body recomposition"],
        researchNote: "Studies show IGF-1 elevation for up to 28 days, supporting sustained metabolic improvements.",
      },
      {
        name: "5-Amino-1MQ",
        description: "An emerging peptide that inhibits NNMT enzyme, which is overexpressed in fat tissue. By blocking this enzyme, it may help shift metabolism toward fat burning and support NAD+ levels.",
        benefits: ["Fat cell metabolism", "NAD+ support", "Metabolic shift"],
        researchNote: "Preclinical studies show reduced fat accumulation and improved metabolic markers through NNMT inhibition.",
      },
    ],
  },
  recovery: {
    primary: [
      {
        name: "BPC-157",
        description: "The go-to peptide for tissue repair. It accelerates healing of tendons, ligaments, muscles, and even gut tissue by promoting new blood vessel growth and organized collagen formation.",
        benefits: ["Faster tissue repair", "Tendon & ligament healing", "Reduced inflammation"],
        researchNote: "Studies show 2-3x faster cell migration to injury sites and improved functionality in tendon healing models.",
      },
    ],
    support: [
      {
        name: "TB-500",
        description: "Works synergistically with BPC-157 for comprehensive healing. It promotes cell migration to injury sites and helps reduce scarring. Often used together for stubborn injuries.",
        benefits: ["Systemic healing", "Improved flexibility", "Reduced scarring"],
        researchNote: "Clinical data: wounds healed in 22 days vs 57 days placebo. 42% faster healing at day 4, 61% faster at day 7.",
      },
    ],
    advanced: [
      {
        name: "CJC-1295/Ipamorelin",
        description: "Growth hormone is essential for tissue repair and recovery. This combination optimizes your natural GH release, particularly during sleep when most healing occurs.",
        benefits: ["Enhanced recovery", "Muscle repair", "Sleep optimization"],
        researchNote: "~50% increase in deep sleep duration—the critical window for tissue repair and growth hormone release.",
      },
      {
        name: "GHK-Cu",
        description: "A copper peptide that supports tissue remodeling and regeneration. Particularly effective for skin healing, but also supports connective tissue repair throughout the body.",
        benefits: ["Tissue remodeling", "Collagen synthesis", "Skin & wound healing"],
        researchNote: "Studies show increased collagen, elastin, and glycosaminoglycan synthesis. Promotes organized tissue regeneration.",
      },
    ],
  },
  aging: {
    primary: [
      {
        name: "CJC-1295/Ipamorelin",
        description: "Growth hormone naturally declines with age—about 14% per decade after 30. This combination helps optimize your levels naturally, supporting energy, body composition, and overall vitality.",
        benefits: ["GH optimization", "Better sleep", "Improved vitality", "Body composition"],
        researchNote: "Studies show IGF-1 elevation sustained for up to 28 days, ~50% more deep sleep, and 20%+ increase in REM sleep.",
      },
    ],
    support: [
      {
        name: "Epithalon",
        description: "Studied for its potential effects on telomerase activation and pineal gland function. Typically used in short cycles (10-20 days) a few times per year as part of a longevity protocol.",
        benefits: ["Telomere support", "Sleep regulation", "Cellular health"],
        researchNote: "Research showed cells exceeded the normal division limit, extending from the 34th passage to beyond the 44th passage.",
      },
      {
        name: "Semax",
        description: "A nootropic peptide that supports cognitive function and brain health by enhancing BDNF (brain-derived neurotrophic factor). Delivered as a nasal spray for easy daily use.",
        benefits: ["Mental clarity", "Neuroprotection", "Focus & mood"],
        researchNote: "Clinical trial: 71% accuracy on memory tests vs 41% in controls. Increases BDNF for enhanced neural plasticity.",
      },
    ],
    advanced: [
      {
        name: "Selank",
        description: "Semax's sister peptide, focused on mood and anxiety regulation. It modulates GABA and serotonin systems, supporting emotional wellbeing—a key component of healthy aging.",
        benefits: ["Mood support", "Anxiety reduction", "Stress resilience"],
        researchNote: "Studies show anxiolytic effects comparable to benzodiazepines without sedation or dependence risk.",
      },
      {
        name: "GHK-Cu",
        description: "A copper peptide that declines significantly with age. It supports skin health, wound healing, and has shown potential for broader regenerative effects throughout the body.",
        benefits: ["Skin rejuvenation", "Wound healing", "Tissue regeneration"],
        researchNote: "Blood levels drop from 200 ng/mL at age 20 to 80 ng/mL by age 60. Supplementation restores regenerative signaling.",
      },
      {
        name: "MOTS-c",
        description: "A mitochondrial-derived peptide that supports metabolic health and cellular energy production. It helps cells respond to metabolic stress and may support healthy aging at the cellular level.",
        benefits: ["Mitochondrial health", "Metabolic regulation", "Cellular energy"],
        researchNote: "Studies show improved glucose regulation and exercise capacity. Naturally declines with age.",
      },
    ],
  },
};

const lifestyleDatabase: Record<HealthDimension, LifestyleStep[]> = {
  energy: [
    {
      title: "Morning sunlight",
      description: "10-15 min natural light within 30 min of waking",
      iconKey: "sun",
      timeOfDay: "morning",
    },
    {
      title: "Protein breakfast",
      description: "30g protein within 1 hour of waking",
      iconKey: "heart",
      timeOfDay: "morning",
    },
    {
      title: "Afternoon walk",
      description: "10-min walk after lunch to prevent energy dip",
      iconKey: "activity",
      timeOfDay: "midday",
    },
    {
      title: "Hydrate consistently",
      description: "Water every 2 hours to maintain alertness",
      iconKey: "droplet",
      timeOfDay: "midday",
    },
    {
      title: "Wind down by 9pm",
      description: "Dim lights and reduce screens for better sleep",
      iconKey: "moon",
      timeOfDay: "evening",
    },
    {
      title: "Sleep by 10:30pm",
      description: "Align with GH release window (10pm-2am)",
      iconKey: "moon",
      timeOfDay: "evening",
    },
  ],
  weight: [
    {
      title: "Fasting window",
      description: "16:8 eating window for insulin sensitivity",
      iconKey: "clock",
      timeOfDay: "morning",
    },
    {
      title: "Cold exposure",
      description: "2-3 min cold shower to activate brown fat",
      iconKey: "droplet",
      timeOfDay: "morning",
    },
    {
      title: "Protein with meals",
      description: "30-40g protein per meal to preserve muscle",
      iconKey: "heart",
      timeOfDay: "midday",
    },
    {
      title: "Zone 2 cardio",
      description: "30-45 min low-intensity cardio 3x/week",
      iconKey: "activity",
      timeOfDay: "midday",
    },
    {
      title: "Last meal by 7pm",
      description: "Close eating window for overnight fat burning",
      iconKey: "clock",
      timeOfDay: "evening",
    },
    {
      title: "Track progress",
      description: "Weekly measurements over daily weigh-ins",
      iconKey: "chart",
      timeOfDay: "evening",
    },
  ],
  recovery: [
    {
      title: "Morning mobility",
      description: "5-10 min gentle stretching on waking",
      iconKey: "activity",
      timeOfDay: "morning",
    },
    {
      title: "Hydration first",
      description: "16oz water with electrolytes before coffee",
      iconKey: "droplet",
      timeOfDay: "morning",
    },
    {
      title: "Post-workout fuel",
      description: "Protein + carbs within 30 min of training",
      iconKey: "heart",
      timeOfDay: "midday",
    },
    {
      title: "Active recovery",
      description: "Light movement or yoga on rest days",
      iconKey: "activity",
      timeOfDay: "midday",
    },
    {
      title: "Prioritize sleep",
      description: "7-9 hours—when tissue repair occurs",
      iconKey: "moon",
      timeOfDay: "evening",
    },
    {
      title: "Magnesium support",
      description: "Glycinate before bed for muscle relaxation",
      iconKey: "pill",
      timeOfDay: "evening",
    },
  ],
  aging: [
    {
      title: "NAD+ support",
      description: "NMN/NR for 139% NAD+ increase",
      iconKey: "pill",
      timeOfDay: "morning",
    },
    {
      title: "Fasting period",
      description: "Activates autophagy for cellular renewal",
      iconKey: "clock",
      timeOfDay: "morning",
    },
    {
      title: "Antioxidant foods",
      description: "Colorful vegetables, berries, omega-3s",
      iconKey: "leaf",
      timeOfDay: "midday",
    },
    {
      title: "Movement breaks",
      description: "Brief walks to maintain metabolic health",
      iconKey: "activity",
      timeOfDay: "midday",
    },
    {
      title: "Stress release",
      description: "Meditation or breathwork to lower cortisol",
      iconKey: "brain",
      timeOfDay: "evening",
    },
    {
      title: "Quality sleep",
      description: "Dark, cool room for optimal recovery",
      iconKey: "moon",
      timeOfDay: "evening",
    },
  ],
};

const timelineDatabase: Record<HealthDimension, TimelinePhase[]> = {
  energy: [
    { name: "Foundation", duration: "Weeks 1-4", focus: "Establish sleep hygiene, start peptide protocol, implement morning routine. Expect sleep improvements first." },
    { name: "Optimization", duration: "Weeks 5-12", focus: "Energy improvements become noticeable. Fine-tune timing and dosing based on your response." },
    { name: "Maintenance", duration: "Ongoing", focus: "Maintain protocol with periodic check-ins. Adjust seasonally as needed." },
  ],
  weight: [
    { name: "Metabolic Reset", duration: "Weeks 1-4", focus: "Begin peptide protocol, implement fasting window, establish baseline measurements." },
    { name: "Acceleration", duration: "Weeks 5-12", focus: "Body composition changes become visible. Clinical studies show 15-20% visceral fat reduction by week 12." },
    { name: "Maintenance", duration: "Ongoing", focus: "Transition to maintenance approach. Continue peptides for sustained results." },
  ],
  recovery: [
    { name: "Healing Phase", duration: "Weeks 1-4", focus: "Start tissue repair peptides. Many notice reduced pain within 1-2 weeks." },
    { name: "Rebuilding", duration: "Weeks 5-8", focus: "Gradually increase activity as healing progresses. Continue peptide support." },
    { name: "Performance", duration: "Ongoing", focus: "Return to full activity. Use peptides as needed for ongoing recovery support." },
  ],
  aging: [
    { name: "Assessment", duration: "Month 1", focus: "Baseline labs, start peptides, implement lifestyle foundations. Sleep often improves first." },
    { name: "Optimization", duration: "Months 2-3", focus: "Add cognitive support if needed. Monitor energy and body composition changes." },
    { name: "Longevity Protocol", duration: "Ongoing", focus: "Establish sustainable cycling schedule. Quarterly labs to track biomarkers." },
  ],
};

// Calculate scores from answers
function calculateScores(answers: Map<string, number | number[]>): HealthScores {
  const scores: HealthScores = { energy: 0, weight: 0, recovery: 0, aging: 0 };

  for (const question of questions) {
    const answer = answers.get(question.id);
    if (answer === undefined || question.type === "screening") continue;

    if (question.type === "slider") {
      const partialScores = question.scoring(answer as number);
      for (const [key, value] of Object.entries(partialScores)) {
        scores[key as HealthDimension] += value;
      }
    } else if (question.type === "single") {
      const selectedOption = question.options[answer as number];
      if (selectedOption) {
        for (const [key, value] of Object.entries(selectedOption.scores)) {
          scores[key as HealthDimension] += value;
        }
      }
    } else if (question.type === "multi") {
      const selectedIndices = answer as number[];
      for (const idx of selectedIndices) {
        const option = question.options[idx];
        if (option) {
          for (const [key, value] of Object.entries(option.scores)) {
            scores[key as HealthDimension] += value;
          }
        }
      }
    }
  }

  return scores;
}

// Normalize scores to percentages
function normalizeScores(scores: HealthScores): HealthScores {
  const maxPossible = { energy: 15, weight: 12, recovery: 12, aging: 15 };
  return {
    energy: Math.min(100, Math.round((scores.energy / maxPossible.energy) * 100)),
    weight: Math.min(100, Math.round((scores.weight / maxPossible.weight) * 100)),
    recovery: Math.min(100, Math.round((scores.recovery / maxPossible.recovery) * 100)),
    aging: Math.min(100, Math.round((scores.aging / maxPossible.aging) * 100)),
  };
}

// Get primary focus area(s) - more conservative threshold
function getPrimaryFocus(scores: HealthScores): HealthDimension[] {
  const entries = Object.entries(scores) as [HealthDimension, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  const maxScore = sorted[0][1];

  // Include dimensions within 75% of max (more conservative than 60%)
  const primary: HealthDimension[] = [];
  for (const [dimension, score] of sorted) {
    if (score >= maxScore * 0.75 && score > 0) {
      primary.push(dimension);
    }
  }

  if (primary.length === 0) {
    primary.push(sorted[0][0]);
  }

  return primary;
}

// Generate protocol based on scores - now includes advanced peptides for high-need areas
// Limited to 4 peptides max to keep recommendations focused
function generateProtocol(scores: HealthScores): Protocol {
  const focus = getPrimaryFocus(scores);
  const primaryDimension = focus[0];
  const normalizedScores = normalizeScores(scores);

  const MAX_PEPTIDES = 4;

  const primaryPeptides = [...peptideDatabase[primaryDimension].primary];
  let supportPeptides: Peptide[] = [];
  const lifestyleSteps = [...lifestyleDatabase[primaryDimension]];
  const timeline = [...timelineDatabase[primaryDimension]];

  const addedPeptideNames = new Set<string>();
  primaryPeptides.forEach(p => addedPeptideNames.add(p.name));

  // Helper to add peptide if we haven't hit the limit
  const addPeptide = (peptide: Peptide): boolean => {
    if (primaryPeptides.length + supportPeptides.length >= MAX_PEPTIDES) {
      return false;
    }
    if (!addedPeptideNames.has(peptide.name)) {
      supportPeptides.push(peptide);
      addedPeptideNames.add(peptide.name);
      return true;
    }
    return false;
  };

  // First priority: support peptides from primary dimension
  for (const peptide of peptideDatabase[primaryDimension].support) {
    addPeptide(peptide);
  }

  // Second priority: advanced peptides for primary dimension if score is high (60%+)
  if (normalizedScores[primaryDimension] >= 60) {
    for (const peptide of peptideDatabase[primaryDimension].advanced) {
      addPeptide(peptide);
    }
  }

  // Third priority: primary peptides from secondary dimensions
  for (let i = 1; i < focus.length; i++) {
    const dimension = focus[i];
    for (const peptide of peptideDatabase[dimension].primary) {
      addPeptide(peptide);
    }
  }

  // Fourth priority: support peptides from secondary dimensions
  for (let i = 1; i < focus.length; i++) {
    const dimension = focus[i];
    for (const peptide of peptideDatabase[dimension].support) {
      addPeptide(peptide);
    }
  }

  // Fifth priority: advanced peptides from secondary dimensions if high score (50%+)
  for (let i = 1; i < focus.length; i++) {
    const dimension = focus[i];
    if (normalizedScores[dimension] >= 50) {
      for (const peptide of peptideDatabase[dimension].advanced) {
        addPeptide(peptide);
      }
    }

    // Add all lifestyle steps from secondary dimensions (no limit)
    for (const step of lifestyleDatabase[dimension]) {
      if (!lifestyleSteps.some(s => s.title === step.title)) {
        lifestyleSteps.push(step);
      }
    }
  }

  return {
    primaryPeptides,
    supportPeptides,
    lifestyleSteps,
    timeline,
  };
}

// Components
function StartScreen({ onStart, selectedCategories, onToggleCategory }: {
  onStart: () => void;
  selectedCategories: HealthDimension[];
  onToggleCategory: (category: HealthDimension) => void;
}) {
  const categories: { id: HealthDimension; name: string; iconKey: keyof typeof Icons; description: string }[] = [
    { id: "energy", name: "Energy", iconKey: "energy", description: "Boost vitality & reduce fatigue" },
    { id: "weight", name: "Weight", iconKey: "weight", description: "Improve body composition" },
    { id: "recovery", name: "Recovery", iconKey: "recovery", description: "Faster healing & performance" },
    { id: "aging", name: "Longevity", iconKey: "aging", description: "Optimize healthspan" },
  ];

  return (
    <div className="fade-in-up flex flex-col items-center text-center">
      {/* Floating molecule icon */}
      <div className="mb-8 animate-float" style={{ color: '#2DD4BF' }}>
        {Icons.molecule("w-16 h-16")}
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight" style={{ color: '#FFFFFF' }}>
        Your Personalized Health Journey
      </h1>
      <p className="mb-2 text-lg" style={{ color: '#D4D4D8' }}>
        Complete this brief assessment to receive personalized wellness recommendations
      </p>
      <p className="mb-10 text-sm" style={{ color: '#A1A1AA' }}>
        2 minutes · Clinician reviewed
      </p>

      <div className="mb-10 w-full">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider" style={{ color: '#A1A1AA' }}>
          Select your primary health goals
        </p>
        <div className="grid grid-cols-2 gap-4 stagger-children">
          {categories.map((cat) => {
            const isSelected = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                className={`category-chip text-left relative ${
                  isSelected ? "selected" : ""
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2DD4BF' }}>
                    {Icons.check("w-3 h-3")}
                  </div>
                )}
                <div className="mb-3" style={{ color: isSelected ? '#18181B' : '#2DD4BF' }}>
                  {Icons[cat.iconKey]("w-7 h-7")}
                </div>
                <div className="font-semibold" style={{ color: isSelected ? '#18181B' : '#FFFFFF' }}>{cat.name}</div>
                <div className="text-xs mt-1" style={{ color: isSelected ? '#52525B' : '#A1A1AA' }}>{cat.description}</div>
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={selectedCategories.length === 0}
        className="btn-primary w-full text-lg"
      >
        {selectedCategories.length === 0 ? "Select at least one goal" : "Begin Assessment"}
      </button>
    </div>
  );
}

function QuestionScreen({
  question,
  currentIndex,
  total,
  answer,
  onAnswer,
  onNext,
  onBack,
}: {
  question: Question;
  currentIndex: number;
  total: number;
  answer: number | number[] | undefined;
  onAnswer: (value: number | number[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const canProceed = answer !== undefined && (
    question.type !== "multi" || (answer as number[]).length > 0
  );

  return (
    <div className="fade-in-up">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-3 flex justify-between text-sm">
          <span style={{ color: '#A1A1AA' }}>Question {currentIndex + 1} of {total}</span>
          <span className="font-medium" style={{ color: '#2DD4BF' }}>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="mb-3 text-2xl font-semibold" style={{ color: '#FFFFFF' }}>
        {question.question}
      </h2>

      {question.type === "screening" && (
        <p className="text-sm mb-8" style={{ color: '#A1A1AA' }}>{(question as ScreeningQuestion).note}</p>
      )}

      {question.type === "single" && (
        <div className="flex flex-col gap-3 mb-8 stagger-children">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={`answer-option text-left ${
                answer === index ? "selected" : ""
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {question.type === "screening" && (
        <div className="flex flex-col gap-3 mb-8 stagger-children">
          {(question as ScreeningQuestion).options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={`answer-option text-left ${
                answer === index ? "selected" : ""
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {question.type === "multi" && (
        <div className="flex flex-col gap-3 mb-8 stagger-children">
          {question.options.map((option, index) => {
            const selected = (answer as number[] || []).includes(index);
            return (
              <button
                key={index}
                onClick={() => {
                  const current = (answer as number[]) || [];
                  if (selected) {
                    onAnswer(current.filter((i) => i !== index));
                  } else {
                    onAnswer([...current, index]);
                  }
                }}
                className={`answer-option text-left flex items-center gap-4 ${
                  selected ? "selected" : ""
                }`}
              >
                <div className={`checkbox shrink-0 ${selected ? "checked" : ""}`}>
                  {selected && Icons.check("w-3 h-3")}
                </div>
                {option.text}
              </button>
            );
          })}
          <p className="text-xs mt-2" style={{ color: '#71717A' }}>Select all that apply, or continue if none</p>
        </div>
      )}

      {question.type === "slider" && (
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-6" style={{ color: '#A1A1AA' }}>
            <span>{question.minLabel}</span>
            <span>{question.maxLabel}</span>
          </div>
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                className={`slider-btn font-semibold text-lg ${
                  answer === value ? "selected" : ""
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        {currentIndex > 0 && (
          <button
            onClick={onBack}
            className="btn-secondary flex-1"
          >
            Back
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!canProceed && question.type !== "multi"}
          className="btn-primary flex-1"
        >
          {currentIndex === total - 1 ? "View Results" : "Continue"}
        </button>
      </div>
    </div>
  );
}

function InsightScreen({
  insight,
  onContinue,
}: {
  insight: Insight;
  onContinue: () => void;
}) {
  return (
    <div className="fade-in-up flex flex-col items-center text-center py-8">
      <div className="insight-card p-8 w-full">
        <div className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(45, 212, 191, 0.15)', border: '1px solid rgba(45, 212, 191, 0.4)', color: '#2DD4BF' }}>
          {Icons[insight.iconKey]("w-10 h-10")}
        </div>
        <div className="evidence-badge mb-6 mx-auto">
          {Icons.beaker("w-3 h-3")}
          <span>Research Finding</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>{insight.title}</h3>
        <p className="mb-8 leading-relaxed" style={{ color: '#D4D4D8' }}>{insight.text}</p>
        <button
          onClick={onContinue}
          className="btn-primary px-12"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function AnalyzingScreen() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(d => d.length >= 3 ? "" : d + ".");
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-in-up flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-10 animate-float" style={{ color: '#2DD4BF' }}>
        {Icons.molecule("w-20 h-20")}
      </div>
      <h2 className="text-2xl font-semibold mb-3" style={{ color: '#FFFFFF' }}>
        Analyzing your responses{dots}
      </h2>
      <p style={{ color: '#A1A1AA' }}>
        Generating your personalized protocol
      </p>
      <div className="mt-10 flex gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-bounce"
            style={{ backgroundColor: '#2DD4BF', animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}


function ResultScreen({
  scores,
  protocol,
  onRestart,
  requiresMedicalReview,
  onScheduleConsultation,
}: {
  scores: HealthScores;
  protocol: Protocol;
  onRestart: () => void;
  requiresMedicalReview: boolean;
  onScheduleConsultation: () => void;
}) {
  const normalizedScores = normalizeScores(scores);
  const primaryFocus = getPrimaryFocus(scores);
  const archetype = archetypes[primaryFocus[0]];

  const dimensionLabels: Record<HealthDimension, string> = {
    energy: "Energy & Vitality",
    weight: "Weight & Metabolism",
    recovery: "Recovery & Performance",
    aging: "Aging & Longevity",
  };

  const totalPeptides = protocol.primaryPeptides.length + protocol.supportPeptides.length;

  return (
    <div className="fade-in-up">
      {/* Protocol Summary Header */}
      <div className="text-center mb-10">
        <div className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center animate-pulse-glow" style={{ backgroundColor: 'rgba(45, 212, 191, 0.15)', border: '2px solid #2DD4BF', color: '#2DD4BF' }}>
          {Icons[archetype.iconKey]("w-10 h-10")}
        </div>
        <p className="text-sm font-medium mb-3 uppercase tracking-wider" style={{ color: '#2DD4BF' }}>Assessment Complete</p>
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#FFFFFF' }}>{archetype.name}</h2>
        <p style={{ color: '#D4D4D8' }}>{archetype.tagline}</p>
      </div>

      {/* Special Medical Review Notice - shown near top if needed */}
      {requiresMedicalReview && (
        <div className="mb-6 p-5 rounded-xl" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
          <div className="flex gap-4">
            <div className="shrink-0" style={{ color: '#A78BFA' }}>{Icons.user("w-6 h-6")}</div>
            <div>
              <div className="font-medium mb-2" style={{ color: '#A78BFA' }}>Personalized Care Review</div>
              <div className="text-sm leading-relaxed" style={{ color: '#C4B5FD' }}>
                Based on your health history, your care team will conduct an additional review to ensure
                your protocol is tailored to your specific needs.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Health Profile Bars */}
      <div className="result-card p-6 mb-6">
        <h3 className="font-semibold mb-6" style={{ color: '#FFFFFF' }}>Health Profile Analysis</h3>
        <div className="space-y-5">
          {(Object.entries(normalizedScores) as [HealthDimension, number][]).map(([dimension, score]) => {
            const isPrimary = primaryFocus.includes(dimension);
            return (
              <div key={dimension} style={{ opacity: isPrimary ? 1 : 0.5 }}>
                <div className="flex justify-between text-sm mb-2">
                  <span className={isPrimary ? "font-medium" : ""} style={{ color: isPrimary ? '#FFFFFF' : '#A1A1AA' }}>
                    {dimensionLabels[dimension]}
                    {isPrimary && <span className="ml-2 text-xs font-medium uppercase tracking-wide" style={{ color: '#2DD4BF' }}>Primary Focus</span>}
                  </span>
                  <span className="font-medium" style={{ color: '#FFFFFF' }}>{score}%</span>
                </div>
                <div className="health-bar">
                  <div
                    className={`health-bar-fill ${dimension}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Peptide Protocol */}
      <div className="result-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span style={{ color: '#2DD4BF' }}>{Icons.syringe("w-6 h-6")}</span>
          <h3 className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>Recommended Peptide Protocol</h3>
        </div>
        {totalPeptides > 3 && (
          <p className="text-xs mb-6" style={{ color: '#A1A1AA' }}>
            Note: Your physician may recommend starting with 1-2 peptides and titrating up
          </p>
        )}

        <div className="mb-6">
          <div className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: '#2DD4BF' }}>Primary</div>
          {protocol.primaryPeptides.map((peptide, i) => (
            <div key={i} className="peptide-card mb-4">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>{peptide.name}</span>
                <span className="evidence-badge">{Icons.beaker("w-3 h-3")}<span>Evidence-based</span></span>
              </div>
              <div className="text-sm mb-3" style={{ color: '#D4D4D8' }}>{peptide.description}</div>
              {peptide.researchNote && (
                <div className="research-note">
                  <span className="font-medium not-italic" style={{ color: '#2DD4BF' }}>Research:</span> {peptide.researchNote}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {peptide.benefits.map((benefit, j) => (
                  <span key={j} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#D4D4D8', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {protocol.supportPeptides.length > 0 && (
          <div>
            <div className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: '#A78BFA' }}>Support</div>
            {protocol.supportPeptides.map((peptide, i) => (
              <div key={i} className="peptide-card support mb-4">
                <div className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>{peptide.name}</div>
                <div className="text-sm mb-3" style={{ color: '#D4D4D8' }}>{peptide.description}</div>
                {peptide.researchNote && (
                  <div className="research-note">
                    <span className="font-medium not-italic" style={{ color: '#A78BFA' }}>Research:</span> {peptide.researchNote}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {peptide.benefits.map((benefit, j) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#D4D4D8', border: '1px solid rgba(255,255,255,0.12)' }}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Daily Rhythm Timeline */}
      <div className="result-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span style={{ color: '#2DD4BF' }}>{Icons.clock("w-6 h-6")}</span>
          <h3 className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>Daily Protocol Schedule</h3>
        </div>
        <p className="text-xs mb-6" style={{ color: '#A1A1AA' }}>Optimal timing for lifestyle interventions</p>

        {/* Timeline bar */}
        <div className="h-2 rounded-full mb-4 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
          <div className="h-full w-full flex">
            <div className="flex-1" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.6) 0%, rgba(245,158,11,0.3) 100%)' }} />
            <div className="flex-1" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.6) 100%)' }} />
            <div className="flex-1" style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.3) 100%)' }} />
          </div>
        </div>

        {/* Time markers */}
        <div className="flex justify-between text-xs mb-6">
          <span style={{ color: '#F59E0B' }}>Morning</span>
          <span style={{ color: '#3B82F6' }}>Midday</span>
          <span style={{ color: '#8B5CF6' }}>Evening</span>
        </div>

        {/* Rhythm grid - 2 items per column, equal heights */}
        <div className="grid grid-cols-3 gap-3">
          {/* Morning items */}
          <div className="flex flex-col gap-3">
            {protocol.lifestyleSteps
              .filter(s => s.timeOfDay === "morning")
              .slice(0, 2)
              .map((step, i) => (
                <div key={i} className="rhythm-card morning flex-1 p-3 min-h-[120px]">
                  <div className="mb-2" style={{ color: '#F59E0B' }}>{Icons[step.iconKey]("w-5 h-5")}</div>
                  <div className="font-medium text-sm" style={{ color: '#FFFFFF' }}>{step.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#A1A1AA' }}>{step.description}</div>
                </div>
              ))}
          </div>

          {/* Midday items */}
          <div className="flex flex-col gap-3">
            {protocol.lifestyleSteps
              .filter(s => s.timeOfDay === "midday")
              .slice(0, 2)
              .map((step, i) => (
                <div key={i} className="rhythm-card midday flex-1 p-3 min-h-[120px]">
                  <div className="mb-2" style={{ color: '#3B82F6' }}>{Icons[step.iconKey]("w-5 h-5")}</div>
                  <div className="font-medium text-sm" style={{ color: '#FFFFFF' }}>{step.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#A1A1AA' }}>{step.description}</div>
                </div>
              ))}
          </div>

          {/* Evening items */}
          <div className="flex flex-col gap-3">
            {protocol.lifestyleSteps
              .filter(s => s.timeOfDay === "evening")
              .slice(0, 2)
              .map((step, i) => (
                <div key={i} className="rhythm-card evening flex-1 p-3 min-h-[120px]">
                  <div className="mb-2" style={{ color: '#8B5CF6' }}>{Icons[step.iconKey]("w-5 h-5")}</div>
                  <div className="font-medium text-sm" style={{ color: '#FFFFFF' }}>{step.title}</div>
                  <div className="text-xs mt-1" style={{ color: '#A1A1AA' }}>{step.description}</div>
                </div>
              ))}
          </div>
        </div>

        {/* Peptide timing - spans full width */}
        {protocol.primaryPeptides[0] && (
          <div className="rhythm-card peptide mt-4 p-4">
            <div className="flex items-center gap-4">
              <div style={{ color: '#2DD4BF' }}>{Icons.syringe("w-6 h-6")}</div>
              <div className="flex-1">
                <div className="font-medium text-sm" style={{ color: '#FFFFFF' }}>Evening: {protocol.primaryPeptides[0].name}</div>
                <div className="text-xs mt-1" style={{ color: '#A1A1AA' }}>Administer before bed to align with natural GH release during sleep</div>
              </div>
              <div className="text-xs font-medium uppercase tracking-wider" style={{ color: '#2DD4BF' }}>Peptide</div>
            </div>
          </div>
        )}
      </div>

      {/* Synergy Solar System */}
      <div className="result-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span style={{ color: '#2DD4BF' }}>{Icons.molecule("w-6 h-6")}</span>
          <h3 className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>Protocol Integration</h3>
        </div>
        <p className="text-xs mb-6" style={{ color: '#A1A1AA' }}>How your interventions work synergistically</p>

        <div className="relative h-72 flex items-center justify-center">
          {/* Orbital rings */}
          <div className="orbit-ring absolute w-36 h-36 rounded-full" />
          <div className="orbit-ring absolute w-56 h-56 rounded-full" />

          {/* Center - You */}
          <div className="orbit-center absolute w-16 h-16 rounded-full flex items-center justify-center z-10">
            <div className="text-center">
              <div style={{ color: '#2DD4BF' }}>{Icons[archetype.iconKey]("w-6 h-6")}</div>
              <div className="text-[10px] font-medium" style={{ color: '#FFFFFF' }}>You</div>
            </div>
          </div>

          {/* Orbiting: Peptide + habits */}
          {[
            { iconKey: "syringe" as keyof typeof Icons, title: protocol.primaryPeptides[0]?.name || "Peptide", isPeptide: true },
            ...protocol.lifestyleSteps.slice(0, 5).map(s => ({ iconKey: s.iconKey, title: s.title, isPeptide: false }))
          ].map((item, i) => {
            const totalItems = 6;
            const angle = (i / totalItems) * 2 * Math.PI - Math.PI / 2;
            const radius = i % 2 === 0 ? 72 : 108;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const colorValues = [
              '#2DD4BF', // teal - Peptide
              '#F59E0B', // amber
              '#3B82F6', // blue
              '#8B5CF6', // purple
              '#F43F5E', // rose
              '#6366F1', // indigo
            ];

            return (
              <div
                key={i}
                className={`orbit-item absolute rounded-full flex items-center justify-center cursor-default group ${item.isPeptide ? 'w-14 h-14' : 'w-12 h-12'}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  borderColor: colorValues[i],
                  color: colorValues[i],
                }}
              >
                <div className="text-center">
                  {Icons[item.iconKey](item.isPeptide ? "w-5 h-5" : "w-4 h-4")}
                </div>
                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" style={{ backgroundColor: '#27272A', border: '1px solid #3F3F46', color: '#FFFFFF' }}>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#FFFFFF' }}>
            <span style={{ color: '#2DD4BF' }}>{Icons[archetype.iconKey]("w-4 h-4")}</span>
            <span>You</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#2DD4BF' }}>
            {Icons.syringe("w-4 h-4")}
            <span>{protocol.primaryPeptides[0]?.name || 'Peptide'}</span>
          </div>
          {protocol.lifestyleSteps.slice(0, 5).map((step, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs" style={{ color: '#A1A1AA' }}>
              {Icons[step.iconKey]("w-4 h-4")}
              <span>{step.title}</span>
            </div>
          ))}
        </div>

        {/* Synergy note */}
        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.25)' }}>
          <div className="text-sm text-center" style={{ color: '#D4D4D8' }}>
            <span className="font-medium" style={{ color: '#2DD4BF' }}>Integrated Protocol:</span>{" "}
            Peptide therapy combined with lifestyle interventions produces synergistic effects.
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="result-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span style={{ color: '#2DD4BF' }}>{Icons.chart("w-6 h-6")}</span>
          <h3 className="font-semibold text-lg" style={{ color: '#FFFFFF' }}>Expected Timeline</h3>
        </div>
        <p className="text-xs mb-6" style={{ color: '#A1A1AA' }}>Typical progression with consistent protocol adherence</p>
        <div className="space-y-4">
          {protocol.timeline.map((phase, i) => (
            <div key={i} className="timeline-phase p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium" style={{ color: '#FFFFFF' }}>{phase.name}</span>
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#2DD4BF' }}>{phase.duration}</span>
              </div>
              <div className="text-sm" style={{ color: '#D4D4D8' }}>{phase.focus}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="result-card p-6 mb-6" style={{ borderColor: 'rgba(45,212,191,0.3)' }}>
        <h3 className="font-semibold mb-3 text-lg" style={{ color: '#FFFFFF' }}>Next Steps</h3>
        <p className="text-sm mb-5" style={{ color: '#D4D4D8' }}>
          Your membership includes:
        </p>
        <div className="space-y-3 text-sm mb-6">
          <div className="flex gap-3 items-start">
            <span className="mt-0.5" style={{ color: '#2DD4BF' }}>{Icons.check("w-5 h-5")}</span>
            <span style={{ color: '#D4D4D8' }}>Physician consultation to review and finalize your protocol</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-0.5" style={{ color: '#2DD4BF' }}>{Icons.check("w-5 h-5")}</span>
            <span style={{ color: '#D4D4D8' }}>Pharmaceutical-grade peptides delivered to your door</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-0.5" style={{ color: '#2DD4BF' }}>{Icons.check("w-5 h-5")}</span>
            <span style={{ color: '#D4D4D8' }}>Ongoing clinical support and protocol optimization</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer mb-8">
        <div className="flex gap-4">
          <div className="shrink-0" style={{ color: '#F59E0B' }}>{Icons.info("w-6 h-6")}</div>
          <div>
            <div className="font-medium mb-2" style={{ color: '#F59E0B' }}>Medical Disclaimer</div>
            <div className="text-sm leading-relaxed" style={{ color: '#FCD34D' }}>
              This assessment provides preliminary recommendations based on your responses and is not medical advice.
              All protocols require review by a licensed physician who will evaluate your complete health
              history, current medications, and relevant lab work before prescribing any peptide therapy.
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4">
        <button
          onClick={onScheduleConsultation}
          className="btn-primary w-full text-lg"
        >
          Schedule Consultation
        </button>
        <div className="flex gap-4">
          <button
            onClick={onRestart}
            className="btn-secondary flex-1"
          >
            Retake Assessment
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `My Health Assessment`,
                  text: `${archetype.name}: ${archetype.tagline}`,
                });
              }
            }}
            className="btn-secondary flex-1"
          >
            Share Results
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper to find matching insight for current answers
function findMatchingInsight(questionId: string, answers: Map<string, number | number[]>): Insight | null {
  const trigger = insightTriggers.find(t => t.afterQuestion === questionId);
  if (!trigger) return null;

  for (const insight of trigger.insights) {
    if (insight.condition(answers)) {
      return insight;
    }
  }
  return null;
}

// Consultation Modal Component
function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"info" | "billing">("info");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [billingData, setBillingData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    zip: "",
  });

  const handleSubmit = () => {
    // In a real app, this would submit to a payment processor
    alert(`Membership activated!\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nYour care team will reach out within 24 hours to schedule your consultation.`);
    onClose();
  };

  const canProceedToBilling = formData.firstName && formData.lastName && formData.email;
  const canSubmit = billingData.cardNumber && billingData.expiry && billingData.cvc && billingData.zip;

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  // Format expiry as MM/YY
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden fade-in-up"
        style={{
          backgroundColor: '#18181B',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full transition-colors z-10"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#A1A1AA'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.color = '#A1A1AA';
          }}
        >
          {Icons.close("w-5 h-5")}
        </button>

        {/* Header */}
        <div className="p-6 pb-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(45, 212, 191, 0.15)', color: '#2DD4BF' }}>
              {step === "info" ? Icons.user("w-5 h-5") : Icons.creditCard("w-5 h-5")}
            </div>
            <h2 className="text-xl font-semibold" style={{ color: '#FFFFFF' }}>
              {step === "info" ? "Start Your Membership" : "Payment Information"}
            </h2>
          </div>
          <p className="text-sm" style={{ color: '#A1A1AA' }}>
            {step === "info"
              ? "A board-certified clinician will review your assessment and personalize your protocol."
              : "Secure payment processed by Stripe. Your card will be charged after your consultation."
            }
          </p>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div
              className="flex-1 h-1 rounded-full"
              style={{ backgroundColor: '#2DD4BF' }}
            />
            <div
              className="flex-1 h-1 rounded-full transition-colors"
              style={{ backgroundColor: step === "billing" ? '#2DD4BF' : 'rgba(255, 255, 255, 0.1)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "info" ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                  Phone <span style={{ color: '#71717A' }}>(optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* What's included */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(45, 212, 191, 0.08)', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                <div className="text-sm font-medium mb-3" style={{ color: '#2DD4BF' }}>What&apos;s included:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#D4D4D8' }}>
                    {Icons.check("w-4 h-4")}
                    <span>15-minute video consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#D4D4D8' }}>
                    {Icons.check("w-4 h-4")}
                    <span>Protocol review & customization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: '#D4D4D8' }}>
                    {Icons.check("w-4 h-4")}
                    <span>Lab work recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Card number */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={billingData.cardNumber}
                    onChange={(e) => setBillingData({ ...billingData, cardNumber: formatCardNumber(e.target.value) })}
                    maxLength={19}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#71717A' }}>
                    {Icons.creditCard("w-5 h-5")}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                    Expiry
                  </label>
                  <input
                    type="text"
                    value={billingData.expiry}
                    onChange={(e) => setBillingData({ ...billingData, expiry: formatExpiry(e.target.value) })}
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                    CVC
                  </label>
                  <input
                    type="text"
                    value={billingData.cvc}
                    onChange={(e) => setBillingData({ ...billingData, cvc: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                    maxLength={4}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="123"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-2" style={{ color: '#D4D4D8' }}>
                    ZIP
                  </label>
                  <input
                    type="text"
                    value={billingData.zip}
                    onChange={(e) => setBillingData({ ...billingData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    placeholder="12345"
                  />
                </div>
              </div>

              {/* Order summary */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="text-sm font-medium mb-3" style={{ color: '#FFFFFF' }}>Order Summary</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#A1A1AA' }}>Membership (monthly)</span>
                    <span style={{ color: '#FFFFFF' }}>$249/mo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#A1A1AA' }}>Initial consultation</span>
                    <span style={{ color: '#2DD4BF' }}>Included</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: '#A1A1AA' }}>Peptide protocol</span>
                    <span style={{ color: '#2DD4BF' }}>Included</span>
                  </div>
                  <div className="border-t my-3" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />
                  <div className="flex justify-between font-medium">
                    <span style={{ color: '#FFFFFF' }}>Due today</span>
                    <span style={{ color: '#FFFFFF' }}>$0.00</span>
                  </div>
                  <div className="text-xs mt-2" style={{ color: '#71717A' }}>
                    You won&apos;t be charged until after your consultation is complete.
                  </div>
                </div>
              </div>

              {/* Security note */}
              <div className="flex items-center gap-2 text-xs" style={{ color: '#71717A' }}>
                {Icons.shield("w-4 h-4")}
                <span>256-bit SSL encryption · PCI compliant</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {step === "info" ? (
            <button
              onClick={() => setStep("billing")}
              disabled={!canProceedToBilling}
              className="btn-primary w-full"
            >
              Continue to Payment
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => setStep("info")}
                className="btn-secondary flex-1"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="btn-primary flex-1"
              >
                Start Membership
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function Home() {
  const [screen, setScreen] = useState<"start" | "quiz" | "insight" | "analyzing" | "result">("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number | number[]>>(new Map());
  const [selectedCategories, setSelectedCategories] = useState<HealthDimension[]>([]);
  const [currentInsight, setCurrentInsight] = useState<Insight | null>(null);
  const [shownInsights, setShownInsights] = useState<Set<string>>(new Set());
  const [requiresMedicalReview, setRequiresMedicalReview] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleToggleCategory = (category: HealthDimension) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleStart = () => {
    setScreen("quiz");
    setShownInsights(new Set());
    // Skip first question if categories selected, start at question 1 (energy)
    if (selectedCategories.length > 0) {
      setCurrentQuestion(1);
      const newAnswers = new Map<string, number | number[]>();
      const goalQuestion = questions[0] as MultiQuestion;
      const selectedIndices: number[] = [];

      for (const category of selectedCategories) {
        const index = goalQuestion.options.findIndex((opt) =>
          opt.scores[category] !== undefined && opt.scores[category]! > 0
        );
        if (index >= 0 && !selectedIndices.includes(index)) {
          selectedIndices.push(index);
        }
      }

      if (selectedIndices.length > 0) {
        newAnswers.set("goal", selectedIndices);
      }
      setAnswers(newAnswers);
    } else {
      setCurrentQuestion(0);
      setAnswers(new Map());
    }
  };

  const handleAnswer = (value: number | number[]) => {
    const newAnswers = new Map(answers);
    newAnswers.set(questions[currentQuestion].id, value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    // Check screening question and set review flag if needed
    if (questions[currentQuestion].id === "screening") {
      const screeningAnswer = answers.get("screening") as number;
      const screeningQ = questions[currentQuestion] as ScreeningQuestion;
      if (screeningAnswer !== undefined && screeningQ.options[screeningAnswer]?.requiresReview) {
        setRequiresMedicalReview(true);
      }
    }

    // Check if there's an insight to show for the current question
    const questionId = questions[currentQuestion].id;
    const insight = findMatchingInsight(questionId, answers);

    if (insight && !shownInsights.has(questionId)) {
      // Show insight screen
      setCurrentInsight(insight);
      setShownInsights(prev => new Set(prev).add(questionId));
      setScreen("insight");
      return;
    }

    // Move to next question or results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("analyzing");
      setTimeout(() => setScreen("result"), 2500);
    }
  };

  const handleInsightContinue = () => {
    setCurrentInsight(null);
    setScreen("quiz");
    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreen("analyzing");
      setTimeout(() => setScreen("result"), 2500);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      // If we skipped question 0 due to pre-selection, don't go back to it
      if (currentQuestion === 1 && selectedCategories.length > 0) {
        return;
      }
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setScreen("start");
    setCurrentQuestion(0);
    setAnswers(new Map());
    setSelectedCategories([]);
    setShownInsights(new Set());
    setCurrentInsight(null);
    setRequiresMedicalReview(false);
  };

  const scores = calculateScores(answers);
  const protocol = generateProtocol(scores);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Sticky top-right consultation button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowConsultationModal(true)}
          className="px-4 py-2 rounded-full text-sm font-medium transition-all"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0A0B0E';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Schedule Consultation
        </button>
      </div>

      {/* Ambient background glows */}
      <div className="ambient-glow teal fixed -top-40 -left-40 w-[500px] h-[500px] animate-pulse-glow" />
      <div className="ambient-glow gold fixed -bottom-40 -right-40 w-[600px] h-[600px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="ambient-glow teal fixed top-1/2 right-0 w-[300px] h-[300px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          {screen === "start" && (
            <StartScreen
              onStart={handleStart}
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
            />
          )}

          {screen === "quiz" && (
            <QuestionScreen
              question={questions[currentQuestion]}
              currentIndex={currentQuestion}
              total={questions.length}
              answer={answers.get(questions[currentQuestion].id)}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {screen === "insight" && currentInsight && (
            <InsightScreen
              insight={currentInsight}
              onContinue={handleInsightContinue}
            />
          )}

          {screen === "analyzing" && <AnalyzingScreen />}

          {screen === "result" && (
            <ResultScreen
              scores={scores}
              protocol={protocol}
              onRestart={handleRestart}
              requiresMedicalReview={requiresMedicalReview}
              onScheduleConsultation={() => setShowConsultationModal(true)}
            />
          )}
        </div>
      </div>

      {/* Consultation Modal */}
      {showConsultationModal && (
        <ConsultationModal onClose={() => setShowConsultationModal(false)} />
      )}
    </div>
  );
}
