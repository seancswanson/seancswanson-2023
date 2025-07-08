import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { SocialIcons } from "./SocialIcons";
import profilePicture from "../assets/me-v8.webp";

const HighlightedText = ({
  children,
  rotation,
}: {
  children: string;
  rotation: number;
}) => {
  return (
    <span className="relative inline-block px-2">
      <span
        className={`absolute inset-0 rounded-highlight bg-highlight-bg p-highlight opacity-90 rotate-[${rotation}deg]`}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export const Hero = () => {
  const profilePictureRef = useRef<HTMLImageElement>(null);
  const [rotations, setRotations] = useState<number[]>([]);
  useEffect(() => {
    const newRotations = Array.from({ length: 5 }, () => getRandomDegree());
    setRotations(newRotations);
  }, []);

  const getRandomDegree = () => Math.floor(Math.random() * 9) - 4;
  return (
    <div className="flex flex-col-reverse justify-between md:flex-row md:gap-2">
      <div className="flex flex-col items-center justify-between rounded-lg p-6 text-center md:basis-[50%] md:items-start md:text-left">
        <div className="flex flex-col grow">
          <h1 className="mb-8 text-2xl font-bold text-gray-800 md:mb-4">
            Hi! I&apos;m Sean Swanson. 👋
          </h1>
          <div className="flex flex-col text-lg basis-1/2 justify-evenly">
            <p className="relative mb-8 text-gray-900 md:mb-4">
              I&apos;m a{" "}
              <HighlightedText key={0} rotation={rotations[0]}>
                web developer
              </HighlightedText>
              ,{" "}
              <HighlightedText key={1} rotation={rotations[1]}>
                artist
              </HighlightedText>
              , and{" "}
              <HighlightedText key={2} rotation={rotations[2]}>
                dancer
              </HighlightedText>
              based in Seattle, WA. 
            </p>
            <p className="mb-8 text-gray-900 md:mb-4">
I'm passionate about stories: telling them, discovering them, and helping others share theirs through code, design, and digital experiences. Whether I'm building interactive web applications, crafting user journeys, or collaborating across teams, I approach every project as an opportunity to connect people through meaningful narratives.
            </p>
            <p className="relative mb-8 text-gray-900 md:mb-4">
              Currently, I&apos;m the{" "}
              <HighlightedText key={3} rotation={rotations[3]}>
                Website/Digital Marketing Manager
              </HighlightedText>
              at <span className="whitespace-nowrap">Discovery Education</span>, where I lead cross-functional projects related to our marketing websites. From ideation to execution, project management to DevOps, I tackle challenges throughout the development life cycle with a well-rounded and empathetic perspective.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <SocialIcons />
        </div>
      </div>
      <div className="m-auto my-4 h-64 w-64 rounded-full border border-slate-200 shadow-inner md:m-0 md:h-[initial] md:basis-[50%] md:rounded-lg md:border-0 md:shadow">
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
