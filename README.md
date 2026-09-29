# Portfolio Website

A modern, fully static portfolio and profile website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The site presents a professional profile — hero, about, skills, experience, projects, education, and contact — in a clean dark-mode design that adapts to any screen size.

The frontend ships zero client-side JavaScript: every page is pre-rendered to static HTML and styled with Tailwind. Content lives in typed, version-controlled data files, so the site can be maintained and extended without touching layout code. Each merge to `main` is automatically built by GitHub Actions and deployed to an AWS S3 bucket, served globally through CloudFront.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro](https://astro.build) 7 — static site generation |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 via the `@tailwindcss/vite` plugin |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Infrastructure | GitHub Actions, AWS S3, AWS CloudFront, AWS IAM (OIDC) |

## Features

- **Data-driven content** — profile, skills, experience, education, and projects are declared in typed files under `src/data/`; the page renders them automatically. Updating a project or role never requires editing markup.
- **Conditional project links** — a project card shows a *Source* (and optional *Live demo*) link only when the matching URL is present, so repositories that are not public are never linked by mistake.
- **Dark mode by default** — built on Tailwind's class-based `dark:` variant, so a light-mode toggle can be added later without reworking styles.
- **Accessible and responsive** — semantic landmarks, skip-to-content link, visible focus rings, `prefers-reduced-motion` support, and layouts that scale from mobile to desktop.
- **Fast by default** — no runtime JavaScript, pre-rendered HTML, and a single optimised stylesheet.

## Local development

Prerequisites: [Node.js](https://nodejs.org) 20 or later.

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server at http://localhost:4321 |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Type-check the project (`astro check`) |

## Project structure

```
src/
  components/   Reusable UI components (header, footer, section, cards, icons)
  data/         Site content, kept separate from presentation
  layouts/      Page shell (head, header, footer, skip link)
  pages/        Route pages (index.astro)
  styles/       Global CSS and Tailwind entry point
  types/        Shared TypeScript types for content and component props
public/         Static assets (favicon)
.github/
  workflows/    CI/CD pipeline — build the site and deploy it to AWS
```

## Managing content

All page content is configured through the data layer, so routine updates are plain text edits.

| Content | File |
| --- | --- |
| Profile (name, role, tagline, bio, contact links) | `src/data/site.ts` |
| Skills and technologies | `src/data/skills.ts` |
| Professional experience | `src/data/experience.ts` |
| Education and certifications | `src/data/education.ts` |
| Projects | `src/data/projects.ts` |

### Adding a project

Project entries follow the `Project` type in `src/types/index.ts`:

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

A card renders a **Source** link only when `githubUrl` is set; otherwise it shows a **Private** indicator. `demoUrl` drives the optional **Live demo** link.

## Deployment

Continuous deployment is defined in `.github/workflows/deploy.yml`. On every push to the `main` branch, the pipeline:

1. Installs dependencies with `npm ci` and builds the site with `npm run build`.
2. Computes a content hash of the `dist/` output and compares it with the hash stored in the bucket from the previous deployment.
3. Assumes an AWS IAM role using GitHub's OIDC integration, so no long-lived credentials are stored in the repository.
4. Only when the build has actually changed: syncs `dist/` to the S3 bucket with `aws s3 sync` (removing files that no longer exist), creates a CloudFront invalidation so edge caches immediately serve the new build, and records the new build hash. Unchanged builds skip all three, leaving the bucket and edge caches untouched.

All infrastructure runs in the AWS **eu-north-1** region. The S3 bucket and CloudFront distribution are managed directly in AWS; this repository contains only the source code and the deployment pipeline.