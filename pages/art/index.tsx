import artProjects, { ArtProject } from "../../data/projects/art-projects";
import { Fragment } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Link from "next/link";
import { toKebabCase } from "../../lib/util";
import Breadcrumbs from "../../components/Breadcrumbs";

const Art = () => {
  artProjects;
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Art", href: "/art" },
        ]}
      />
      <h1 className="mb-8 text-3xl font-bold">Art Projects</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 justify-space-around sm:grid md:grid md:grid-cols-3 md:grid-rows-1">
        {artProjects.map((project: ArtProject, key: number) => (
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
                  : project.media.still_url
                  ? project.media.still_url
                  : `/art/${toKebabCase(project.title)}-still.webp`,
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
