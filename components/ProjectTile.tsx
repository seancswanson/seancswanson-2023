import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import upRightArrowWhite from "../assets/icons/up-right-arrow-white.png";

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

function toKebabCase(title: string) {
  return title
    .replace(/[.,'!?]/g, "") // Remove punctuation
    .toLowerCase() // Convert to lowercase
    .trim() // Remove any leading or trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}

export const ProjectTile = ({ project, isVideoThumbnail }: Props) => {
  const kebabTitle = toKebabCase(project.title);

  return (
    <Link
      href={project.infoUrl}
      className="group relative grid h-auto max-w-[250px] grid-cols-1 grid-rows-[1fr] rounded-md shadow-md transition-shadow hocus:shadow-xl"
    >
      <div className="relative w-full rounded-md">
        {isVideoThumbnail ? (
          <video
            // @ts-ignore
            src={project.media}
            loop
            muted
            className="h-full w-full rounded-md object-cover object-center"
          />
        ) : (
          <Image
            src={project.media || `/project_images/${kebabTitle}.png`}
            width="250"
            height="250"
            alt={project.title}
            className="h-full w-full rounded-md object-cover object-center"
          />
        )}
        <div className="rounded-md opacity-0 shadow-md transition-opacity duration-75 group-hover:opacity-100">
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
