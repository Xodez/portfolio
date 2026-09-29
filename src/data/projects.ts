// ---------------------------------------------------------------------------
// Project list.
//
// These are placeholder entries to be replaced with real repositories from
// your GitHub account as they become available.
//
// - Leave `githubUrl` out for projects whose source is not (yet) public.
//   Cards only show a "Source" link when this field is present.
// - Leave `demoUrl` out when a project has no live demo.
// ---------------------------------------------------------------------------

import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "Sample project one",
    description:
      "Placeholder entry — replace this with a real repository from GitHub. It demonstrates a card with an active status and a source link.",
    technologies: ["TypeScript", "Astro"],
    status: "active",
    githubUrl: "https://github.com/Xodez/sample-project-one",
  },
  {
    name: "Sample project two",
    description:
      "Placeholder entry — replace this with an in-progress repository. The source link will appear once githubUrl is set.",
    technologies: ["Python", "Flask"],
    status: "in-progress",
    githubUrl: "https://github.com/Xodez/sample-project-two",
  },
  {
    name: "Sample project three",
    description:
      "Placeholder entry for a planned project with no public repository yet. Cards with no githubUrl show a Private indicator instead of a link.",
    technologies: ["Kotlin", "Android"],
    status: "planned",
  },
];