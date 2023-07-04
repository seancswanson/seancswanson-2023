import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TechPill } from "./techPill";
import upRightArrow from "../assets/icons/up-right-arrow.png";
import { Fragment } from "react";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  infoUrl: string;
  tech: string[];
  featuredTech: string[];
  media: string | StaticImageData;
}

export const WebDevProject = ({ project }: Props) => {
  return (
    <Link
      href={project.infoUrl}
      className="group relative block h-auto max-w-[250px]"
    >
      <div className="relative mb-2 w-full rounded border border-slate-800 bg-off-white shadow transition-shadow hocus:shadow-md">
        <Image
          src={project.media}
          width="250"
          height="250"
          alt="project.title"
          className="h-full w-full object-cover object-center"
        />
        <div className="opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          <div className="absolute bottom-[1px] flex h-1/2 w-full items-end justify-center gap-2 bg-gradient-to-t from-gray-800 to-transparent pb-2">
            {project.featuredTech.map((techName, key) => (
              <Fragment key={key}>
                <TechPill techName={techName} />
              </Fragment>
            ))}
          </div>
          <span className="absolute top-[2px] right-[2px] rounded-bl-sm border border-slate-800 bg-off-white text-xs font-extrabold">
            <Image
              src={upRightArrow}
              width="20"
              height="20"
              alt="up-right-arrow"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2 rounded-sm px-2 py-1 text-center text-sm font-bold capitalize text-gray-800 ">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};
