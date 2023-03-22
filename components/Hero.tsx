import Image from "next/image";

import { useRef } from "react";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mediumIcon from "../assets/icons/medium.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import profilePicture from "../assets/me.webp";

export const Hero = () => {
  const profilePictureRef = useRef<HTMLImageElement>(null);
  console.log(profilePictureRef);
  return (
    <div className="mb-4 pb-8 border-b  flex flex-col-reverse justify-evenly gap-4 md:flex-row md:gap-12">
      <div className="flex w-full flex-col items-center justify-evenly rounded-lg border  border-slate-200 bg-off-white p-6 text-center shadow md:w-3/5 md:items-start md:text-left">
        <h1 className="mb-8 text-4xl font-bold text-gray-800 md:mb-4">Hi! I&apos;m Sean Swanson. 👋</h1>
        <p className="mb-8 text-xl text-gray-700 md:mb-4">I&apos;m a web developer, artist, and bboy based in Seattle, WA. My work is focused on creating novel, beautiful, and intuitive experiences for users.</p>
        <p className="mb-8 text-xl text-gray-700 md:mb-4">My diverse range of passions allow me to tackle most challenges in the software development life cycle, from design to DevOps, with a well-rounded and empathetic perspective.</p>
        <p className="mb-8 text-xl text-gray-700 md:mb-4">Currently, I&apos;m working as a Front-End Engineer at DreamBox Learning creating reports, data visualizations for educators.</p>
        <div className="flex items-center gap-3">
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#101;&#97;&#110;&#99;&#115;&#119;&#97;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" className="social-link email">
            <Image src={emailIcon} alt="Email Icon" width="32" height="32" className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://github.com/seanthaswan/" className="social-link github" aria-label="github link" title="github link">
            <Image src={githubIcon} alt="Github Icon" width="32" height="32" className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://medium.com/@seancswan" className="social-link medium" aria-label="medium link" title="medium link">
            <Image src={mediumIcon} alt="Medium Icon" width="32" height="32" className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://www.linkedin.com/in/seancswanson/" className="social-link linkedin" aria-label="linkedin link" title="linkedin link">
            <Image src={linkedinIcon} alt="LinkedIn Icon" width="32" height="32" className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://twitter.com/sean_sonofswan" className="social-link twitter" aria-label="twitter link" title="twitter link">
            <Image src={twitterIcon} alt="Twitter Icon" width="32" height="32" className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hover:opacity-90" />
          </a>
        </div>
      </div>
      <div className="grow-1 m-auto my-4 h-64 w-64 rounded-full border border-slate-200 bg-purple-200 shadow md:m-0 md:mb-0 md:h-full md:rounded-lg ">
        <Image priority src={profilePicture} ref={profilePictureRef} alt="Profile Picture of Sean" className="h-full w-full rounded-full object-cover object-[0px,-15px] md:rounded-lg md:object-center" />
      </div>
    </div>
  );
};
