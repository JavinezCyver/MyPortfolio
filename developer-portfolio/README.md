# CYVER JAVINES — Developer portfolio

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

## GitHub Pages

Website: **https://javinezcyver.github.io/MyPortfolio/**

The deployment workflow is stored at the repository root in `.github/workflows/deploy-pages.yml`. It installs dependencies and builds the React app from `developer-portfolio/`, then publishes only `developer-portfolio/dist` to GitHub Pages. The Pages publishing source must be **GitHub Actions** in the repository's Settings > Pages.

Pushing portfolio changes to `main` automatically builds and deploys the site. You can also run the workflow manually from the repository's Actions tab. The workflow sets `PORTFOLIO_BASE_PATH` to `/MyPortfolio/` so scripts, styles, fonts, and the favicon resolve beneath the repository's Pages URL. Local development keeps the normal `/` path.

Do not publish the repository root as a static directory: it contains the React source, not a built root `index.html`.

## Make it yours

Edit **`src/data/portfolio.ts`** for your name, introductory copy, email, social URLs, availability, technologies, and project details. The portfolio is personalized for **CYVER JAVINES**, with the GitHub profile **[JavinezCyver](https://github.com/JavinezCyver)** and four verified public repositories:

- [QuizCraft](https://github.com/JavinezCyver/QuizCraft) — React, TypeScript, Tailwind CSS, and Tauri; offline study on web and Android.
- [Mist — Photobooth](https://github.com/JavinezCyver/Mist-PhotoBooth) — a browser camera and photo-strip project.
- [Clone Music App](https://github.com/JavinezCyver/Clone-Music-App) — a Flutter and Dart music application.
- [Skin Face Visor](https://github.com/JavinezCyver/FaceVisor) — a Flutter school project for image capture, uploads, and analysis screens.

Project descriptions and technology tags come from the public repositories. Each card links to its actual source and opens an accessible project overview with features and technology tags. QuizCraft also links to its published Android releases. The preview artwork is illustrative and is not an actual app screenshot.

- Set a project's optional `liveUrl` to show a **Live Demo** link for your deployed web app. Until then, **View Project** opens the project's details.
- Update the title and description in `index.html` and the logo in `public/favicon.svg` for your identity.
- **Get In Touch** opens Gmail compose in a new tab with `aeshirop14@gmail.com` in the To field, using the visitor's signed-in Gmail account. Other email links use `mailto:`. Copy email uses the browser clipboard on HTTPS or localhost and displays a fallback address if clipboard access fails.
- The LinkedIn homepage remains a placeholder; replace it with your profile URL.

## Structure

```text
developer-portfolio/
├── public/
│   ├── favicon.svg
│   └── fonts/                  # Local font assets and licenses
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── projects/           # Lazy-loaded project overview dialogs
│   │   ├── sections/           # Hero, About, Skills, Projects, Contact
│   │   ├── ui/                 # Reveal, SectionHeading, SocialLinks, TechIcon
│   │   └── visuals/            # Original orbit and project artwork
│   ├── data/portfolio.ts       # All editable portfolio content
│   ├── hooks/                  # Active section tracking
│   ├── styles/
│   │   ├── index.css           # Theme, typography, shared utilities
│   │   ├── components.css      # Page sections and responsive layouts
│   │   ├── project-previews.css
│   │   └── project-details.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Interaction and accessibility

Semantic landmarks, a skip link, visible keyboard focus, native anchor navigation, active section links, an accessible mobile menu, and native modal dialogs are included. Escape closes menus and dialogs. Dialogs trap keyboard focus and return it to the opening control. Motion respects `prefers-reduced-motion`; CSS ambient effects and smooth scrolling also stop when reduced motion is enabled. Project art is vector/CSS based, with fixed dimensions to avoid image requests and layout shifts. The project detail bundle loads only when opened.

Project dialogs stay centered at a fixed height and do not scroll with the mouse wheel or touch gestures. Compact screens use Overview and Features buttons to switch information within the same panel. Short screens omit decorative artwork to preserve room for the project content and links. Opening a dialog locks background scrolling; closing it restores scrolling and keyboard focus. Browser zoom remains available.

Design tokens live in the `@theme` block of `src/styles/index.css`. Responsive component rules live alongside their styles. Tailwind utilities are used for the responsive card grids and common flex layouts.
