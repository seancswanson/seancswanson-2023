import Head from "next/head";
import sacrificePreview from "../assets/me-2.webp";
import { ArtProject } from "../components/ArtProject";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { RecentBlogPost } from "../components/RecentBlogPost";
import { WebDevProject } from "../components/WebDevProject";
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
      <main className="m-auto flex min-h-screen w-full  max-w-[1268px] flex-col justify-between px-6">
        <div className=" mx-auto  px-4 py-8">
          <Hero />
          <div className="mx-auto flex flex-col items-start px-4 py-8">
            <h2 className="mb-8 rounded border-4 border-double border-slate-800 bg-white p-2 text-3xl font-extrabold text-slate-800 shadow">Featured Projects</h2>
            <div className="flex justify-around gap-2">
              <div className="flex w-1/2 flex-col ">
                <h3 className="mb-6 self-start rounded bg-slate-800 px-2 text-2xl font-bold text-white shadow-lg">WebDev</h3>
                <WebDevProject
                  project={{
                    title: "Cypher Queenz",
                    description: "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
                    liveUrl: "https://www.cypherqueenz.com",
                    infoUrl: "https://www.cypherqueenz.com",
                  }}
                />
                <WebDevProject
                  project={{
                    title: "The Majesty of the 36 Views of Mt. Fuji",
                    description: "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
                    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
                    infoUrl: "https://osd-woodblocks-angular.pages.dev/home",
                  }}
                />
              </div>
              <div className="flex flex-col ">
                <h3 className="mb-6 self-start rounded bg-slate-800 px-2 text-2xl font-bold text-white shadow-lg">Art</h3>
                <ArtProject project={{ title: "Sacrifice", description: "", infoUrl: "/art/sacrifice", img: sacrificePreview }} />
              </div>
            </div>
            <div className="my-8 flex flex-col items-start gap-2">
              <h2 className="mb-4 rounded border-4 border-double border-slate-800 bg-white p-2 text-3xl font-extrabold text-slate-800 shadow">Recent Blog Posts</h2>
              <RecentBlogPost
                post={{
                  title: "5 reasons I became a web dev",
                  featuredOn: "Educative.io, Medium",
                  minToRead: "15",
                  description: "There are many reasons to become a web developer. Here are a few of mine! Spoiler Alert: Salary isn&apos;t everything.",
                  url: "/blog/5-reasons-I-became-a-web-dev",
                }}
              />
              <RecentBlogPost
                post={{
                  title: "Learn to code for social good: My philosophy as an artist & dev",
                  featuredOn: "Educative.io, Medium",
                  minToRead: "14",
                  description: "I share eight insights from my journey as a web developer which when combined make up a development philosophy that starts from embracing plot twists and creative solutions.",
                  url: "/blog/learn-to-code-for-social-good",
                }}
              />
            </div>
          </div>

          <div className="my-8">
            <h2 className="mb-4 text-2xl font-bold text-slate-800">Contact Me</h2>
            <p className="mb-4 text-slate-800">If you&apos;re interested in working with me or have any questions, please don&apos;t hesitate to get in touch. I&apos;m always open to new opportunities and collaborations.</p>
            <a href="#" className="btn btn-secondary rounded-full py-2 px-4 font-bold text-white">
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
