import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import devProjects, { DevProject } from "../../data/projects/dev-projects";
import globeIcon from "../../assets/icons/globe_icon.png";
import infoIcon from "../../assets/icons/info_icon.svg";
import githubIcon from "../../assets/icons/github_icon.png";
import { toKebabCase } from "../../lib/util";
import Markdown, { compiler } from "markdown-to-jsx";
import styles from "./Project.module.css";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function DevProjectComponent(project: { project: DevProject }) {
  const router = useRouter();
  project;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const kebabTitle = toKebabCase(project.project.title);

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Dev", href: "/dev" },
          {
            title: project.project.title,
            href: `/dev/${project.project.title}`,
          },
        ]}
      />
      <h1 className="relative mb-4 flex flex-col items-center gap-1 rounded-sm text-2xl md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
        <span className="block font-bold">{project.project.title}</span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>

      <div className="flex flex-col justify-between gap-2 font-bold sm:flex-row">
        <div className="basis-[50%]">
          <Image
            src={`/project-images/${kebabTitle}.png`}
            alt={project.project.title}
            width={400}
            height={400}
            className={`${
              project.project.slug === "living-worlds"
                ? "rendering-pixelated"
                : ""
            } h-full w-full rounded-md object-cover object-center shadow-sm`}
          />
        </div>
        <div className="basis-[50%]">
          <Image
            src={`/project-images/${kebabTitle}-screenshot.png`}
            alt={project.project.title}
            width={400}
            height={400}
            className={`${
              project.project.slug === "living-worlds"
                ? "rendering-pixelated"
                : ""
            } h-full w-full rounded-md object-cover object-center shadow-sm`}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-lg border border-slate-200 bg-[rgba(255,255,255,0.8)] p-6 shadow">
        <p className="font-bold italic">
          <span>{project.project.title}</span>
        </p>
        <p>{project.project.type}</p>
        <div className="tools mb-4">
          <div className="flex flex-wrap gap-2">
            {project.project.tech.map((technology, index) => (
              <span key={index} className="rounded-sm border border-black px-3">
                {technology}
              </span>
            ))}
          </div>
        </div>
        <div className=" mb-4">
          <Markdown
            options={{
              wrapper: ({ children }) => (
                <div className={styles.markdownContent}>{children}</div>
              ),
            }}
          >
            {project.project.description}
          </Markdown>
        </div>
        <div className="links flex flex-col gap-2">
          {project.project.liveUrl && (
            <a
              href={project.project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-500 underline"
            >
              <Image
                alt="globe icon"
                src={globeIcon.src}
                width={32}
                height={32}
              />{" "}
              View Live
            </a>
          )}

          {project.project.infoUrl && (
            <a
              href={project.project.infoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-500 underline"
            >
              <Image
                alt="information icon"
                src={infoIcon.src} // Make sure to define infoIcon
                width={32}
                height={32}
              />{" "}
              View Info
            </a>
          )}

          {project.project.repoUrl && (
            <a
              href={project.project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-500 underline"
            >
              <Image
                alt="github icon"
                src={githubIcon.src}
                width={32}
                height={32}
              />{" "}
              View Source
            </a>
          )}
        </div>
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
  project;

  return { props: { project }, revalidate: 1 };
};
