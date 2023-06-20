import Image from "next/image";

import { useRef } from "react";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mediumIcon from "../assets/icons/medium.svg";
import twitterIcon from "../assets/icons/twitter.svg";
// import profilePicture from "../assets/me-v4.png";
import profilePicture from "../assets/me-v8.webp";
import { SocialIcons } from "./SocialIcons";

export const Hero = () => {
  const profilePictureRef = useRef<HTMLImageElement>(null);
  console.log(profilePictureRef);
  return (
    <div className="flex flex-col-reverse md:flex-row md:gap-2">
      <div className="flex w-full grow flex-col items-center justify-evenly rounded-lg   border-slate-200  p-6 text-center shadow md:w-3/5 md:items-start md:text-left">
        <h1 className="mb-8 text-2xl font-bold text-gray-800 md:mb-4">
          Hi! I&apos;m Sean Swanson. 👋
        </h1>
        <p className="relativew mb-8 text-lg text-gray-700 md:mb-4">
          I&apos;m a
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 rotate-[-1deg] rounded-highlight bg-highlight-bg p-highlight opacity-90"></span>
            <span className="relative z-10">
              web developer, artist, and bboy
            </span>
          </span>
          based in Seattle, WA. I love creating novel, beautiful, and intuitive
          experiences for users.
        </p>
        <p className="mb-8 text-lg text-gray-700 md:mb-4">
          My diverse range of passions allow me to tackle most challenges in the
          software development life cycle, from design to DevOps, with a
          well-rounded and empathetic perspective.
        </p>
        <p className="relative mb-8 text-lg text-gray-700 md:mb-4">
          Currently, I&apos;m the
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 rotate-1 rounded-highlight bg-highlight-bg p-highlight opacity-90"></span>
            <span className="relative z-10">
              Website/Digital Marketing Manager
            </span>
          </span>
          at <span className="whitespace-nowrap">DreamBox Learning</span>, using
          a blend of modern technologies and project management skills to
          increase brand visibility, optimize customer engagement, and ensure
          smooth execution of data-compliant, conversion-optimized web
          solutions.
        </p>
        <div className="flex items-center gap-3">
          <SocialIcons />
        </div>
      </div>
      <div className="m-auto my-4 h-64 w-64 rounded-full  border-slate-200 bg-purple-200 shadow md:m-0 md:mb-0 md:h-[initial] md:w-1/3 md:rounded-lg ">
        <Image
          priority
          src={profilePicture}
          ref={profilePictureRef}
          alt="Profile Picture of Sean"
          className="h-full w-full rounded-full object-cover object-[0px,-13px] md:rounded-lg md:object-left"
        />
      </div>
    </div>
  );
};
