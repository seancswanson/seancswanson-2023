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
    description: `
### Project Overview 🌟
  - **Tribute to Katsushika Hokusai**: Crafted an interactive tribute to the iconic artist Katsushika Hokusai, bringing a modern touch to the appreciation of his renowned series, "36 Views of Fuji".
  - **Modern Web Design Techniques**: Utilized modern web design techniques to create an immersive and visually striking platform that pays homage to Hokusai's artistry.

### Technical Backbone 🛠️
  - **Angular**: Leveraged the Angular framework to build a robust and dynamic platform, enhancing the user experience through smooth navigation and interactive features.
  - **OpenSeadragon**: Integrated OpenSeadragon to facilitate ultra-smooth high-resolution gallery viewing, allowing users to explore the intricate details of each artwork in the series.

### Gallery Experience 🎨
  - **High-Resolution Viewing**: Offered users an unparalleled gallery viewing experience with high-resolution images that capture the nuances of Hokusai's masterpieces.
  - **Interactive Engagement**: Created an interactive space where users can engage deeply with the artworks, fostering a rich and immersive art appreciation experience.

## Outcome 🚀
- **Modern Tribute**: Successfully built a modern tribute to Katsushika Hokusai, offering art enthusiasts a fresh and interactive way to explore the "36 Views of Fuji" series.
- **Positive Reception**: The project has been well-received, with users appreciating the ultra-smooth high-resolution gallery viewing experience and the modern interactive features.

## Skills Honed 🛡️
- **Technical Skills**: Enhanced technical proficiency by working with Angular and OpenSeadragon, gaining hands-on experience in modern web development practices.
- **Artistic Appreciation**: Developed a deeper understanding and appreciation for art, translating the beauty of Hokusai's works into a digital platform.
- **User Experience Design**: Honed skills in user experience design, focusing on creating an interactive and immersive gallery experience for users.`,
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
    description: `
    ### Project Overview 🌟
  - **Promoting CypherQueenz**: Developed a dynamic platform to promote CypherQueenz, a vibrant Bgirl collective, highlighting the pivotal role of females in the Hip Hop scene.
  - **Astro.js-Powered**: Leveraged the capabilities of Astro.js to create a modern and dynamic platform that embodies the latest web development aesthetics and best practices.

### Features and Functionalities 🛠️
  - **Sanity.io CMS Integration**: Integrated with Sanity.io's CMS to facilitate seamless content management, allowing for the easy update and maintenance of the site's content.
  - **Diverse Content Showcase**: Designed the platform to showcase a rich array of content including events, blogs, and galleries, offering a comprehensive view of the collective's activities and contributions to the Hip Hop community.

### Design and Performance 🖥️
  - **Optimal Performance**: Ensured the platform operates at peak performance, offering fast load times and a smooth user experience.
  - **User Engagement**: Focused on fostering user engagement by adopting modern web development aesthetics and adhering to best practices, creating a site that is both visually appealing and user-friendly.

## Outcome 🚀
- **Positive Reception**: The platform has been well-received, effectively promoting the vibrant Bgirl collective and highlighting the significant role of females in the Hip Hop industry.
- **Showcasing CypherQueenz**: Successfully created a space where the collective's events, blogs, and galleries are showcased, offering a vibrant and interactive platform for fans and newcomers alike.

## Skills Honed 🛡️
- **Technical Skills**: Enhanced technical proficiency by working with Astro.js and Sanity.io, gaining hands-on experience in modern web development practices.
- **Design Skills**: Developed a keen eye for design, creating a platform that embodies modern aesthetics while promoting user engagement.
- **Content Management**: Gained experience in content management through the integration with Sanity.io's CMS, learning to create a seamless content update and maintenance process.`,
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
    description: `
    ### The Game Idea 🤩
  - **Climb the Corporate Ladder**: Step into the shoes of a Mailroom Clerk and navigate through a series of quirky and humorous scenarios with the ultimate goal of becoming the Chairman of the Board.
  - **Tongue-in-Cheek Humor**: Enjoy a light-hearted and funny take on the corporate world, bringing smiles and laughter to players.

### Gameplay Experience 🕹️
  - **Scenario-Based**: Engage in a variety of scenarios that test your wit and decision-making skills as you climb the corporate ladder, one rung at a time.
  - **Humorous Take**: Dive into a game that doesn't take itself too seriously, offering a humorous perspective on corporate life.

### Why Play? 🎉
  - **Fun and Relaxation**: Take a break from the daily grind and have a good laugh as you navigate the whimsical corporate world depicted in the game.
  - **Play Now**: Ready for a dose of fun? [Play now](#) for a delightful and humorous take on the corporate world!

## Skills Showcased 🌟
- **Creative Storytelling**: Showcased my knack for crafting engaging and funny narratives, bringing a fresh and entertaining perspective to the corporate world.
- **Game Development**: Stepped into the exciting world of game development, learning and applying skills to create a fun web game experience.

`,
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
    description: `
### The Concept 🧠
  - **JoJo's Bizarre Adventure**: Created a fun web app dedicated to ranking Stands from the iconic anime series, leveraging my passion for the show to build something unique and engaging.
  - **User Engagement**: Designed with fans in mind, future iterations will include a platform where fans can interact and share their opinions on different Stands.

### The Build 🛠️
  - **T3 Stack**: Took full advantage of the T3 Stack (TypeScript, tRPC, and Tailwind) to build a responsive and dynamic web app.
  - **Next.js**: Utilized the power of Next.js to bring the concept to life, ensuring a smooth user experience with fast load times.

### Backend Magic 🎩
  - **MySQL and Prisma**: Set up a robust backend using MySQL for data persistence, with Prisma serving as the ORM, ensuring seamless database interactions and secure data storage.

## The Outcome 🚀
- **Learning Experience**: Gained a deeper understanding of the T3 Stack and Next.js, enhancing my skill set and opening up new possibilities for future projects.
- **Community Engagement**: Built a space for the JoJo's Bizarre Adventure community to engage and share their perspectives, fostering a vibrant and interactive platform.

## Skills Honed 🛡️
- **Technical Skills**: Enhanced my technical toolkit, getting hands-on experience with the T3 Stack and Next.js.
- **Community Building**: Learned the ropes of building a community-centric app, focusing on user engagement and interaction.
- **Backend Development**: Developed a strong understanding of backend development, working with MySQL and Prisma to set up a reliable and efficient database system.`,
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
  {
    title: "DreamBox Learning Insights Dashboard - Growth Report",
    type: "Web App",
    description: `
## Responsibilities and Achievements

### Collaboration with Cross-Functional Team
  - Played a pivotal role in the front-end development of the Growth Report feature, working closely with a cross-functional team over a period spanning from May 2021 to February 2023.
  - Engaged in collaborative efforts to build and refine UI components, ensuring the project aligned with both user requirements and technical specifications.

### UI Components Development
  - Leveraged expertise in Angular, JavaScript, and TypeScript to develop dynamic and responsive UI components.
  - Utilized HTML and SCSS to enhance the user interface, focusing on creating a user-friendly and aesthetically pleasing experience.

### Technology Stack
  - **Angular**: Employed Angular frameworks to build robust front-end solutions.
  - **JavaScript and TypeScript**: Utilized these programming languages to implement interactive and dynamic functionalities in the Growth Report feature.
  - **HTML**: Used HTML to structure the web content effectively, laying a solid foundation for the user interface.
  - **SCSS**: Leveraged SCSS to style the web content, ensuring a modern and cohesive design.

## Outcome
- Successfully met user requirements and technical specifications through meticulous attention to detail at various stages of the software development lifecycle.
- Contributed to a feature that facilitated growth reporting, enhancing the company's ability to track and analyze growth metrics effectively.

## Skills Developed
- **Technical Skills**: Enhanced proficiency in a range of technologies including Angular, JavaScript, TypeScript, HTML, and SCSS, gaining hands-on experience in front-end development.
- **Collaboration Skills**: Developed strong collaboration skills through continuous engagement with a cross-functional team, fostering a harmonious working relationship.
- **Problem-Solving Skills**: Honed problem-solving skills by ensuring the project met the necessary requirements and specifications through various stages of development.`,
    slug: "dreambox-growth-report",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "DreamBox Learning Insights Dashboard - Educator Usage Report",
    type: "Web App",
    description: `
## Responsibilities and Achievements

### Collaboration with Various Teams
  - Actively involved in the development of the Educator Usage Report section from May 2021 to February 2023.
  - Collaborated closely with different teams to create user-centric UI solutions, enhancing the feature's functionality through a continuous feedback loop.

### UI Solutions Development
  - Played a significant role in developing UI solutions that are centered around the user's needs and preferences.
  - Engaged in a continuous feedback loop, utilizing it to refine and enhance the functionality of the feature progressively.

### Technology Stack
  - **Angular**: Utilized Angular to build a robust and scalable front-end for the Educator Usage Report section.
  - **JavaScript**: Leveraged JavaScript to implement dynamic functionalities, enhancing the user experience and meeting project goals.

## Outcome
- Successfully collaborated with various teams to create a feature that is both user-centric and functional, meeting the project's objectives and enhancing the overall user experience.
- Actively participated in the feedback loop, ensuring the continuous improvement and refinement of the feature, leading to a product that meets the users' needs effectively.

## Skills Developed
- **Technical Skills**: Enhanced proficiency in Angular and JavaScript, gaining valuable experience in developing user-centric UI solutions.
- **Collaboration Skills**: Fostered a collaborative working environment through active engagement with various teams, developing a harmonious working relationship.
- **Feedback Integration**: Developed the skill of effectively integrating feedback into the development process, ensuring the creation of a feature that is both functional and user-friendly.
`,
    slug: "dreambox-educator-usage-report",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "DreamBox Learning Insights Dashboard - Predictive Insights Report",
    type: "Web App",
    description: `
## Responsibilities and Achievements

### Collaboration with Stakeholders
  - Engaged closely with stakeholders throughout all phases of the development cycle.
  - Facilitated meetings to gather requirements and feedback, ensuring the project aligned with stakeholder expectations.

### UI Components Development
  - Led the development and refinement of UI components, enhancing the user experience and meeting project goals.
  - Utilized a range of technologies including Angular and JavaScript to implement dynamic and responsive UI components.

### Technology Stack
  - **Angular**: Leveraged Angular frameworks to build robust and scalable front-end solutions.
  - **JavaScript**: Utilized JavaScript to create interactive and dynamic content, enhancing the functionality and user experience of the Predictive Insights feature.
  - **Other Technologies**: Integrated various other technologies to optimize the performance and functionality of the feature.

## Outcome
- We successfully launched the Predictive Insights feature, receiving positive feedback from stakeholders and end-users.
- Contributed to a feature that leveraged predictive analytics to provide valuable insights for end of the year performance on state testing, helping educators make informed decisions.

## Skills Developed
- **Technical Skills**: Enhanced proficiency in Angular and JavaScript, gaining hands-on experience in front-end development.
- **Collaboration Skills**: Developed strong collaboration skills through continuous engagement with stakeholders, fostering a harmonious working relationship.
- **Problem-Solving Skills**: Honed problem-solving skills by addressing and resolving issues during the development cycle, ensuring the successful implementation of the feature.
`,
    slug: "dreambox-predictive-insights",
    featured: false,
    tech: ["Angular", "JavaScript", "TypeScript", "HTML", "SCSS"],
    featuredTech: ["Angular", "JavaScript"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Internal ChatGPT Support App",
    type: "Web App",
    description: `
In 2023, I spearheaded the development of an internal proof-of-concept ChatGPT Support App during the Summer Fix.Build.Learn hackathon week, assuming the roles of lead developer and project manager. 
    
## Responsibilities and Achievements

### Collaboration with Stakeholders
  - Formulated and pitched the initial concept, successfully gathering a cross-functional team from various departments including Customer Support, Professional Development, and IT.
  - Maintained a collaborative approach by integrating stakeholder feedback throughout the development cycle, aiming to develop a tool beneficial to both new and tenured employees.

### App Development and Management
  - Led the development of the ChatGPT Support App, overseeing every stage from conceptualization to presentation.
  - Ensured the creation of comprehensive documentation that outlined the project's goals, technical requirements, and the roles of each team member.

### Technology Stack
  - **Azure OpenAI Studio**: Leveraged this platform to build the core of the web app, focusing on secure and efficient GPT-powered chatbot functionalities.
  - **Other Technologies**: Utilized a range of technologies to facilitate the development process, ensuring a successful build within the hackathon timeframe.

## Outcome
- The project was well-received, showcasing its potential to streamline onboarding and provide self-serve information to employees, which led to the initiation of a successful pilot phase currently being undertaken by the company.
- Presented the finished product to company stakeholders, highlighting the app's potential in enhancing operational efficiency.

## Skills Developed
- **Technical Skills**: Gained hands-on experience in utilizing Azure OpenAI Studio for web app development, enhancing technical proficiency.
- **Collaboration Skills**: Fostered strong relationships through continuous engagement with stakeholders and cross-functional teams.
- **Problem-Solving Skills**: Demonstrated adept problem-solving skills by overseeing the QA testing phase to identify and rectify bugs, ensuring the app met all technical and user requirements.
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
    repoUrl: "",
  },
];

export default data;
