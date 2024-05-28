import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import YouTube from "react-youtube";
import { toKebabCase } from "../../lib/util";
import artProjects, { ArtProject } from "../../data/projects/art-projects";
import Layout from "../../components/layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useState } from "react";

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    stroke="white"
    style={{ transform: "translate(2px, -1px)" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="white"
      d="M6 4v16l12-8-12-8z"
    />
  </svg>
);

const PauseButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="white"
      strokeWidth={4}
      d="M14 5v14M6 5v14"
    />
  </svg>
);

export default function ArtProjectComponent(project: { project: ArtProject }) {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(true);

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

  const toggleMedia = () => {
    setShowAnimation(!showAnimation);
  };

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
      <h1 className="mb-8 rounded-sm text-center text-3xl font-bold">
        {project.project.title}
      </h1>

      <div className="flex flex-col items-center gap-2 font-bold">
        {project.project.type === "youtube" && (
          <div className="mx-auto overflow-hidden rounded-lg">
            <YouTube
              videoId={project.project.media.youtube_id}
              opts={youtubeOpts}
            />
          </div>
        )}

        {project.project.type === "animation" && (
          <>
            <div className="mb-4 flex items-center gap-2">
              <span>Still</span>
              <Toggle
                defaultChecked={showAnimation}
                icons={{
                  checked: <PlayButton />,
                  unchecked: <PauseButton />,
                }}
                aria-label="Toggle Preview Animation"
                onChange={toggleMedia}
              />
              <span>Animation</span>
            </div>
            <div className="relative flex min-h-[450px] max-w-md flex-col">
              <div
                className={`absolute min-w-[400px] translate-x-[-50%] transition-opacity duration-500 ease-in-out ${
                  showAnimation ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  className="min-h-[400px] rounded bg-black shadow-lg"
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
              <div
                className={`absolute min-w-[400px] translate-x-[-50%] transition-opacity duration-500 ease-in-out  ${
                  showAnimation ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={`/art/${toKebabCase(project.project.title)}-still.webp`}
                  width="500"
                  height="500"
                  alt={project.project.title}
                  placeholder="blur"
                  blurDataURL={project.project.media.blurDataURL}
                  className="h-full w-full rounded object-cover object-center"
                />
                <span className="mt-2 text-center text-xs uppercase opacity-75">
                  Still
                </span>
              </div>
            </div>
          </>
        )}

        {project.project.type !== "youtube" &&
          project.project.type !== "animation" && (
            <div className="mx-auto">
              <Image
                src={`/art/${toKebabCase(project.project.title)}-still.webp`}
                width="500"
                height="500"
                alt={project.project.title}
                placeholder="blur"
                blurDataURL={project.project.media.blurDataURL}
                className="h-full w-full rounded-md object-cover object-center"
              />
            </div>
          )}
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 text-xl shadow">
        <div>
          <p>
            <b>
              <em>{project.project.title}</em>
            </b>
            , {parsedCreationDate.getFullYear()}
          </p>
          <p className="text-[17px] text-slate-800">
            {project.project.mediaCategory}
          </p>
        </div>
        <div className="description">
          {project.project.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="tools">
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
            className="block text-xs text-blue-600 underline"
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
