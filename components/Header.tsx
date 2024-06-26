import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import swansongLogo from "../assets/swansong-logo-128.webp";
import upRightArrow from "../assets/icons/up-right-arrow.png";
import hamburger from "../assets/icons/hamburger.png";
import { useState } from "react";

const LogoAndName = () => (
  <Link href="/" className="flex h-full gap-4">
    <div className="w-16 m-auto rounded-full shadow-sm logo-container">
      <Image
        className="w-full rounded-full logo"
        src={swansongLogo}
        alt="Swansong Logo"
      />
    </div>
    <div className="flex flex-col name-container">
      <span className="block text-3xl font-extrabold name">Sean Swanson</span>
      <span className="flex items-center justify-start gap-2 italic name">
        Web Dev <span className="text-xs">❖</span> Helpful Human
      </span>
    </div>
  </Link>
);
interface LinkProps {
  href: string;
  number: string;
  title: string;
}

const LinkItem = ({ href, number, title }: LinkProps) => (
  <li className="w-full border-t border-slate-600 md:w-3/12">
    <Link href={href} className="flex flex-col group">
      <div className="flex items-center justify-between">
        <span>
          {number}
          <span className="px-2 font-extrabold">{title}</span>
        </span>
        <Image
          src={upRightArrow}
          width="15"
          height="15"
          alt="Arrow pointing up and to the right"
        />{" "}
      </div>
    </Link>
  </li>
);

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-full max-w-[1000px] flex-wrap items-start justify-between p-4 px-6 tracking-tighter md:pb-12">
      <LogoAndName />
      <button
        className="block pr-[6px] pt-[14px] text-lg md:hidden"
        onClick={handleMenuClick}
      >
        <Image src={hamburger} width="15" height="15" alt="menu icon" />
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 z-50 text-[20px] h-screen w-full bg-white  py-4 px-6`}
      >
        <div className="flex items-start justify-between w-full">
          <LogoAndName />
          <button className="p-2 text-lg" onClick={handleMenuClick}>
            &times;
          </button>
        </div>
        <ul className="flex flex-col justify-end gap-8 pt-2">
          <LinkItem href="/dev" number="001" title="Dev" />
          <LinkItem href="/art" number="002" title="Art" />
          <LinkItem href="/blog" number="003" title="Blog" />
          <li className="w-12">
            <Link href="/cv" className="flex flex-col group">
              <span className="self-center px-2 font-extrabold transition-all border-2 hocus:border-slate-6800 border-slate-600 hocus:bg-slate-800 hocus:text-white">
                CV
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <ul className="justify-end hidden gap-8 pt-2 md:flex">
        <LinkItem href="/dev" number="001" title="Dev" />
        <LinkItem href="/art" number="002" title="Art" />
        <LinkItem href="/blog" number="003" title="Blog" />
        <li className="w-12">
          <Link href="/cv" className="flex flex-col group">
            <span className="self-center px-2 font-extrabold transition-all border-2 border-slate-600 hocus:border-slate-800 hocus:bg-slate-800 hocus:text-white">
              CV
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
