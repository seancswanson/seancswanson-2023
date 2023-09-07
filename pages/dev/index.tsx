import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import DevProjects, { DevProject } from "../../data/projects/dev-projects";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";

const Dev = () => {
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/dev"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Dev
        </Link>
      </div>
      <h1 className="mb-4 text-3xl">Web Development Projects</h1>

      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
        {DevProjects.map((project: DevProject, key: number) => (
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
