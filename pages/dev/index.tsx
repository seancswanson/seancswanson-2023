import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import DevProjects, { DevProject } from "../../data/projects/dev-projects";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Breadcrumbs from "../../components/Breadcrumbs";

const Dev = () => {
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Dev", href: "/dev" },
        ]}
      />
      <h1 className="mb-8 text-3xl font-bold">Web Development Projects</h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-8 md:grid-cols-3 md:grid-rows-1">
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
