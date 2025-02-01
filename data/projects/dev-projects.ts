export interface DevProject {
  title: string;
  description: string;
  type: string;
  slug: string;
  featured: boolean; // This field isn't provided in markdown, will use a placeholder.
  tech: string[];
  featuredTech: string[];
  infoUrl: string;
  liveUrl: string;
  repoUrl: string;
  blurDataBase64: string;
}

const data: DevProject[] = [
  {
    title: "The Way and Its Virtue",
    description: `
## Project Overview
Developed "The Way and Its Virtue," an open-source, web-based comparative reader for the Tao Te Ching. This project was inspired by Igor Bedesqui's "The Manual" and merges my decade-long interest in philosophy with my passion for web development.

## Purpose
To provide an enriching experience for those exploring the Tao Te Ching, offering fresh insights and a meaningful exploration of this ancient text.

## Core Features and Technology
- **Astro**: Built with Astro for a modern, performant web experience.
- **TypeScript**: Utilized TypeScript for robust, type-safe code.
- **Tailwind**: Styled with Tailwind for a responsive and visually appealing design.
- **Additional Features**: Includes dark mode, view transitions, intuitive sharing options, and more.

## User Experience
Offers a comparative reading experience of the Tao Te Ching, designed to be accessible and engaging for both long-time enthusiasts and those newly curious about Taoist philosophy.

## Outcome
Created a platform that allows users to delve deeper into the Tao Te Ching, providing a space for exploration and reflection on its profound wisdom.
    `,
    type: "Web App",
    slug: "the-way-and-its-virtue",
    featured: true,
    tech: ["Web", "Astro.js", "JavaScript"],
    featuredTech: ["Astro.js", "JavaScript"],
    infoUrl: "",
    liveUrl: "https://www.thewayanditsvirtue.com/",
    repoUrl: "https://github.com/seancswanson/the-way-and-its-virtue/",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nD3JIRFAQQgFQCSSAFga0OkaUYAKRGCGPLhz72a++GLVEjNjZj4iAupu3HuRmagq0O7+GxEgM8M5B+4OVcUDmrwnypi46eEAAAAASUVORK5CYII=",
  },
  {
    title: "Poliscope",
    type: "Web App",
    description: `
## Project Overview
Developed Poliscope, a web application designed to simplify and enhance understanding of the 2024 U.S. Presidential Election.

## Purpose

To provide voters with balanced and factual information about each candidate, empowering them to make informed decisions.

## Core Features and Technology

- **SvelteKit**: Built with SvelteKit for a responsive and efficient user experience.
- **Data Transparency**: Uses OpenAI's ChatGPT, Ballotpedia, and open-sourced data to ensure transparency and accuracy.

## User Experience

Poliscope offers interactive candidate profiles, comprehensive issue breakdowns, and viewpoints from across the political spectrum to help voters understand each candidate better.

## Development Insights

- **Technical Skills**: Showcased proficiency in SvelteKit and modern web technologies.
- **Ethical AI Integration**: Carefully integrated AI to minimize bias in presenting political information.
- **Open Source Approach**: Committed to community involvement and open-source principles for ongoing improvements.

## Outcome

Successfully created a platform that aims to inform and engage voters, encouraging informed voting and political discussion.
    `,
    slug: "poliscope",
    featured: true,
    tech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind", "ChatGPT"],
    featuredTech: ["Svelte", "SvelteKit", "TypeScript", "Tailwind", "ChatGPT"],
    infoUrl: "",
    liveUrl: "https://poliscope.vercel.app/",
    repoUrl: "https://github.com/seancswanson/poliscope",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AP/y+P/r5Pj/4Ov//6re//8Az4eM/yAoQP83FSj/3vD//wCUJDH/ADp3/3YAJf//6/n/AFcAAP+JACD/2XJx///N0P8lvCsNaqK6RwAAAABJRU5ErkJggg==",
  },
  {
    title: "The Majesty of the 36 Views of Mt. Fuji",
    type: "Web App",
    description: `
## Project Overview

Created an interactive tribute to Katsushika Hokusai's iconic series, "36 Views of Mt. Fuji."

## Purpose

To modernize the appreciation of Hokusai's artistry and make his work more accessible through a visually striking and interactive platform.

## Core Features and Technology

- **Angular**: Built with Angular to create a robust and dynamic platform.
- **OpenSeadragon**: Integrated for ultra-smooth, high-resolution gallery viewing.

## User Experience

Offers an immersive gallery experience with high-resolution images and interactive features, allowing users to explore the intricate details of each artwork.

## Development Insights

- **Technical Skills**: Enhanced skills in Angular and OpenSeadragon.
- **Artistic Appreciation**: Developed a deeper understanding and appreciation for art, translating Hokusai's works into a digital format.
- **User Experience Design**: Focused on creating an interactive and immersive gallery experience.

## Outcome

Successfully built a modern tribute to Katsushika Hokusai, providing art enthusiasts with a fresh and interactive way to explore the "36 Views of Mt. Fuji" series.
    `,
    slug: "the-majesty-of-the-36-views-of-mt-fuji",
    featured: true,
    tech: ["TypeScript", "Angular", "OpenSeadragon"],
    featuredTech: ["TypeScript", "Angular", "OpenSeadragon"],
    infoUrl: "",
    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
    repoUrl: "https://github.com/seancswanson/osd-woodblocks-angular",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/APTnxci+pYyLfuDUtACmqJ8iKTQmLDX/99kALDU3SE5RjIuAbmlbABAWGERPUyIqLgEMCqV3FIgcKVD2AAAAAElFTkSuQmCC",
  },
  {
    title: "Naka Studio",
    type: "Web App",
    description: `
## Project Overview

The clean, nature-inspired aesthetic reflects their boutique status while streamlining the booking experience for their clientele.

## Purpose

To create a visually appealing and informative online presence for Naka Studio, making it easier for clients to discover and engage with their services.

## Core Features and Technology

- **Astro.js**: Built with Astro.js for high performance and seamless content integration.
- **Tailwind CSS**: Used for styling to ensure a modern and responsive design.
- **SEO Optimization**: Implemented SEO strategies to enhance online visibility.

## User Experience

The website provides a responsive design, detailed service information, and personalized content about the founder.

## Development Insights

- **Technical Skills**: Improved proficiency in Astro.js and Tailwind CSS.
- **Client Communication**: Effectively managed client interactions and project requirements.
- **Project Management**: Oversaw the project from conception to completion, ensuring alignment with the client's vision.

## Outcome

Delivered a modern, SEO-optimized website that effectively represents Naka Studio's brand and services, making it easier for clients to find and book appointments.
    `,
    slug: "naka-studio",
    featured: false,
    tech: ["Astro.js", "SSG", "Tailwind", "HTML", "CSS"],
    featuredTech: ["TypeScript", "Angular", "OpenSeadragon"],
    infoUrl: "",
    liveUrl: "https://naka.studio",
    repoUrl: "https://github.com/seancswanson/naka-studio-www",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AO7/7f95l3n/ABsA/7/cyf8Ac5Ny/3GRcv8AHwD/XH1d/wBskHz/BTQj/ypQNP+hv6P/AL7fyP9NcVf/ABMA/8rq1f8NayWvDmSgxQAAAABJRU5ErkJggg==",
  },
  {
    title: "Cypher Queenz",
    type: "Web App",
    description: `
## Project Overview

Developed a platform to promote CypherQueenz, a vibrant Bgirl collective, highlighting the pivotal role of women in Hip Hop.

## Purpose

To showcase the activities and contributions of CypherQueenz in the Hip Hop community, making it easier for people to find events and connect with the collective online.

## Core Features and Technology

- **Astro.js**: Utilized to create a modern and dynamic platform.
- **Sanity.io**: Integrated for seamless content management.
- **Diverse Content**: Showcased events, blogs, and galleries to highlight the collective's work.

## User Experience

Optimized for performance with fast load times and a smooth user experience. The platform encourages user engagement with visually appealing design and intuitive navigation.

## Development Insights

- **Technical Skills**: Enhanced skills in Astro.js and Sanity.io.
- **Design Skills**: Focused on creating a visually engaging platform.
- **Content Management**: Improved content management processes with Sanity.io.

## Outcome

Successfully created an engaging platform that promotes CypherQueenz, making it easier for people to find events and connect with the collective online.

    `,
    slug: "cypher-queenz",
    featured: true,
    tech: ["Astro", "Sanity CMS", "SSG", "Tailwind"],
    featuredTech: ["apollo", "sanity", "SSG"],
    infoUrl: "",
    liveUrl: "https://www.cypherqueenz.com",
    repoUrl: "https://github.com/seancswanson/cypherqueenz-www",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/ACiHsv8rZZD/Jmqn/zak6v8APX6v/yYLDv8nAAD/a97a/wCtenf/RSsU/ygCAP+L4tD/AP/Fef/b1Zv/xdzH/9L///+3xiep/jt0wQAAAABJRU5ErkJggg==",
  },
  {
    title: "Chairman of the Board",
    type: "Web App",
    description: `
## Project Overview

A humorous web game about climbing the corporate ladder from a Mailroom Clerk to Chairman of the Board.

## Purpose

To offer a fun and light-hearted take on corporate life through an engaging web game, and to recreate a game from the 1980s that my father coded in GW Basic, providing a unique way to unwind and enjoy humorous scenarios.

## Core Features and Technology

- **Scenario-Based Gameplay**: Engages players with various humorous scenarios.
- **Tongue-in-Cheek Humor**: Provides a playful perspective on corporate culture.

## User Experience

The game is designed for fun and relaxation, with engaging scenarios that test wit and decision-making skills.

## Development Insights

- **Creative Storytelling**: Showcased ability to craft engaging and funny narratives.
- **Game Development**: Gained experience in web game development.

## Outcome

Delivered an entertaining web game that offers a humorous take on the corporate world, providing players with a unique way to unwind and enjoy light-hearted gameplay.

`,
    slug: "chairman-of-the-board",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    featuredTech: ["HTML", "CSS", "JavaScript", "jQuery"],
    liveUrl: "https://seancswanson.github.io/chairman-of-the-board/",
    infoUrl: "",
    repoUrl: "https://github.com/seancswanson/chairman-of-the-board",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nDXDsQkAQQgEQBNbMDAQg+tLBBEbNbqi9uDhB4aYGZn5FRFQROBXVaCZwb0Xu4vuBqkqzjkwM7g7HslJI1kajBiNAAAAAElFTkSuQmCC",
  },
  {
    title: "OP-T3",
    type: "Web App",
    description: `
## Project Overview

A web app dedicated to ranking Stands from the anime series "JoJo's Bizarre Adventure."

## Purpose

To provide fans with an engaging platform to rank and discuss their favorite Stands, fostering a vibrant community around the series.

## Core Features and Technology

- **T3 Stack**: Built using TypeScript, tRPC, and Tailwind for a responsive and dynamic experience.
- **Next.js**: Utilized for seamless performance and fast load times.
- **MySQL and Prisma**: Implemented for robust backend data management.

## User Experience

The platform is designed to engage users with dynamic features and interactive rankings, encouraging community participation.

## Development Insights

- **Technical Skills**: Gained deeper understanding of the T3 Stack and Next.js.
- **Community Building**: Focused on creating a user-centric platform for fans to interact.
- **Backend Development**: Enhanced skills in backend development with MySQL and Prisma.

## Outcome

Successfully built a space for "JoJo's Bizarre Adventure" fans to rank and discuss Stands, fostering a vibrant and interactive community.

    `,
    slug: "op-t3",
    featured: false,
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
    infoUrl: "",
    repoUrl: "https://github.com/seancswanson/op-t3",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/ADI0Sv8wM0P/KzVB/5GRj/8AMTVB/2ZYSf+hmYb/l5F//wBoa3L/7tnC///23P8GBgj/AMm9sP/HwLr/eHd2/xcZHP+ouCWJKgU75wAAAABJRU5ErkJggg==",
  },
  {
    title: "DreamBox Learning Insights Dashboard - Growth Report",
    type: "Web App",
    description: `
## Project Overview

Contributed to the front-end development of the Growth Report feature for the DreamBox Learning Insights Dashboard.

## Purpose

To enable detailed tracking and analysis of growth metrics, helping educators and administrators make informed decisions.

## Core Features and Technology

- **Angular**: Developed using Angular for a robust front-end solution.
- **JavaScript and TypeScript**: Utilized for dynamic and interactive UI components.
- **HTML and SCSS**: Applied for structured and stylish web content.

## User Experience

The feature provides an intuitive interface for users to track and analyze growth metrics effectively.

## Development Insights

- **Technical Skills**: Enhanced proficiency in Angular, JavaScript, and TypeScript.
- **Collaboration Skills**: Worked closely with a cross-functional team to meet user requirements.
- **Problem-Solving Skills**: Ensured meticulous attention to detail throughout the development process.

## Outcome

Delivered a feature that facilitates effective growth reporting, enhancing the ability to track and analyze growth metrics for better decision-making.
    `,
    slug: "dreambox-growth-report",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    infoUrl: "",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAATElEQVR4nGPglNT6z8Cp8l/HPvQ/n5zRfwYGDqX/y88f/X/g////7OJa/xkYOJX/X/l96//6+w/AKhk4JHX/m9qF/rdwDPrPJq79HwDqox6MzK5JzgAAAABJRU5ErkJggg==",
  },
  {
    title: "DreamBox Learning Insights Dashboard - Educator Usage Report",
    type: "Web App",
    description: `
## Project Overview

Developed the Educator Usage Report feature for the DreamBox Learning Insights Dashboard.

## Purpose

To provide educators with detailed usage data, helping them understand and improve their teaching practices.

## Core Features and Technology

- **Angular**: Utilized Angular for building a scalable front-end.
- **JavaScript**: Implemented dynamic functionalities to enhance user experience.

## User Experience

The feature offers a user-friendly interface for educators to access and interpret usage data effectively.

## Development Insights

- **Technical Skills**: Improved proficiency in Angular and JavaScript.
- **Collaboration Skills**: Collaborated with various teams to create user-centric UI solutions.
- **Feedback Integration**: Integrated feedback continuously to refine the feature.

## Outcome

Successfully created a feature that enhances the user experience by providing detailed and actionable usage data for educators.
    
`,
    slug: "dreambox-educator-usage-report",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    infoUrl: "",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AAkZKv8ADCX/LD9V/w4eMv8AAAgh/6fPxv/A////BhUp/wAFEyn/1Pvc/7Pj4/8EEyn/ACMvQ/86Q1n/Q0tc/x0qP//2ux9zQ6KrHAAAAABJRU5ErkJggg==",
  },
  {
    title: "DreamBox Learning Insights Dashboard - Predictive Insights Report",
    type: "Web App",
    description: `
## Project Overview

Developed the Predictive Insights Report feature for the DreamBox Learning Insights Dashboard.

## Purpose

To leverage predictive analytics for providing valuable insights, helping educators make informed decisions for end-of-year performance.

## Core Features and Technology

- **Angular**: Built using Angular for robust front-end development.
- **JavaScript**: Used to create interactive and dynamic content.

## User Experience

The feature provides predictive insights through an intuitive interface, enabling educators to make data-driven decisions.

## Development Insights

- **Technical Skills**: Enhanced proficiency in Angular and JavaScript.
- **Collaboration Skills**: Worked closely with stakeholders to align with their expectations.
- **Problem-Solving Skills**: Addressed and resolved issues during the development cycle.

## Outcome

Successfully launched the Predictive Insights feature, receiving positive feedback for its ability to provide valuable insights and aid in decision-making.

`,
    slug: "dreambox-predictive-insights",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    infoUrl: "",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AAkZKv8ACST/LD9V/w4eMv8AAAQg/6fPxv++////BRUp/wAIFiz/1v7d/7Xl5f8GFir/ACk2Sf8+SF//R1Bh/yU0R//5lx/MVOKctgAAAABJRU5ErkJggg==",
  },
  {
    title: "Internal ChatGPT Support App",
    type: "Web App",
    description: `
## Project Overview

Developed an internal proof-of-concept ChatGPT Support App during the Summer Fix.Build.Learn hackathon.

## Purpose

To streamline onboarding and provide self-serve information to employees, enhancing operational efficiency.

## Core Features and Technology

- **Azure OpenAI Studio**: Leveraged for building secure and efficient GPT-powered chatbot functionalities.
- **React**: Utilized for creating a dynamic and interactive user interface.

## User Experience

The app offers a user-friendly interface for employees to access self-serve information, improving onboarding processes.

## Development Insights

- **Technical Skills**: Gained hands-on experience with Azure OpenAI Studio and React.
- **Collaboration Skills**: Worked with stakeholders and cross-functional teams throughout the development.
- **Problem-Solving Skills**: Oversaw QA testing to ensure the app met technical and user requirements.

## Outcome

The project was well-received, showcasing its potential to enhance operational efficiency, and led to a successful pilot phase.
    `,
    slug: "internal-chatgpt-support-app",
    featured: false,
    tech: [
      "Azure OpenAI Studio",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    featuredTech: ["Azure OpenAI Studio", "Angular"],
    liveUrl: "",
    infoUrl: "#",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nGO4fPnS/9+/vv1/9+7d/3Pnzv1nMPYI+y/tm/BfTIjvv7yC4n8GZjWL/wxSBv+FBHj/Kysr/2cAafnxA6LlxIkT/wFjwyh6Bx7/nQAAAABJRU5ErkJggg==",
  },
  {
    title: "Ed Hardy Interactives",
    description: `
## Project Overview

Collaborated on developing touchscreen experiences for the Ed Hardy retrospective at the de Young Museum in San Francisco during my apprenticeship as an amanuensis to senior developer Ian Gilman.

## Purpose

To create an interactive and engaging experience for museum visitors, showcasing the work of renowned tattoo artist Ed Hardy.

## Core Features and Technology

- **JavaScript and HTML**: Developed interactive elements using JavaScript and HTML.
- **HTML Canvas**: Utilized for rendering dynamic and detailed visual content.

## User Experience

The interactive touchscreens provided an immersive way for visitors to explore Ed Hardy's journey and his contributions to tattoo art. Users could view his sketches, designs, and tattoos up close. Vintage photographs of tattoo models were interactive and their tattoos, separated by precise SVG boundaries, were hotspots to click to explore that particular design.

## Development Insights

- **Technical Skills**: Enhanced skills in JavaScript and HTML Canvas.
- **Collaborative Learning**: Gained insights from working closely with experienced developers and museum curators.
- **User Engagement**: Focused on creating an engaging and informative user experience.

## Outcome

Successfully delivered interactive experiences that enhanced the exhibition, providing visitors with a deeper understanding of Ed Hardy's artistry.
    `,
    type: "Web App",
    slug: "ed-hardy-interactives",
    featured: false,
    tech: ["JavaScript", "HTML", "HTML Canvas"],
    featuredTech: ["JavaScript", "HTML Canvas"],
    liveUrl: "",
    infoUrl: "https://www.famsf.org/exhibitions/ed-hardy",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGPoy4s0YGAwZmRoT3JnsJNmMBBh0GZgqAgyYdg4qTjUUqss1vPzsysMN66cS/C3LUmP+vv7JwBhsBJzw3fOYwAAAABJRU5ErkJggg==",
  },
  {
    title: "Traditions of the Ancestors",
    description: `
## Project Overview

Contributed to the development of TOTA.world, a platform designed to foster connections with various cultures through rich multimedia content during my apprenticeship as an amanuensis to senior developer Ian Gilman.

## Purpose

To provide a comprehensive resource for exploring and sharing cultural insights, promoting a harmonious global community.

## Core Features and Technology

- **HTML, CSS, and JavaScript**: Developed the platform using these core web technologies.
- **Rich Multimedia Content**: Integrated articles, videos, and interactive maps to provide a diverse range of cultural information.

## User Experience

The platform offers an engaging and educational experience, encouraging users to explore and connect with different cultures.

## Development Insights

- **Technical Skills**: Improved proficiency in HTML, CSS, and JavaScript.
- **Client Engagement**: Learned to effectively communicate and meet client requirements.
- **Content Integration**: Gained experience in integrating and managing diverse multimedia content.

## Outcome

Successfully contributed to a platform that fosters cultural understanding and connection, enhancing users' appreciation of global diversity.
    `,
    type: "Web App",
    slug: "traditions-of-the-ancestors",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript"],
    featuredTech: ["JavaScript"],
    liveUrl: "https://www.tota.world",
    infoUrl: "",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AObu8EJgZgAnLr7MzgBxiYyPoqZ9k5ZAX2MAT2xxg5ibhJmcWHR4AN7n6QAnLgAZH97n6ob4GEjky07UAAAAAElFTkSuQmCC",
  },
  {
    title: "Living Worlds",
    description: `
## Project Overview

Collaborated on the Living Worlds app, a modern recreation of dynamic pixel art scenes by Mark Ferrari during my apprenticeship as an amanuensis to senior developer Ian Gilman.

## Purpose

To bring Mark Ferrari's pixel art scenes to life with real-time transitions and ambient soundscapes, celebrating the 25th anniversary of his original works.

## Core Features and Technology

- **iOS and Android**: Developed for cross-platform functionality on mobile devices.
- **JavaScript and HTML**: Used to create interactive and dynamic scenes.

## User Experience

The app offers a unique and immersive experience, allowing users to explore dynamic pixel art scenes with real-time transitions and soundscapes.

## Development Insights

- **Cross-Platform Development**: Gained experience in developing for both iOS and Android platforms.
- **Artistic Presentation**: Enhanced skills in presenting pixel art in a dynamic and interactive format.
- **Freelancing Skills**: Learned the nuances of managing client projects and delivering high-quality work.

## Outcome

Delivered a well-received app that brings Mark Ferrari's pixel art scenes to life, offering users an engaging and nostalgic experience.
    `,
    type: "Mobile App - iOS & Android",
    slug: "living-worlds",
    featured: false,
    tech: ["iOS", "Android", "JavaScript", "HTML"],
    featuredTech: ["JavaScript", "HTML"],
    liveUrl: "",
    infoUrl: "https://pixfabrik.com/livingworlds/",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nAFEALv/AEpHav/18///lZzn/w0SJP8AMjFN/66j3v9qbJf/DRQm/wATGS//MzxZ/0BLY/8XGiz/ABsZNf99h6j/ho2x/w0CHf+tfiE0rEi1EAAAAABJRU5ErkJggg==",
  },
  {
    title: "Andy Warhol Interactive",
    description: `
## Project Overview

Collaborated on developing a touchscreen experience for the "Contact Warhol: Photography Without End" exhibition at the Stanford Cantor Museum during my apprenticeship as an amanuensis to senior developer Ian Gilman.

## Purpose

To create an interactive experience that unveils never-before-seen photographs by Andy Warhol, offering insights into his social interactions and celebrity encounters.

## Core Features and Technology

- **JavaScript and HTML**: Developed interactive elements using these core web technologies.
- **HTML Canvas**: Utilized for rendering dynamic visual content.

## User Experience

The interactive touchscreen provided an engaging way for visitors to explore Warhol's photographs, enhancing their understanding of his work and social life.

## Development Insights

- **Technical Skills**: Improved proficiency in JavaScript and HTML Canvas.
- **Client Project Management**: Gained experience in managing and delivering client projects.
- **User Engagement**: Focused on creating an interactive and informative user experience.

## Outcome

Successfully delivered an interactive experience that enriched the exhibition, providing visitors with a deeper connection to Andy Warhol's photography.
    `,
    type: "Web App",
    slug: "andy-warhol-interactive",
    featured: false,
    tech: ["JavaScript", "HTML", "Canvas"],
    featuredTech: ["JavaScript", "Canvas"],
    liveUrl: "",
    infoUrl:
      "https://museum.stanford.edu/exhibitions/contact-warhol-photography-without-end",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nGPQUJGICfMO8XVUkRVmkJfkLi9O/f/vx/LWRgZxfgZBTobFC2duXDwbxOFjYVCQ5NNUlgAAgRANu4SDUmkAAAAASUVORK5CYII=",
  },
  {
    title: "Knoll Interactive Archive",
    description: `
## Project Overview

Contributed to the development of the Knoll Interactive Archive, a digital platform that narrates the rich history of Knoll during my apprenticeship as an amanuensis to senior developer Ian Gilman.

## Purpose

To create an engaging and interactive digital archive that showcases the legacy of Knoll's creativity and innovation since 1938.

## Core Features and Technology

- **Pixi.js and Hammer.js**: Utilized these libraries for creating interactive archives.
- **JavaScript**: Developed dynamic and interactive content using JavaScript.

## User Experience

The platform offers users an interactive way to explore the history of Knoll, including the people, products, and events that shaped the company's legacy.

## Development Insights

- **Technical Skills**: Enhanced proficiency in Pixi.js, Hammer.js, and JavaScript.
- **Freelancing Skills**: Gained experience in client communication and project management.
- **Interactive Development**: Focused on creating engaging and interactive user experiences.

## Outcome

Successfully contributed to an interactive archive that allows users to explore Knoll's history in an engaging and informative way.

`,
    type: "Web App",
    slug: "knoll-interactive-archive",
    featured: false,
    tech: ["Web", "Pixi.js", "Hammer.js", "JavaScript"],
    featuredTech: ["Pixi.js", "Hammer.js"],
    infoUrl: "",
    liveUrl: "https://www.knoll.com/the-archive/",
    repoUrl: "",
    blurDataBase64:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AJ+fn6Wjo5SUlMLCwgDFxMQxLCs5ODerq6wAqqqpGRYVNzMyiIiIAPv8/NfX19HQzry6ubJPG9U94sIrAAAAAElFTkSuQmCC",
  },
];

export default data;
