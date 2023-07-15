import { GetStaticProps } from "next";
import artProjects from "../../data/projects/art-projects";
import { Fragment } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import { ArtProjectProps, ArtProjectsProps, Project } from "../../lib/types";

const Art = () => {
  console.log(artProjects);
  return (
    <Layout>
      <h1>Art Page</h1>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
        {artProjects.data.map((project: Project, key: number) => (
          <Fragment key={key}>
            <ProjectTile
              isVideoThumbnail={!!project.cover.animation_preview}
              key={key}
              project={{
                title: project.title,
                type: project.type,
                description: project.description,
                liveUrl: project.permalink || "",
                infoUrl: `/art/${project.slug}`,
                media: project.cover.animation_preview
                  ? project.cover.animation_preview
                  : project.cover.still_url,
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

export default Art;
