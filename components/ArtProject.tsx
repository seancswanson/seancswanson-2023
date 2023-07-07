import Link from "next/link";
import ArtProjects from "../data/projects/art-projects.js";
interface Props {
  project: (typeof ArtProjects.data)[0];
}
import Image from "next/image";
import upRightArrow from "../assets/icons/up-right-arrow.png";

export const ArtProject = ({ project }: Props) => {
  return (
    <Link
      href={`/art/${project.slug}`}
      className="group relative h-auto max-w-[250px] rounded border border-slate-800 bg-off-white shadow sm:w-1/2"
    >
      <video
        src={project.cover.animation_url}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover object-center"
      />
      <span className="absolute top-[2px] right-[2px] rounded-bl-sm border border-slate-800 bg-off-white text-xs font-extrabold opacity-20 shadow-md transition-opacity group-hover:opacity-100">
        <Image src={upRightArrow} width="20" height="20" alt="up-right-arrow" />
      </span>
    </Link>
  );
};
