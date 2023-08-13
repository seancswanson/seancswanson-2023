import sacrificePreview from "../../assets/art/sacrifice.webm";
import sacrificeFull from "../../assets/art/sacrifice-full.webm";
import whenItFallsFull from "../../assets/art/when-it-falls.webm";
import jojoPreview from "../../assets/art/jojo.webm";
import jojoFull from "../../assets/art/jojo-full.webm";
import zaharaAlibiPreview from "../../assets/art/zahara-alibi-promo.webm";
import theGardenFull from "../../assets/art/the-garden-full.webm";

export interface Project {
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

const data: Project[] = [
  {
    title: "The Majesty of the 36 Views of Mt. Fuji",
    type: "Web App",
    description:
      "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
    slug: "the-majesty-of-the-36-views-of-mt-fuji",
    featured: true,
    tech: ["foo", "baz", "bar"],
    featuredTech: ["fooScript", "bazScript", "barScript"],
    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
    repoUrl: "https://osd-woodblocks-angular.pages.dev/home", // 'infoUrl' is used here, adjust if needed.
  },
  {
    title: "Cypher Queenz",
    type: "Web App",
    description:
      "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
    slug: "cypher-queenz",
    featured: true,
    tech: ["foo", "baz", "bar"],
    featuredTech: ["apollo", "sanity", "SSG"],
    liveUrl: "https://www.cypherqueenz.com",
    repoUrl: "https://www.cypherqueenz.com", // 'infoUrl' is used here, adjust if needed.
  },
  {
    title: "Chairman of the Board",
    type: "Web App",
    description:
      "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
    slug: "chairman-of-the-board",
    featured: true,
    tech: ["foo", "baz", "bar"],
    featuredTech: ["fooScript", "bazScript", "barScript"],
    liveUrl: "https://seancswanson.github.io/chairman-of-the-board/",
    repoUrl: "https://github.com/seancswanson/chairman-of-the-board",
  },
  {
    title: "OP-T3",
    type: "Web App",
    description:
      "OP-T3 is an application designed to rank Stands from JoJo's Bizarre Adventure. It leverages the power of the T3 Stack (TypeScript, tRPC, and Tailwind) and is built using Next.js.",
    slug: "op-t3",
    featured: true,
    tech: ["foo", "baz", "bar"],
    featuredTech: ["fooScript", "bazScript", "barScript"],
    liveUrl: "https://op-t3.vercel.app/",
    repoUrl: "https://github.com/seancswanson/op-t3",
  },
];

export default data;
