import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import swansongLogo from "../assets/swansong-logo-128.webp";

export const Header = () => {
  return (
    <div className="pb-12 md:pt-20">
      <div className="header m-auto flex w-full max-w-[960px] flex-wrap justify-center px-6  pt-7 tracking-tight md:justify-between ">
        <Link href="/" className="mb-8 flex h-full  gap-4  md:mb-0">
          <div className="logo-container m-auto w-16 rounded-full shadow-sm">
            <Image
              className="logo w-full rounded-full"
              src={swansongLogo}
              alt="Swansong Logo"
            />
          </div>
          <div className="name-container flex flex-col">
            <span className="name block text-3xl font-extrabold">
              Sean Swanson
            </span>
            <span className="name flex items-center justify-center gap-2 italic sm:justify-start">
              Web Dev <span className="text-xs">❖</span> Helpful Human
            </span>
          </div>
        </Link>
        <ul className="hidden justify-end gap-8 pt-2 md:flex md:basis-1/2 md:flex-row">
          <li className=" w-full border-t border-slate-600 md:w-3/12">
            <Link href="/dev" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  001
                  <span className="px-2 font-extrabold">Dev</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
            </Link>
          </li>
          <li className=" w-full border-t border-slate-600 md:w-3/12">
            <Link href="/about" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  002
                  <span className="px-2 font-extrabold">Art</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
            </Link>
          </li>
          <li className="w-full border-t border-slate-600 md:w-3/12">
            <Link href="/blog" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  003
                  <span className="px-2 font-extrabold">Blog</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
            </Link>
          </li>
          <li className="w-12">
            <Link
              href="/Sean_Swanson_Resume_(Plain_Text)_-_April_2023.txt"
              className="group flex flex-col"
            >
              <span className="hover:border-slate-6800 self-center border-2 border-slate-600 px-2 font-extrabold transition-all hover:bg-slate-800 hover:text-white">
                CV
              </span>
            </Link>
          </li>
        </ul>
        <ul className="flex-0 flex w-full basis-full justify-center gap-8 md:hidden">
          <li className="h-20 w-20 rounded-sm border border-slate-600 shadow-md">
            <Link
              href="/dev"
              className="group flex h-full flex-col justify-between p-1"
            >
              <div className="top flex justify-between">
                <span>001</span>
                <span className="font-extrabold">↗</span>
              </div>

              <div className="text-3xl font-extrabold">Dev</div>
            </Link>
          </li>
          <li className="h-20 w-20 rounded-sm border border-slate-600 shadow-md">
            <Link
              href="/"
              className="group flex h-full flex-col justify-between p-1"
            >
              <div className="top flex justify-between">
                <span>002</span>
                <span className="font-extrabold">↗</span>
              </div>

              <div className="text-3xl font-extrabold">Art</div>
            </Link>
          </li>
          <li className="h-20 w-20 rounded-sm border border-slate-600 shadow-md">
            <Link
              href="/"
              className="group flex h-full flex-col justify-between p-1"
            >
              <div className="top flex justify-between">
                <span>003</span>
                <span className="font-extrabold">↗</span>
              </div>

              <div className="text-3xl font-extrabold">Blog</div>
            </Link>
          </li>
          <li className="h-20 w-20 rounded-sm border-2 border-slate-600 px-2 shadow-md">
            <Link
              href="/Sean_Swanson_Resume_(Plain_Text)_-_April_2023.txt"
              className="group flex h-full justify-center p-1"
            >
              <span className="self-center  text-2xl font-extrabold">CV</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
