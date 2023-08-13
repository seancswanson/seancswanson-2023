import { GetStaticProps } from "next";
import DevProjects, { Project } from "../../data/projects/dev-projects";
import { Fragment } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Link from "next/link";

const Dev = () => {
  console.log(DevProjects);
  return (
    <Layout>
      <div className="breadcrumbs mb-2 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/Dev"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Dev
        </Link>
      </div>
      <h1>Dev Page</h1>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
        {DevProjects.map((project: Project, key: number) => (
          <Fragment key={key}>
            <ProjectTile
              key={key}
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
