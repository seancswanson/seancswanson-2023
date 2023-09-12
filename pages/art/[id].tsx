import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
import { toKebabCase } from "../../lib/util";
import artProjects, { ArtProject } from "../../data/projects/art-projects";
import Layout from "../../components/layout";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function ArtProjectComponent(project: { project: ArtProject }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const youtubeOpts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const parsedCreationDate = new Date(project.project.created_at);
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Art", href: "/art" },
          {
            title: project.project.title,
            href: `/art/${project.project.title}`,
          },
        ]}
      />
      <h1 className="relative mb-4 flex flex-col items-center gap-1 rounded-sm text-2xl md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
        <span className="block font-bold">{project.project.title}</span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>

      <div className="flex flex-col justify-between gap-2 font-bold sm:flex-row">
        {project.project.type === "youtube" ? (
          <div className="mx-auto">
            <YouTube
              videoId={project.project.media.youtube_id}
              opts={youtubeOpts}
            />
          </div>
        ) : project.project.type === "animation" ? (
          <>
            {/* Render still and animation */}
            <div className="flex basis-[50%] flex-col">
              <video
                className="rounded shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                controls
                src={project.project.media.animation_full}
              />
              <span className="mt-2 text-center text-xs uppercase opacity-75">
                Animation
              </span>
            </div>
            <div className="flex basis-[50%] flex-col">
              <Image
                src={`/art/${toKebabCase(project.project.title)}-still.webp`}
                width="500"
                height="500"
                alt={project.project.title}
                className="h-full w-full rounded-md object-cover object-center"
              />
              <span className="mt-2 text-center text-xs uppercase opacity-75">
                Still
              </span>
            </div>
          </>
        ) : (
          // Render only still image
          <div className="mx-auto basis-[50%]">
            <Image
              src={`/art/${toKebabCase(project.project.title)}-still.webp`}
              width="500"
              height="500"
              alt={project.project.title}
              className="h-full w-full rounded-md object-cover object-center"
            />
          </div>
        )}{" "}
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p>
          <b>
            <em>{project.project.title}</em>
          </b>
          , {parsedCreationDate.getFullYear()}
        </p>
        <p className="text-sm">{project.project.mediaCategory}</p>
        <div className="description mb-4">
          {project.project.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="tools mb-4">
          Tools used:
          <div className="flex flex-wrap gap-2">
            {project.project.tech.map((technology, index) => (
              <span key={index} className="rounded-sm border border-black px-3">
                {technology}
              </span>
            ))}
          </div>
        </div>
        {project.project.permalink ? (
          <a
            href={project.project.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-blue-500 underline"
          >
            View on{" "}
            {project.project.type === "youtube" ? "YouTube" : "Artstation"}
          </a>
        ) : null}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = artProjects.map((artwork) => ({
    params: { id: artwork.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artProjectsArr = artProjects;

  const project = artProjectsArr.filter(
    (artwork) => artwork.slug === params?.id
  )[0];

  return { props: { project }, revalidate: 1 };
};
