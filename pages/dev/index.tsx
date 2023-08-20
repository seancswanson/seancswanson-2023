import { GetStaticProps } from "next";
import DevProjects, { Project } from "../../data/projects/dev-projects";
import { Fragment, useEffect, useState } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Link from "next/link";

const Dev = () => {
  const [filter, setFilter] = useState("all");
  const techOptionsForFilter = Array.from(
    new Set(
      DevProjects.map((project) => project.tech)
        .flat()
        .sort()
    )
  );

  const filteredDevProjects =
    filter === "all"
      ? DevProjects
      : DevProjects.filter((project) => {
          return project.tech.includes(filter);
        });
  console.log(techOptionsForFilter);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/Dev"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Dev
        </Link>
      </div>
      <h1 className="mb-4 text-3xl">Web Development Projects</h1>
      <h2 className="mb-2 text-xl">Filter by technology:</h2>
      <div className="mb-8 flex max-w-md flex-wrap gap-2">
        <button
          key={"all"}
          className={`${
            "all" === filter
              ? "bg-blue-500 font-bold text-white"
              : "bg-white font-semibold text-blue-500"
          } rounded-md border-2 border-blue-500 px-2 py-1 text-xs uppercase transition-all  hover:-translate-y-0.5 hover:bg-blue-200  hover:text-blue-800`}
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </button>
        {techOptionsForFilter.map((tech, key) => (
          <button
            key={key}
            className={`${
              tech === filter
                ? "bg-blue-500 font-bold text-white"
                : "bg-white font-semibold text-blue-500"
            } rounded-md border-2 border-blue-500 px-2 py-1 text-xs uppercase transition-all  hover:-translate-y-0.5 hover:bg-blue-200  hover:text-blue-800`}
            onClick={() => {
              setFilter(tech);
            }}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
        {filteredDevProjects.map((project: Project, key: number) => (
          <Fragment key={key}>
            <ProjectTile
              project={{
                title: project.title,
                type: "dev",
                description: project.description,
                liveUrl: project.liveUrl || "",
                infoUrl: `/dev/${project.slug}`,
                tech: project.tech,
                featuredTech: project.featuredTech,
              }}
            />
          </Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default Dev;
