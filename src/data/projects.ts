// ---------------------------------------------------------------------------
// Project list.
//
// Replace these placeholder entries with your real projects. To add a project,
// append an object to the array following the `Project` type in
// `src/types/index.ts`.
//
// - List a technology only when it is actually used.
// - Leave `githubUrl` out for projects whose source is not (yet) public.
//   Cards only show a "Source" link when this field is present.
// - Leave `demoUrl` out when a project has no live demo.
// ---------------------------------------------------------------------------

import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Example Project One",
    description:
      "A full project card example. Replace this with a short summary of what the project does and why it is interesting.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS"],
    status: "active",
    githubUrl: "https://github.com/your-github-username/example-project-one",
    demoUrl: "https://example.com",
  },
  {
    name: "Example Project Two",
    description:
      "A project with a repository link but no live demo yet. Remove or add demoUrl and githubUrl depending on what is available.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    status: "in-progress",
    githubUrl: "https://github.com/your-github-username/example-project-two",
  },
  {
    name: "Example Project Three",
    description:
      "An example of a project that is not yet public. No repository link is shown while the source code stays private.",
    technologies: ["Python", "AWS", "Docker"],
    status: "archived",
  },
];