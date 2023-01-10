import Image from "next/image";

import { useRef } from "react";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mediumIcon from "../assets/icons/medium.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import profilePicture from "../assets/me-2.webp";

export const Hero = () => {
  const profilePictureRef = useRef<HTMLImageElement>(null);
  console.log(profilePictureRef);
  return (
    <div className="mb-8 flex flex-col-reverse items-center justify-around gap-4 sm:flex-row sm:items-start sm:gap-12">
      <div className="flex basis-full flex-col items-center justify-evenly border border-black bg-white p-3 text-center md:basis-1/2 md:items-start md:text-left">
        {/* <Image src={profilePictureSq} ref={profilePictureRef} alt="Profile Picture of Sean" className="pixelated h-32 w-32 rounded-full border border-black object-cover object-center shadow-xl" /> */}
        <h1 className="mb-8 text-4xl font-bold text-gray-800 sm:mb-4">Hi! I&apos;m Sean Swanson. 👋</h1>
        <p className="mb-8 text-xl text-gray-700 sm:mb-4">I&apos;m a web developer, artist, and bboy based in Seattle, WA. My work is focused on creating beautiful and intuitive experiences for users.</p>
        <p className="mb-8 text-xl text-gray-700 sm:mb-4">My diverse range of passions allow me to challenges in the software development life cycle, from design to DevOps, with a well-rounded and empathetic perspective.</p>
        <p className="mb-8 text-xl text-gray-700 sm:mb-4">Currently, I&apos;m working as a Front-End Engineer at DreamBox Learning creating reports, data visualizations for educators.</p>
        <div className="flex gap-2 ">
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#101;&#97;&#110;&#99;&#115;&#119;&#97;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;" className="social-link email">
            <Image src={emailIcon} alt="Icon" width="32" height="32" className="opacity-60 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://github.com/seanthaswan/" className="social-link github" aria-label="github link" title="github link">
            <Image src={githubIcon} alt="Icon" width="32" height="32" className="opacity-60 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://medium.com/@seancswan" className="social-link medium" aria-label="medium link" title="medium link">
            <Image src={mediumIcon} alt="Icon" width="32" height="32" className="opacity-60 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://www.linkedin.com/in/seancswanson/" className="social-link linkedin" aria-label="linkedin link" title="linkedin link">
            <Image src={linkedinIcon} alt="Icon" width="32" height="32" className="opacity-60 transition-opacity hover:opacity-90" />
          </a>
          <a href="https://twitter.com/sean_sonofswan" className="social-link twitter" aria-label="twitter link" title="twitter link">
            <Image src={twitterIcon} alt="Icon" width="32" height="32" className="opacity-60 transition-opacity hover:opacity-90" />
          </a>
        </div>
      </div>
      <div className="mb-8 rounded-lg border border-black bg-purple-300 shadow-xl sm:mb-0">
        <Image src={profilePicture} ref={profilePictureRef} alt="Profile Picture of Sean" className="h-full w-full rounded-lg object-cover object-center" />
      </div>
    </div>
  );
};
