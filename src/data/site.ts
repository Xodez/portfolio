// ---------------------------------------------------------------------------
// Personal profile content, drawn from the CV.
// Replace or extend this file as your details change over time.
// ---------------------------------------------------------------------------

export const site = {
  name: "Kasparas Skruibis",
  role: "Software Developer",
  tagline:
    "Software developer focused on clean, reliable systems, with hands-on experience in data migration, QA automation, and AWS cloud support.",
  bio: [
    "Cloud-focused software developer with an AWS Certified Cloud Practitioner credential and hands-on training in Linux administration, networking, and core AWS services.",
    "I recently completed a Cloud Support Engineer training programme, where I built practical skills administering Linux systems, troubleshooting connectivity, and working with AWS infrastructure. Combined with a software development background spanning data migration, QA, and technical support, I am building toward a career as a Cloud Engineer — and the projects here reflect that focus, from cloud-ready tooling to this site's end-to-end AWS setup.",
  ],
  email: "kasparasskruibis@gmail.com",
  location: "Cork City, Ireland",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/Xodez",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kasparas-skruibis/",
    },
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const siteTitle = "Kasparas Skruibis — Software Developer";
export const siteDescription =
  "Portfolio of Kasparas Skruibis — software developer experienced in data migration, QA automation, and cloud support.";