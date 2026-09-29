// ---------------------------------------------------------------------------
// Professional experience, most recent first, drawn from the CV.
// To add a role, append an object following the `Experience` type in
// `src/types/index.ts`.
// ---------------------------------------------------------------------------

import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    role: "Cloud Support Engineer training programme",
    organization: "Generation Ireland",
    period: "Jul 2026 – Oct 2026",
    location: "Cork",
    summary:
      "Twelve-week, full-time programme preparing for entry-level Cloud Support Engineer roles, combining hands-on technical training with career readiness in a workplace-style environment.",
    highlights: [
      "Built hands-on Linux administration skills, including command-line navigation, system troubleshooting, and foundational cloud support practices.",
      "Gained practical exposure to AWS concepts and core networking topics including IP addressing, DNS, routing, and connectivity.",
      "Developed structured troubleshooting and problem-solving techniques through practical technical exercises.",
    ],
  },
  {
    role: "Technical Consultant (pro bono)",
    organization: "The Gallery Kinsale",
    period: "Oct 2025 – Present",
    location: "Cork",
    summary:
      "Supporting the gallery's digital transformation by leading the migration from a legacy database to a modern art management platform.",
    highlights: [
      "Led the end-to-end migration of around 3,000 records from a legacy Linux SQL database to Artlogic, covering inventory, images, metadata, ownership, locations, and sales records.",
      "Developed Python scripts and Excel import templates to automate data extraction, transformation, cleansing, and validation.",
      "Diagnosed and resolved technical issues involving databases, website functionality, and data formatting while supporting ongoing system redevelopment.",
    ],
  },
  {
    role: "Support Operator",
    organization: "Iron Mountain",
    period: "Sep 2024 – Sep 2025",
    location: "Cork",
    summary:
      "Provided technical hardware support, drive validation, erasure verification, and process automation in a high-volume production environment.",
    highlights: [
      "Built Excel/VBA automation to populate drive model and capacity data automatically, reducing manual entry for intakes of 100–300 drives per batch.",
      "Used SQL queries to validate and track drive erasure records, ensuring compliance, audit readiness, and internal quality standards.",
      "Processed up to around 1,000 drives per week during peak periods while maintaining accuracy under strict SLAs.",
    ],
  },
  {
    role: "Localization QA Intern",
    organization: "McAfee",
    period: "Jan 2021 – Sep 2021",
    location: "Cork",
    summary:
      "Performed software and localization testing across mobile and web platforms, managing defects and developing QA automation solutions.",
    highlights: [
      "Designed and executed structured test plans for Android, iOS, and web applications, covering functionality, edge cases, and localization quality.",
      "Tracked and reported defects in JIRA with clear reproduction steps and evidence, achieving zero rejected tickets.",
      "Developed Xamarin-based automated scripts to replicate UI testing workflows and compare results against English baselines.",
    ],
  },
];