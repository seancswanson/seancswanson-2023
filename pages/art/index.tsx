import artProjects, { ArtProject } from "../../data/projects/art-projects";
import { Fragment } from "react";
import { ProjectTile } from "../../components/ProjectTile";
import Layout from "../../components/layout";
import Link from "next/link";
import { toKebabCase } from "../../lib/util";

const Art = () => {
  artProjects;
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/art"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Art
        </Link>
      </div>
      <h1 className="mb-4 text-3xl">Art Projects</h1>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-4 sm:grid md:grid md:grid-cols-4 md:grid-rows-1">
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
