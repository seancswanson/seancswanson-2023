import Head from "next/head";
import sacrificePreview from "../assets/art/sacrifice.webm";
import whenItFallsPreview from "../assets/art/when-it-falls.webm";
import { ArtProject } from "../components/ArtProject";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { RecentBlogPost } from "../components/RecentBlogPost";
import { WebDevProject } from "../components/WebDevProject";
import fuji from "../assets/project_images/fuji-sm.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Swanson | Web Developer | Seattle, WA </title>
        <meta name="description" content="Portfolio for Sean Swanson | Web Developer | Seattle, WA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="m-auto w-full max-w-[1268px] px-6">
        <Hero />
        <div className="py-8">
          <h2 className="mb-8 text-2xl font-extrabold">Featured Projects</h2>
          <div className="flex w-full flex-col gap-6 justify-evenly md:flex-row">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <h3 className="border p-2 text-2xl font-semibold  w-full text-center">WebDev</h3>
              <div className="flex  gap-6 justify-evenly">
                <WebDevProject project={{
                  title: "Cypher Queenz",
                  description: "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
                  liveUrl: "https://www.cypherqueenz.com",
                  infoUrl: "https://www.cypherqueenz.com",
                  media: fuji
                }} />
                <WebDevProject project={{
                  title: "The Majesty of the 36 Views of Mt. Fuji",
                  description: "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
                  liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
                  infoUrl: "https://osd-woodblocks-angular.pages.dev/home",
                  media: fuji
                }} />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <h3 className="border p-2 text-2xl font-semibold  w-full text-center">Art</h3>
              <div className="flex  gap-6 justify-evenly">
                <ArtProject project={{ title: "Sacrifice", description: "", infoUrl: "/art/sacrifice", media: sacrificePreview }} />
                <ArtProject project={{ title: "When It Falls", description: "", infoUrl: "/art/sacrifice", media: whenItFallsPreview }} />
              </div>
            </div>
          </div>
          <div className="my-8">
            <h2 className="mb-8 text-2xl font-bold">Recent Blog Posts</h2>
            <div className="flex flex-col gap-6">
              <RecentBlogPost post={{
                title: "5 reasons I became a web dev",
                featuredOn: "Educative.io, Medium",
                minToRead: "15",
                description: "There are many reasons to become a web developer. Here are a few of mine! Spoiler Alert: Salary isn't everything.",
                url: "/blog/5-reasons-I-became-a-web-dev",
              }} />
              <RecentBlogPost post={{
                title: "Learn to code for social good: My philosophy as an artist & dev",
                featuredOn: "Educative.io, Medium",
                minToRead: "14",
                description: "I share eight insights from my journey as a web developer which when combined make up a development philosophy that starts from embracing plot twists and creative solutions.",
                url: "/blog/learn-to-code-for-social-good",
              }} />
            </div>
          </div>
          <div className="my-8">
            <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
            <p className="mb-4">If you're interested in working with me or have any questions, please don't hesitate to get in touch. I'm always open to new opportunities and collaborations.</p>
            <a href="#" className="btn btn-secondary rounded-full py-2 px-4 font-bold text-white">Get in Touch</a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
