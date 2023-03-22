import Link from "next/link";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  description: string;
  infoUrl: string;
  media: any;
}

export const ArtProject = ({ project }: Props) => {
  console.log(project);
  return (
    <Link href={project.infoUrl} className="group relative h-auto max-w-[250px] rounded border border-slate-800 bg-off-white shadow sm:w-1/2">
      <video src={project.media} autoPlay loop muted className="h-full w-full object-cover object-center" />
      <span className="absolute top-[-1px] right-[-1px] rounded-bl-lg border border-slate-800 bg-off-white p-1 px-2 text-xs font-extrabold opacity-50 shadow-md group-hover:opacity-100">↗</span>
    </Link>
  );
};
