import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TechPill } from "./techPill";
import upRightArrowWhite from "../assets/icons/up-right-arrow-white.png";
import { Fragment } from "react";

interface Props {
  project: Project;
  isVideoThumbnail?: boolean;
}

interface Project {
  title: string;
  type: string;
  description: string;
  liveUrl: string;
  infoUrl: string;
  tech: string[];
  featuredTech: string[];
  media: string | StaticImageData;
}

export const ProjectTile = ({ project, isVideoThumbnail }: Props) => {
  return (
    <Link
      href={project.infoUrl}
      className="group relative grid h-auto max-w-[250px] grid-cols-1 grid-rows-[1fr] shadow-md transition-shadow hocus:shadow-xl"
    >
      <div className="relative w-full rounded-md bg-off-white ">
        {isVideoThumbnail ? (
          <video
            src={project.media}
            autoPlay
            loop
            muted
            className="h-full w-full rounded-md object-cover object-center"
          />
        ) : (
          <Image
            src={project.media}
            width="250"
            height="250"
            alt="project.title"
            className="h-full w-full rounded-md object-cover object-center"
          />
        )}
        <div className="opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          <div className="absolute top-0 left-0 h-full w-full cursor-pointer rounded-md border border-slate-800 bg-[rgba(0,0,0,0.85)] text-4xl font-extrabold text-white">
            {project.title}
            <span className="ml-2 inline-block">
              <Image
                src={upRightArrowWhite}
                width="20"
                height="20"
                alt="up-right-arrow"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
