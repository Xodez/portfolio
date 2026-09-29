// ---------------------------------------------------------------------------
// Personal profile content.
// Everything in this file is placeholder data — replace it with your own
// information before publishing the site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Your Name",
  role: "Software Developer",
  tagline:
    "I build clean, accessible, and maintainable software — from polished interfaces to robust backend services.",
  bio: [
    "I am a software developer who enjoys turning ideas into reliable, well-structured applications. I care about clean code, thoughtful design, and building things that are a pleasure to use.",
    "This site is a growing home for my profile and projects. Check back as I publish more work over time.",
  ],
  email: "you@example.com",
  location: "Your City, Your Country",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/your-github-username",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-linkedin-username",
    },
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const siteTitle = "Software Developer Portfolio";
export const siteDescription =
  "Personal website and portfolio of a software developer. Projects, skills, and ways to get in touch.";