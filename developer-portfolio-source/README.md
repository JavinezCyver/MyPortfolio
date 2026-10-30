# Developer portfolio

A responsive, single-page portfolio built with **React, TypeScript, Tailwind CSS v4, Motion for React, Lucide, and Vite**. The visual system uses charcoal surfaces, restrained lavender accents, Inter, and Space Grotesk. Fonts are self-hosted; their licenses are in `public/fonts/`.

## Run locally

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. To create and inspect a production build:

```sh
npm run build
npm run preview
```

`npm run check` runs the TypeScript checks alone. The production output is in `dist/` and can be served by any static host. No server, API key, or environment variables are required.

## Make it yours

Edit **`src/data/portfolio.ts`** for your name, introductory copy, email, social URLs, availability, technologies, and project details. The default Alex Morgan identity, `hello@example.com`, social homepages, and three concept projects are editable placeholders.

- Replace each project's `githubUrl` with your own repository. Until then, GitHub links intentionally lead to relevant GitHub topic pages and identify themselves as inspiration links in their accessible labels and tooltips.
- Set a project's optional `liveUrl` to send its **Live Demo** link to your deployed project. Without it, Live Demo opens a working, local interactive concept: analytics date ranges, a demo shopping bag, or a task list.
- Update the title and description in `index.html` and the logo in `public/favicon.svg` for your identity.
- The contact buttons use `mailto:` and need your real email address. Copy email uses the browser clipboard on HTTPS or localhost and displays a fallback address if clipboard access fails.
- Project demos are illustrative and do not persist data, process purchases, or connect to external accounts.

## Structure

```text
developer-portfolio/
├── public/
│   ├── favicon.svg
│   └── fonts/                  # Local font assets and licenses
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── projects/           # Lazy-loaded interactive project dialogs
│   │   ├── sections/           # Hero, About, Skills, Projects, Contact
│   │   ├── ui/                 # Reveal, SectionHeading, SocialLinks, TechIcon
│   │   └── visuals/            # Original orbit and project artwork
│   ├── data/portfolio.ts       # All editable portfolio content
│   ├── hooks/                  # Active section tracking
│   ├── styles/
│   │   ├── index.css           # Theme, typography, shared utilities
│   │   ├── components.css      # Page sections and responsive layouts
│   │   ├── project-previews.css
│   │   └── demos.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Interaction and accessibility

Semantic landmarks, a skip link, visible keyboard focus, native anchor navigation, active section links, an accessible mobile menu, and native modal dialogs are included. Escape closes menus and dialogs. Dialogs trap keyboard focus and return it to the opening control. Motion respects `prefers-reduced-motion`; CSS ambient effects and smooth scrolling also stop when reduced motion is enabled. Project art is vector/CSS based, with fixed dimensions to avoid image requests and layout shifts. The interactive demo bundle loads only when opened.

Design tokens live in the `@theme` block of `src/styles/index.css`. Responsive component rules live alongside their styles. Tailwind utilities are used for the responsive card grids and common flex layouts.
