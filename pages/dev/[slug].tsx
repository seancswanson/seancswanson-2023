import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import devProjects, { Project } from "../../data/projects/dev-projects";
import Link from "next/link";
import YouTube from "react-youtube";
import Layout from "../../components/layout";
import Image from "next/image";
function toKebabCase(title: string) {
  return title
    .replace(/[.,'!?]/g, "") // Remove punctuation
    .toLowerCase() // Convert to lowercase
    .trim() // Remove any leading or trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

export default function ArtProject(project: { project: Project }) {
  const router = useRouter();
  console.log(project);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const kebabTitle = toKebabCase(project.project.title);

  return (
    <Layout>
      <div className="breadcrumbs mb-2 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-150 hover:opacity-100">
        /{" "}
        <Link
          href="/dev"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Dev
        </Link>{" "}
        / {project.project.title}
      </div>
      <h1 className="relative mb-4 flex flex-col items-center gap-1 rounded-sm text-2xl md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
        <span className="block font-bold">{project.project.title}</span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>

      <div className="flex flex-col justify-between gap-2 font-bold sm:flex-row">
        <div className="basis-[50%]">
          <Image
            src={`/project_images/${kebabTitle}.png`}
            alt={project.project.title}
            width={400}
            height={400}
            className="h-full w-full rounded-md object-cover object-center"
          />
        </div>
        <div className="basis-[50%]">
          <Image
            src={`/project_images/${kebabTitle}-screenshot.png`}
            alt={project.project.title}
            width={400}
            height={400}
            className="h-full w-full rounded-md object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 p-6 shadow">
        <p>
          <b>
            <em>{project.project.title}</em>
          </b>
        </p>
        {project.project.description.split("\n").map((paragraph, index) => (
          <p key={index} className="">
            {paragraph}
          </p>
        ))}
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
        <a
          href={project.project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs text-blue-500 underline"
        >
          View Live App
        </a>
        <a
          href={project.project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs text-blue-500 underline"
        >
          View on GitHub
        </a>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = devProjects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devProjectsArr = devProjects;

  const project = devProjectsArr.filter(
    (project) => project.slug === params?.slug
  )[0];
  console.log(project);

  return { props: { project }, revalidate: 1 };
};
