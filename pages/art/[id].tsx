import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import artProjects, { Project } from "../../data/projects/art-projects";
import Link from "next/link";
import YouTube from "react-youtube";
import Layout from "../../components/layout";
export default function ArtProject(project: { project: Project }) {
  const router = useRouter();
  console.log(project);
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

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const parsedCreationDate = new Date(project.project.created_at);
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity hover:opacity-100">
        /{" "}
        <Link
          href="/art"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Art
        </Link>{" "}
        / {project.project.title}
      </div>
      <h1 className="relative self-start rounded-sm text-2xl font-bold">
        {project.project.title}
      </h1>
      <div className="info-row">
        <span className="text-sm">
          Published:{" "}
          {`${
            month[parsedCreationDate.getMonth()]
          } ${parsedCreationDate.getFullYear()}`}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        {project.project.type === "youtube" ? (
          <YouTube
            videoId={project.project.media.youtube_id}
            opts={youtubeOpts}
          />
        ) : project.project.type === "animation" ? (
          <>
            {/* Render still and animation */}
            <div className="flex basis-[50%] flex-col">
              <video
                className="mx-auto rounded shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                src={project.project.media.animation_full}
              />
              <span className="mt-2 text-center text-xs uppercase opacity-75">
                Animation
              </span>
            </div>
            <div className="flex basis-[50%] flex-col">
              <img
                className="mx-auto rounded shadow-lg"
                src={project.project.media.still_url}
                alt={project.project.title}
              />
              <span className="mt-2 text-center text-xs uppercase opacity-75">
                Still
              </span>
            </div>
          </>
        ) : (
          // Render only still image
          <div className="basis_[50%]">
            <img
              className="mx-auto rounded shadow-lg"
              src={project.project.media.still_url}
              alt={project.project.title}
            />
          </div>
        )}{" "}
      </div>

      <div className="mt-4 rounded-lg border-slate-200 p-6 shadow">
        {project.project.description}
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
      </div>

      <div className="mt-6 text-center">
        <a
          href={project.project.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View on{" "}
          {project.project.type === "youtube" ? "YouTube" : "Artstation"}
        </a>
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
  console.log(project);

  return { props: { project }, revalidate: 1 };
};
