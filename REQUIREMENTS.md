# Health & Peptide Journey Quiz - Requirements

## Overview
A health assessment quiz that evaluates users across 4 health dimensions and recommends a personalized protocol including specific peptides, lifestyle steps, and timeline.

## Tech Stack
- Next.js 16
- TypeScript
- Tailwind CSS 4
- Single-page component architecture

## Health Dimensions
1. **Energy & Vitality** - fatigue, stamina, daily energy
2. **Weight & Metabolism** - body composition, metabolic health
3. **Recovery & Performance** - athletic recovery, muscle, fitness
4. **Aging & Longevity** - anti-aging, cognitive health, wellness

## Quiz Structure

### Questions (8 total)
One question per screen with mix of:
- Single select (most questions)
- Multi-select (symptom checker)
- Slider/rating (energy and sleep quality)

### Question Flow
1. Primary health goal
2. Current energy levels (1-5 rating)
3. Metabolism description
4. Exercise routine
5. Symptoms (multi-select)
6. Age range
7. Cognitive function importance
8. Sleep quality (1-5 rating)

## Scoring Model
Multi-dimensional scoring (different from coffee quiz's winner-take-all):
- Each question adds points to relevant health dimensions
- Scores normalized to percentages
- Primary focus determined by highest score(s)
- Secondary focus included if within 80% of primary

## Peptide Protocols

### Energy & Vitality
- Primary: CJC-1295/Ipamorelin (GH secretagogue)
- Support: BPC-157 (gut health, systemic healing)

### Weight & Metabolism
- Primary: Tesamorelin (visceral fat reduction)
- Support: AOD-9604 (fat-specific metabolism)

### Recovery & Performance
- Primary: BPC-157 (tissue repair)
- Support: TB-500 (systemic healing)

### Aging & Longevity
- Primary: Epithalon (telomere support)
- Support: Semax (cognitive), CJC-1295/Ipamorelin (GH optimization)

## Result Display

### Components
1. Health Profile - bar chart showing scores across all 4 dimensions
2. Primary Protocol - main peptide(s) for primary focus area
3. Supporting Protocol - additional peptides for secondary needs
4. Lifestyle Steps - 4 actionable non-peptide recommendations
5. Timeline - 3 phases (Foundation, Optimization, Maintenance)
6. Medical Disclaimer
7. Action buttons (Retake, Share)

## Visual Style
- Dark theme (slate/blue gradient background)
- Professional health/wellness aesthetic
- Color-coded dimensions:
  - Energy: Amber (#f59e0b)
  - Weight: Emerald (#10b981)
  - Recovery: Blue (#3b82f6)
  - Aging: Violet (#8b5cf6)
- Clean sans-serif typography (Inter)
- Subtle animations (fade-in)

## Features
- Category pre-selection on start screen (optional)
- Progress bar with percentage
- Back navigation between questions
- Multi-select with visual checkboxes
- Rating scale buttons (1-5)
- Responsive mobile design
- Share functionality via Web Share API

## Medical Disclaimer
> "This quiz is for educational purposes only and is not medical advice. Peptides are research compounds. Always consult a qualified healthcare provider before starting any peptide protocol."

## Running the Project
```bash
npm install
npm run dev
```

Visit http://localhost:3000
