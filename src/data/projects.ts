export type FeaturedProject = {
  name: string;
  pitch: string;
  stack: string[];
  live: string;
  repo: string;
};

export type Experiment = {
  name: string;
  pitch: string;
  stack: string[];
  repo: string;
};

export const featured: FeaturedProject[] = [
  {
    name: "pickleballr.io",
    pitch: "A content site I designed, wrote, and shipped.",
    stack: ["Astro", "MDX", "React", "Tailwind"],
    live: "https://www.pickleballr.io",
    repo: "https://github.com/car-r/astro-pickleball",
  },
  {
    name: "arianarichter.com",
    pitch: "Professional site for Ariana Richter.",
    stack: ["Next.js", "GraphQL CMS", "Tailwind"],
    live: "https://www.arianarichter.com",
    repo: "https://github.com/car-r/ariana",
  },
  {
    name: "DCA calculator",
    pitch: "A shipped calculator for Bitcoin and stock dollar-cost averaging.",
    stack: ["Remix", "Tailwind"],
    live: "https://remix-dca-calc.vercel.app",
    repo: "https://github.com/car-r/remix-dca-calc",
  },
  {
    name: "Devreps",
    pitch: "A developer blog on JavaScript and Tailwind.",
    stack: ["Next.js", "GraphCMS", "Tailwind"],
    live: "https://devreps.vercel.app",
    repo: "https://github.com/car-r/devreps",
  },
];

export const experiments: Experiment[] = [
  {
    name: "Quote Notes",
    pitch: "Personal quote library with authors, books, and auth.",
    stack: ["Remix", "Prisma", "TypeScript"],
    repo: "https://github.com/car-r/remix-quotenotes",
  },
  {
    name: "Bikearound",
    pitch: "Bike marketplace UI.",
    stack: ["React", "MUI"],
    repo: "https://github.com/car-r/bikearound",
  },
];

export const github = "https://github.com/car-r";
