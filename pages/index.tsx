import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { toKebabCase } from "../lib/util";
import { getFeaturedPostsMetadata } from "../lib/posts";
import { DevProject } from "../data/projects/dev-projects";
import { ArtProject } from "../data/projects/art-projects";
import Layout from "../components/layout";
import { Hero } from "../components/Hero";
import { FeaturedBlogPost } from "../components/FeaturedBlogPost";
import { ProjectTile } from "../components/ProjectTile";
import upRightArrow from "../assets/icons/up-right-arrow.png";

export async function getStaticProps() {
  const DevProjects = (await import("../data/projects/dev-projects")).default;
  const ArtProjects = (await import("../data/projects/art-projects")).default;
  const BlogPosts = getFeaturedPostsMetadata();
  return {
    props: {
      DevProjects,
      ArtProjects,
      BlogPosts,
    },
  };
}

export default function Home({
  DevProjects,
  ArtProjects,
  BlogPosts,
}: {
  DevProjects: DevProject[];
  ArtProjects: ArtProject[];
  BlogPosts: any[];
}) {
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
                <h3
                  aria-label="Web Development Projects"
                  className="relative self-start rounded-sm p-2 text-center text-2xl font-bold"
                >
                  <Link href="/dev">
                    WebDev
                    <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                      {" "}
                      001
                    </span>
                  </Link>
                </h3>
              </div>
              <div className="mb-2 grid grid-cols-2 grid-rows-2 justify-items-center gap-4 md:grid-cols-4 md:grid-rows-1">
                {DevProjects.filter((project) => project.featured).map(
                  (project, key) => (
                    <Fragment key={key}>
                      <ProjectTile
                        aria-label="Project Detail Tile"
                        key={key}
                        project={{
                          title: project.title,
                          type: project.type,
                          description: project.description,
                          liveUrl: project.liveUrl,
                          infoUrl: `/dev/${project.slug}`,
                          tech: project.tech,
                          featuredTech: project.featuredTech,
                        }}
                      />
                    </Fragment>
                  )
                )}
              </div>
              <Link
                aria-label="View all Web Development Projects"
                href="/dev"
                className="group m-auto flex w-1/2 items-center justify-center gap-2 self-end  border-2  border-slate-600 p-2 px-2 text-sm  transition-all  duration-75 hocus:border-slate-800 hocus:bg-slate-800 hocus:text-white hocus:opacity-100 md:m-0 md:w-auto md:py-2"
              >
                View all{" "}
                <Image
                  src={upRightArrow}
                  className="group-hover:invert"
                  width="10"
                  height="10"
                  alt="Arrow pointing up and to the right"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <div className="flex justify-between">
                <h3
                  aria-label="Art Projects"
                  className="relative self-start rounded-sm p-2 text-center text-2xl font-bold"
                >
                  Art
                  <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                    {" "}
                    002
                  </span>
                </h3>
              </div>

              <div className="mb-2 grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
                {ArtProjects.filter((project) => project.featured)
                  .sort((a, b) => (a.title > b.title ? -1 : 1))
                  .map((project, key) => (
                    <Fragment key={key}>
                      <ProjectTile
                        aria-label="Project Detail Tile"
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
                            : project.media.still_url
                            ? project.media.still_url
                            : `/assets/art/${toKebabCase(
                                project.title
                              )}-still.webp`,
                          tech: project.tech,
                          featuredTech: project.featuredTech,
                        }}
                      />
                    </Fragment>
                  ))}
              </div>
              <Link
                href="/art"
                className="group m-auto flex w-1/2 items-center justify-center gap-2 self-end  border-2  border-slate-600 p-2 px-2 text-sm  transition-all  duration-75 hocus:border-slate-800 hocus:bg-slate-800 hocus:text-white hocus:opacity-100 md:m-0 md:w-auto md:py-2"
              >
                View all{" "}
                <Image
                  aria-label="View all Art Projects"
                  src={upRightArrow}
                  className="group-hover:invert"
                  width="10"
                  height="10"
                  alt="Arrow pointing up and to the right"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col gap-2 ">
              <h3
                aria-label="Blog Posts"
                className="relative self-start rounded-sm p-2 text-center text-2xl font-bold"
              >
                Blog
                <span className="absolute left-[-7px] top-[-7px] text-3xl font-normal tracking-tighter opacity-10">
                  {" "}
                  003
                </span>
              </h3>{" "}
              <div className="mb-2 flex flex-col gap-6">
                {BlogPosts.map((post, i) => (
                  <FeaturedBlogPost
                    key={i}
                    post={{
                      id: post.id,
                      title: post.title,
                      featuredOn: post.featuredOn,
                      read_time: post.read_time,
                      date: post.date,
                      description: post.description,
                      url: post.url,
                    }}
                  />
                ))}
              </div>{" "}
              <Link
                aria-label="View all Blog Posts"
                href="/blog"
                className="group m-auto flex w-1/2 items-center justify-center gap-2 self-end  border-2  border-slate-600 p-2 px-2 text-sm transition-all  duration-75 hocus:border-slate-800 hocus:bg-slate-800 hocus:text-white hocus:opacity-100 md:m-0 md:w-auto md:py-2"
              >
                View all{" "}
                <Image
                  src={upRightArrow}
                  className="group-hover:invert"
                  width="10"
                  height="10"
                  alt="Arrow pointing up and to the right"
                />
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
