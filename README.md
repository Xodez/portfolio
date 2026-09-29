# Professional Portfolio Website

A clean, modern portfolio/profile website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

The site is a static, content-driven page designed to be easy to extend as more projects, skills, and experience accumulate.

> **Note:** All personal content — name, bio, skills, project list, and links — is currently placeholder data. Replace it with your own information before publishing.

## Tech stack

- [Astro](https://astro.build) 7 — static site generation
- [Tailwind CSS](https://tailwindcss.com) 4 — via the official `@tailwindcss/vite` plugin
- [TypeScript](https://www.typescriptlang.org) — for typed data files and `astro check`
- Git — version control

## Getting started

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:4321)
npm run dev

# Type-check the project
npm run check

# Build a production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Project structure

```
src/
  components/    Reusable UI pieces (header, footer, section, project card, icons)
  data/          Site content, kept separate from presentation
  layouts/       Page shell (head, header, footer, skip link)
  pages/         Route pages (index.astro)
  styles/        Global CSS + Tailwind entry point
  types/         Shared TypeScript types
public/          Static assets (favicon)
```

## Adding your own content

Content is kept separate from markup so you can update the site without touching layout code.

| What you want to change | File |
| --- | --- |
| Name, role, tagline, bio, email, social links | `src/data/site.ts` |
| Skills and technologies | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Status colours / card markup | `src/components/ProjectCard.astro` |

### Adding a project

Each project in `src/data/projects.ts` follows the `Project` type in `src/types/index.ts`:

```ts
{
  name: "My Project",
  description: "A short summary of what it does.",
  technologies: ["Astro", "TypeScript"],
  status: "active", // "active" | "in-progress" | "planned" | "archived"
  githubUrl: "https://github.com/you/my-project", // omit while the repo is private
  demoUrl: "https://my-project.example.com",      // omit when there is no live demo
}
```

A card only shows a **Source** link when `githubUrl` is present; otherwise it shows a **Private** indicator. Omit `demoUrl` when a project has no live demo.

## Deployment

The build output is static HTML/CSS in `dist/`, so the site can be hosted anywhere that serves static files (GitHub Pages, Netlify, Vercel, an S3 bucket, etc.). No server runtime or environment variables are required.