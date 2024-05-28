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
      <h1 className="mb-8 rounded-sm text-center text-3xl font-bold">
        {project.project.title}
      </h1>

      <div className="mb-8 flex flex-col justify-between gap-2 font-bold sm:flex-row">
        <div className="basis-[50%]">
          <Image
            src={`/project-images/${kebabTitle}.png`}
            alt={project.project.title}
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={project.project.blurDataBase64}
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
            placeholder="blur"
            blurDataURL={project.project.blurDataBase64}
            className={`${
              project.project.slug === "living-worlds"
                ? "rendering-pixelated"
                : ""
            } h-full w-full rounded-md object-cover object-center shadow-sm`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center md:mb-8 md:flex-row md:gap-4">
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg p-6 ">
          <p className="text-xl font-bold">
            <span>{project.project.title}</span>
          </p>
          <p>{project.project.type}</p>
          <div className="tools">
            <div className="flex flex-wrap gap-2">
              {project.project.tech.map((technology, index) => (
                <span
                  key={index}
                  className="rounded-sm border border-black px-3"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {(project.project.liveUrl ||
          (project.project.infoUrl && project.project.infoUrl !== "#") ||
          project.project.repoUrl) && (
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <div className="links flex gap-2 md:flex-col">
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

              {project.project.infoUrl && project.project.infoUrl !== "#" && (
                <a
                  href={project.project.infoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-500 underline"
                >
                  <Image
                    alt="information icon"
                    src={infoIcon.src}
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
        )}
      </div>

      <div className="flex flex-col p-6">
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
