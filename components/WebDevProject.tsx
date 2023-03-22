import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  infoUrl: string;
  media: string | StaticImageData;
}

export const WebDevProject = ({ project }: Props) => {
  return (
    <Link href={project.infoUrl} className="group relative h-auto max-w-[250px] rounded border border-slate-800 bg-off-white shadow sm:w-1/2">
      <Image src={project.media} width="250" height="250" alt="project.title" className="h-full w-full object-cover object-center" />
      <span className="absolute top-[-1px] right-[-1px] rounded-bl-lg border border-slate-800 bg-off-white p-1 px-2 text-xs font-extrabold opacity-50 shadow-md group-hover:opacity-100">↗</span>
    </Link>

  );
};
