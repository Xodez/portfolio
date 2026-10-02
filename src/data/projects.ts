// ---------------------------------------------------------------------------
// Project list.
//
// - Leave `githubUrl` out for projects whose source is not (yet) public.
//   Cards only show a "Source" link when this field is present.
// - Leave `demoUrl` out when a project has no live demo.
// ---------------------------------------------------------------------------

import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "API Monitoring Tool",
    description:
      "A self-contained API health-checking tool built with Python and FastAPI. Tracks a list of APIs, checks them on a schedule, stores the full history in SQLite, and renders an automatically generated summary report in a local web UI.",
    technologies: ["Python", "FastAPI", "SQLite", "APScheduler"],
    status: "active",
    githubUrl: "https://github.com/Xodez/API-Monitoring-Tool",
  },
  {
    name: "Portfolio Website",
    description:
      "This site — a fully static portfolio built with Astro and Tailwind CSS. Content is data-driven, and every push to main is built by GitHub Actions, deployed to AWS S3, and served through CloudFront.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "AWS"],
    status: "active",
    githubUrl: "https://github.com/Xodez/portfolio",
  },
];