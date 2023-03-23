import Image from "next/image";
import Link from "next/link";
import styles from './header.module.scss';
import swansongLogo from "../assets/swansong-logo-128.webp";

export const Header = () => {
  return (
    <div className="pb-8">
      <div className="header m-auto flex w-full max-w-[1280px] flex-wrap justify-center px-6  pt-7 tracking-tight md:justify-between ">
        <Link
          href="/"
          className="mb-12 flex h-full flex-col gap-4 sm:flex-row md:mb-0"
        >
          <div className="logo-container m-auto w-24 rounded-full shadow-lg sm:w-16">
            <Image
              className="logo w-full rounded-full"
              src={swansongLogo}
              alt="Swansong Logo"
            />
          </div>
          <div className="name-container flex-col">
            <span className="name block text-3xl font-extrabold">
              Sean Swanson
            </span>
            <span className="name flex items-center justify-center gap-2 italic sm:justify-start">
              Web Dev <span className="text-xs">❖</span> Helpful Human
            </span>
          </div>
        </Link>
        <ul className="hidden justify-end gap-8 md:flex md:basis-1/2 md:flex-row">
          <li className=" w-full border-t border-slate-600 md:w-3/12">
            <Link href="/" className="group flex flex-col">
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
            <Link href="/blog" className="group flex flex-col">
              <span className="self-center border-2 border-slate-600 hover:bg-slate-800 hover:border-slate-6800 hover:text-white transition-all px-2 font-extrabold">
                CV
              </span>
            </Link>
          </li>
        </ul>
        <ul className="flex-0 flex w-full basis-full flex-col justify-end gap-8 mb-8 md:hidden">
          <li className=" w-full border-t border-slate-600 ">
            <Link href="/" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  001
                  <span className="px-2 font-extrabold">Dev</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
              <p className="opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0">
                Client work, passion projects, & web experiments
              </p>
            </Link>
          </li>
          <li className=" w-full border-t border-slate-600 ">
            <Link href="/about" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  002
                  <span className="px-2 font-extrabold">Art</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
              <p className="opacity-100 transition-opacity  group-hover:opacity-100 md:opacity-0">
                3D modeling, mixed media, & music visualizations
              </p>
            </Link>
          </li>
          <li className="w-full border-t border-slate-600">
            <Link href="/blog" className="group flex flex-col">
              <div className="flex justify-between">
                <span>
                  003
                  <span className="px-2 font-extrabold">Blog</span>
                </span>
                <span className="font-extrabold">↗</span>
              </div>
              <p className="opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0">
                Capturing thoughts on philosophy and various topics in tech
              </p>
            </Link>
          </li>
          <li className="w-12">
            <Link href="/blog" className="group flex flex-col">
              <span className="self-center border-2 border-slate-600 px-2 font-extrabold">
                CV
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
