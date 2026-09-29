// ---------------------------------------------------------------------------
// Project list, drawn from the CV and interests.
//
// - Leave `githubUrl` out for projects whose source is not (yet) public.
//   Cards only show a "Source" link when this field is present.
// - Leave `demoUrl` out when a project has no live demo.
// ---------------------------------------------------------------------------

import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "AI-powered Android inventory app",
    description:
      "A personal project that combines image recognition and structured data extraction to capture inventory items, with validation built into the workflow. Built to explore AI-assisted development end to end.",
    technologies: ["Kotlin", "Android", "AI", "Data validation"],
    status: "in-progress",
  },
  {
    name: "Gallery database migration",
    description:
      "Led the migration of around 3,000 records from a legacy Linux SQL database to the Artlogic art management platform, automating extraction, transformation, cleansing, and validation with Python scripts and Excel templates.",
    technologies: ["Python", "SQL", "Data migration", "Linux"],
    status: "active",
  },
];