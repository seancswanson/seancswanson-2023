import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import swansongLogo from "../assets/swansong-logo-128.webp";
import upRightArrow from "../assets/icons/up-right-arrow.png";
import hamburger from "../assets/icons/hamburger.png";
import { useState } from "react";

const LogoAndName = () => (
  <Link href="/" className="mb-4 flex h-full  gap-4  md:mb-0">
    <div className="logo-container m-auto w-16 rounded-full shadow-sm">
      <Image
        className="logo w-full rounded-full"
        src={swansongLogo}
        alt="Swansong Logo"
      />
    </div>
    <div className="name-container flex flex-col">
      <span className="name block text-3xl font-extrabold">Sean Swanson</span>
      <span className="name flex items-center justify-start gap-2 italic">
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
    <Link href={href} className="group flex flex-col">
      <div className="flex items-center justify-between">
        <span>
          {number}
          <span className="px-2 font-extrabold">{title}</span>
        </span>
        <Image src={upRightArrow} width="15" height="15" alt="up-right-arrow" />{" "}
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
    <div className="m-auto max-w-[1000px] px-6 pt-4 md:pb-12">
      <div className="header flex w-full flex-wrap items-start justify-between tracking-tighter">
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
          } absolute top-0 left-0 z-50 h-screen w-full bg-white  py-4 px-6`}
        >
          <div className="flex w-full items-start justify-between">
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
              <Link
                href="/Sean_Swanson_Resume_(Plain_Text)_-_April_2023.txt"
                className="group flex flex-col"
              >
                <span className="hocus:border-slate-6800 self-center border-2 border-slate-600 px-2 font-extrabold transition-all hocus:bg-slate-800 hocus:text-white">
                  CV
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="hidden justify-end gap-8 pt-2 md:flex">
          <LinkItem href="/dev" number="001" title="Dev" />
          <LinkItem href="/art" number="002" title="Art" />
          <LinkItem href="/blog" number="003" title="Blog" />
          <li className="w-12">
            <Link
              href="/Sean_Swanson_Resume_(Plain_Text)_-_April_2023.txt"
              className="group flex flex-col"
            >
              <span className="hocus:border-slate-6800 self-center border-2 border-slate-600 px-2 font-extrabold transition-all hocus:bg-slate-800 hocus:text-white">
                CV
              </span>
            </Link>
          </li>
        </ul>
      </div>{" "}
    </div>
  );
};
