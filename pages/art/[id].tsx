import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import artProjects from "../../data/projects/art-projects.js";
import Link from "next/link";
import YouTube from "react-youtube";
import { ArtProjectProps } from "./types.js";

export default function ArtProject({ project }: ArtProjectProps) {
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
  return (
    <div className="align-center mx-auto flex max-w-screen-lg flex-col justify-center p-4">
      <Link href="/">Yoooo</Link>
      <div className="my-6 text-center text-4xl">{project.title}</div>
      <div className="mx-auto">
        {/* generate if image, show image, if animation_preview_url, show that */}
        {project.cover.animation_full ? (
          project.cover.animation_source === "youtube" ? (
            <YouTube
              videoId={project.cover.animation_full}
              opts={youtubeOpts}
            />
          ) : (
            <video
              className="mx-auto"
              autoPlay
              loop
              muted
              playsInline
              src={project.cover.animation_full}
            />
          )
        ) : (
          <img
            className="mx-auto"
            src={project.cover.still_url}
            alt={project.title}
          />
        )}
      </div>
      <div className="text-center">{project.description}</div>
      <div className="mt-6 flex justify-between">
        <div>{project.created_at}</div>
        <div>{project.updated_at}</div>
      </div>
      <div className="my-6 flex flex-wrap justify-center">
        {project.tech.map((technology, index) => (
          <span key={index} className="m-1 rounded-full bg-blue-200 px-3 py-1">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={project.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View on{" "}
          {project.cover.animation_source === "youtube"
            ? "YouTube"
            : "Artstation"}
        </a>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = artProjects.data.map((artwork) => ({
    params: { id: artwork.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artProjectsObj = artProjects.data;
  const project = artProjectsObj.find((artwork) => artwork.slug === params?.id);

  return { props: { project }, revalidate: 1 };
};
