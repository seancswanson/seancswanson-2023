import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import upRightArrowWhite from "../assets/icons/up-right-arrow-white.png";
import { toKebabCase } from "../lib/util";
import { useState } from "react";

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
  media?: any;
}

export const ProjectTile = ({ project, isVideoThumbnail }: Props) => {
  const [videoError, setVideoError] = useState(false);

  const kebabTitle = toKebabCase(project.title);

  return (
    <Link
      role="button"
      href={project.infoUrl}
      className="group relative grid h-auto grid-cols-1 grid-rows-[1fr] rounded shadow-md transition-shadow hocus:shadow-xl"
    >
      <div className="relative w-full rounded-md">
        {isVideoThumbnail ? (
          videoError ? (
            <Image
              src={`/art/${kebabTitle}-still.webp`}
              width="250"
              height="250"
              alt={project.title}
              className="object-cover object-center w-full h-full rounded-md"
            />
          ) : (
            <video
              // @ts-ignore
              src={project.media}
              loop
              muted
              playsInline
              autoPlay
              className="object-cover object-center w-full h-full rounded-md"
              onError={() => setVideoError(true)}
            />
          )
        ) : (
          <Image
            src={project.media || `/project-images/${kebabTitle}.png`}
            width="250"
            height="250"
            alt={project.title}
            className="object-cover object-center w-full h-full rounded-md"
          />
        )}
        <div className="transition-opacity duration-75 rounded-md shadow-md opacity-0 group-hover:opacity-100">
          <div className="absolute top-0 left-0 h-full w-full cursor-pointer rounded-md border border-slate-800 bg-[rgba(0,0,0,0.85)] text-3xl font-extrabold text-white">
            {project.title}
            <span className="inline-block ml-2">
              <Image
                src={upRightArrowWhite}
                width="20"
                height="20"
                alt="Arrow pointing up and to the right"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
