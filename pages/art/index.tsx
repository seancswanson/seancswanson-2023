import { GetStaticProps } from "next";
import artProjects, { Project } from "../../data/projects/art-projects";
import { Fragment } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";

const Art = () => {
  console.log(artProjects);
  return (
    <Layout>
      <h1>Art Page</h1>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
        {artProjects.map((project: Project, key: number) => (
          <Fragment key={key}>
            <ProjectTile
              isVideoThumbnail={!!project.media.animation_preview}
              key={key}
              project={{
                title: project.title,
                type: project.type,
                description: project.description,
                liveUrl: project.permalink || "",
                infoUrl: `/art/${project.slug}`,
                media: project.media.animation_preview
                  ? project.media.animation_preview
                  : project.media.still_url,
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
