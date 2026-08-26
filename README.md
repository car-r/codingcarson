# codingcarson.com

Coding portfolio of Carson Richter. Shipped web projects.

Astro, Tailwind CSS, and TypeScript. Static output.

DNS and domain pointing for codingcarson.com are handled separately and must not be changed in this repo.

## Local run

Requires Node.js 20.3 or later.

From this directory:

    npm install
    npm run dev

Open http://localhost:4321

Production build and local preview:

    npm run build
    npm run preview

The build writes a static site to dist/. Preview serves that output locally.

## Deploy on Vercel

1. Push this repository to GitHub, or import the folder from the Vercel dashboard.
2. In Vercel, create a new project and import the repo.
3. Framework preset: Astro. Output is static. Leave build settings at the defaults:
   - Build command: npm run build
   - Output directory: dist
4. Deploy. No environment variables are required.

Do not add, edit, or remove custom domains, DNS records, or registrar settings from this project. Pointing codingcarson.com is handled outside this repo.
