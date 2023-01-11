import Image, { StaticImageData } from "next/image";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  description: string;
  infoUrl: string;
  img: StaticImageData;
}

export const ArtProject = ({ project }: Props) => {
  return (
    <div className="rounded  border border-slate-800 bg-white shadow">
      <Image src={project.img} alt="Github Icon" className="h-full w-full object-cover object-center" />
    </div>
  );
};
