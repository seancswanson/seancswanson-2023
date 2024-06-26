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
  blurDataURL?: string;
}

export const ProjectTile = ({ project, isVideoThumbnail }: Props) => {
  const [videoError, setVideoError] = useState(false);

  const kebabTitle = toKebabCase(project.title);
  const blurDataBase64 = project.blurDataURL;
  const videoStyle = {
    backgroundImage: `url(${blurDataBase64})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

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
              src={`/art/${kebabTitle}-still.png`}
              width="250"
              height="250"
              placeholder="blur"
              blurDataURL={project.blurDataURL}
              alt={project.title}
              className="h-full w-full rounded-md object-cover object-center"
            />
          ) : (
            <video
              // @ts-ignore
              src={project.media}
              loop
              muted
              playsInline
              autoPlay
              style={videoStyle}
              className={`project-tile-video h-full w-full rounded-md  object-cover object-center`}
              onError={() => setVideoError(true)}
            />
          )
        ) : (
          <Image
            src={project.media || `/project-images/${kebabTitle}.png`}
            width="250"
            height="250"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            alt={project.title}
            className="h-full w-full rounded-md object-cover object-center"
          />
        )}
        <div className="rounded-md opacity-0 shadow-md transition-opacity duration-75 group-hover:opacity-100">
          <div className="absolute top-0 left-0 h-full w-full cursor-pointer rounded-md border border-slate-800 bg-[rgba(0,0,0,0.85)] text-3xl font-extrabold text-white">
            {project.title}
            <span className="ml-2 inline-block">
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
