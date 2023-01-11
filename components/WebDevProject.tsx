import Image from "next/image";
import Link from "next/link";
import sacrificePreview from "../assets/me-2.webp";

interface Props {
  project: Project;
}

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  infoUrl: string;
}

export const WebDevProject = ({ project }: Props) => {
  return (
    <div className=" mb-8 flex rounded  border border-slate-800 bg-white px-4 py-4 shadow">
      <div className="flex w-full flex-col justify-evenly  md:w-1/2 ">
        <h4 className="text-xl font-bold text-slate-800">{project.title}</h4>
        <p className="mt-2 mb-4 text-slate-800">{project.description}</p>
        <div className="flex items-center gap-4">
          <a href={project.liveUrl} className="mr-2 rounded border-2 border-green-500 p-1 font-bold text-green-500">
            View Live
          </a>
          <Link href={project.infoUrl} className="font-bold text-blue-500">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex h-full w-full items-center md:w-1/2">
        <Image src={sacrificePreview} alt="Github Icon" className="h-full w-full object-cover object-center" />
      </div>
    </div>
  );
};
