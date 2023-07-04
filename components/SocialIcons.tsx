import Image from "next/image";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mediumIcon from "../assets/icons/medium.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import profilePicture from "../assets/me-v4.png";

export const SocialIcons = () => {
  return (
    <>
      <a
        href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#101;&#97;&#110;&#99;&#115;&#119;&#97;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
        className="social-link email"
      >
        <Image
          src={emailIcon}
          alt="Email Icon"
          width="32"
          height="32"
          className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hocus:opacity-90"
        />
      </a>
      <a
        href="https://github.com/seanthaswan/"
        className="social-link github"
        aria-label="github link"
        title="github link"
      >
        <Image
          src={githubIcon}
          alt="Github Icon"
          width="32"
          height="32"
          className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hocus:opacity-90"
        />
      </a>
      <a
        href="https://medium.com/@seancswan"
        className="social-link medium"
        aria-label="medium link"
        title="medium link"
      >
        <Image
          src={mediumIcon}
          alt="Medium Icon"
          width="32"
          height="32"
          className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hocus:opacity-90"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/seancswanson/"
        className="social-link linkedin"
        aria-label="linkedin link"
        title="linkedin link"
      >
        <Image
          src={linkedinIcon}
          alt="LinkedIn Icon"
          width="32"
          height="32"
          className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hocus:opacity-90"
        />
      </a>
      <a
        href="https://twitter.com/sean_sonofswan"
        className="social-link twitter"
        aria-label="twitter link"
        title="twitter link"
      >
        <Image
          src={twitterIcon}
          alt="Twitter Icon"
          width="32"
          height="32"
          className="fill-pink-800 stroke-pink-800 opacity-70 transition-opacity hocus:opacity-90"
        />
      </a>
    </>
  );
};
