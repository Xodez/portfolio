export type ProjectStatus = "active" | "in-progress" | "planned" | "archived";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  /** Omit when the source code is (or is not yet) public. */
  githubUrl?: string;
  /** Omit when there is no live demo. */
  demoUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  qualification: string;
  institution: string;
  period: string;
  details?: string;
}

export type IconName = "github" | "linkedin" | "mail" | "external";