export interface DevProject {
  title: string;
  description: string;
  type: string;
  slug: string;
  featured: boolean; // This field isn't provided in markdown, will use a placeholder.
  tech: string[];
  featuredTech: string[];
  liveUrl: string;
  repoUrl: string;
}

const data: DevProject[] = [
  {
    title: "The Majesty of the 36 Views of Mt. Fuji",
    type: "Web App",
    description:
      "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
    slug: "the-majesty-of-the-36-views-of-mt-fuji",
    featured: true,
    tech: ["TypeScript", "Angular", "OpenSeadragon"],
    featuredTech: ["TypeScript", "Angular", "OpenSeadragon"],
    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
    repoUrl: "https://github.com/seancswanson/osd-woodblocks-angular",
  },
  {
    title: "Cypher Queenz",
    type: "Web App",
    description:
      "A dynamic Astro.js-powered platform promoting CypherQueenz, a vibrant Bgirl collective. \nIntegrated with Sanity.io's CMS for seamless content management, the site showcases events, blogs, galleries, and more, highlighting the pivotal role of females in Hip Hop.\n Designed for optimal performance and user engagement, it embodies both modern web development aesthetics and best practices.",
    slug: "cypher-queenz",
    featured: true,
    tech: ["Astro", "Sanity CMS", "SSG", "Tailwind"],
    featuredTech: ["apollo", "sanity", "SSG"],
    liveUrl: "https://www.cypherqueenz.com",
    repoUrl: "https://github.com/seancswanson/cypherqueenz-www",
  },
  {
    title: "Chairman of the Board",
    type: "Web App",
    description:
      '"Chairman of the Board" is a tongue-in-cheek web game where players start as a Mailroom Clerk and navigate through various scenarios to climb the corporate ladder, aiming to reach the coveted Chairman position.\n Play now for a humorous take on the corporate world!',
    slug: "chairman-of-the-board",
    featured: true,
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    featuredTech: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://seancswanson.github.io/chairman-of-the-board/",
    repoUrl: "https://github.com/seancswanson/chairman-of-the-board",
  },
  {
    title: "OP-T3",
    type: "Web App",
    description:
      '"OP-T3" is a web app designed to rank Stands from JoJo\'s Bizarre Adventure.\n It leverages the power of the T3 Stack (TypeScript, tRPC, and Tailwind) and is built using Next.js.\n To persist data and interface with the database, MySQL is used with Prisma as the ORM.',
    slug: "op-t3",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind", "tRPC", "Prisma", "MySQL"],
    featuredTech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "tRPC",
      "Prisma",
      "MySQL",
    ],
    liveUrl: "https://op-t3.vercel.app/",
    repoUrl: "https://github.com/seancswanson/op-t3",
  },
];

export default data;
