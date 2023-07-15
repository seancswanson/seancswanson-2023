import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { RecentBlogPost } from "../components/RecentBlogPost";
import { ProjectTile } from "../components/ProjectTile";
import fuji from "../assets/project_images/fuji-sm.png";
import ArtProjects from "../data/projects/art-projects";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Swanson | Web Developer | Seattle, WA </title>
        <meta
          name="description"
          content="Portfolio for Sean Swanson | Web Developer | Seattle, WA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <div className="py-8">
          <h2 className="mb-8 text-2xl font-extrabold">Featured Projects</h2>
          <div className="flex w-full flex-col justify-evenly gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h3 className="relative self-start rounded-sm p-2 text-center text-2xl font-bold">
                  <Link href="/dev">
                    WebDev
                    <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                      {" "}
                      001
                    </span>
                  </Link>
                </h3>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 md:grid-cols-4 md:grid-rows-1">
                <ProjectTile
                  project={{
                    title: "Cypher Queenz",
                    type: "web",
                    description:
                      "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
                    liveUrl: "https://www.cypherqueenz.com",
                    infoUrl: "https://www.cypherqueenz.com",
                    media: fuji.src,
                    tech: ["foo", "baz", "bar"],
                    featuredTech: ["apollo", "sanity", "SSG"],
                  }}
                />
                <ProjectTile
                  project={{
                    title: "The Majesty of the 36 Views of Mt. Fuji",
                    type: "web",
                    description:
                      "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
                    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
                    infoUrl: "https://osd-woodblocks-angular.pages.dev/home",
                    media: fuji.src,
                    tech: ["foo", "baz", "bar"],
                    featuredTech: ["fooScript", "bazScript", "barScript"],
                  }}
                />

                <ProjectTile
                  project={{
                    title: "OP-T3",
                    type: "web",
                    description:
                      "Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.",
                    liveUrl: "https://www.cypherqueenz.com",
                    infoUrl: "https://www.cypherqueenz.com",
                    media: fuji.src,
                    tech: ["foo", "baz", "bar"],
                    featuredTech: ["fooScript", "bazScript", "barScript"],
                  }}
                />
                <ProjectTile
                  project={{
                    title: "The Majesty of the 36 Views of Mt. Fuji",
                    type: "web",
                    description:
                      "An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.",
                    liveUrl: "https://osd-woodblocks-angular.pages.dev/home",
                    infoUrl: "https://osd-woodblocks-angular.pages.dev/home",
                    media: fuji.src,
                    tech: ["foo", "baz", "bar"],
                    featuredTech: ["fooScript", "bazScript", "barScript"],
                  }}
                />
              </div>
              <Link
                href="/dev"
                className="self-end border border-black px-2 text-sm opacity-50 transition-opacity hocus:opacity-100"
              >
                View all
              </Link>
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <div className="flex justify-between">
                <h3 className="relative self-start rounded-sm p-2 text-center text-2xl font-bold">
                  Art
                  <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                    {" "}
                    002
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
                {ArtProjects.filter((project) => project.featured).map(
                  (project, key) => (
                    <Fragment key={key}>
                      <ProjectTile
                        isVideoThumbnail={!!project.media.animation_preview}
                        key={key}
                        project={{
                          title: project.title,
                          type: project.type,
                          description: project.description,
                          liveUrl: project.permalink,
                          infoUrl: `/art/${project.slug}`,
                          media: project.media.animation_preview
                            ? project.media.animation_preview
                            : project.media.still_url,
                          tech: project.tech,
                          featuredTech: project.featuredTech,
                        }}
                      />
                    </Fragment>
                  )
                )}
              </div>
              <Link
                href="/art"
                className="self-end border border-black px-2 text-sm opacity-50 transition-opacity hocus:opacity-100"
              >
                View all
              </Link>
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <h3 className="relative self-start rounded-sm p-2 text-center text-2xl font-bold">
                Blog
                <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                  {" "}
                  003
                </span>
              </h3>{" "}
              <div className="flex flex-col gap-6">
                <RecentBlogPost
                  post={{
                    title: "5 reasons I became a web dev",
                    featuredOn: "Educative.io, Medium",
                    minToRead: "15",
                    description: `There are many reasons to become a web developer. Here are a few of mine! Spoiler Alert: Salary isn${String.fromCharCode(
                      39
                    )}t everything.`,
                    url: "/blog/5-reasons-I-became-a-web-dev",
                  }}
                />
                <RecentBlogPost
                  post={{
                    title:
                      "Learn to code for social good: My philosophy as an artist & dev",
                    featuredOn: "Educative.io, Medium",
                    minToRead: "14",
                    description:
                      "I share eight insights from my journey as a web developer which when combined make up a development philosophy that starts from embracing plot twists and creative solutions.",
                    url: "/blog/learn-to-code-for-social-good",
                  }}
                />
              </div>{" "}
            </div>
          </div>
          <div className="my-8">
            <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>
            <p className="mb-4">
              If you&apos;re interested in working with me or have any
              questions, please don&apos;t hesitate to get in touch. I&apos;m
              always open to new opportunities and collaborations.
            </p>
            <a
              href="#"
              className="btn btn-secondary rounded-full py-2 px-4 font-bold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
