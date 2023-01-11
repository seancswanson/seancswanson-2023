import Image from "next/image";
import Link from "next/link";
import swansongLogo from "../assets/swansong-logo-128.webp";

export const Header = () => {
  return (
    <div className="m-auto mb-0 flex w-full max-w-[1280px] flex-wrap justify-center px-6  pt-10 tracking-tight md:mb-8 md:justify-between">
      <Link href="/" className="mb-12 flex h-full gap-4 md:mb-0">
        <div className="logo-container  rounded-full shadow-lg">
          <Image className="logo w-16 rounded-full" src={swansongLogo} alt="Swansong Logo" />
        </div>
        <div className="name-container flex-col">
          <span className="name block text-3xl font-extrabold">Sean Swanson</span>
          <span className="name flex items-center gap-2 italic">
            Web Dev <span className="text-xs">❖</span> Helpful Human
          </span>
        </div>
      </Link>
      <ul className="flex-0 flex w-full basis-full flex-col justify-end gap-8 md:basis-1/2 md:flex-row">
        <li className=" w-full border-t border-slate-600 md:w-3/12">
          <Link href="/" className="group flex flex-col">
            <div className="flex justify-between">
              <span>
                001
                <span className="px-2 font-extrabold">Dev</span>
              </span>
              <span className="font-extrabold">↗</span>
            </div>
            <p className="opacity-100 transition-opacity  group-hover:opacity-100 md:opacity-0">Client work, passion projects, & web experiments</p>
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
            <p className="opacity-100 transition-opacity  group-hover:opacity-100 md:opacity-0">3D modeling, mixed media, & music visualizations</p>
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
            <p className="opacity-100 transition-opacity group-hover:opacity-100 md:opacity-0">Capturing thoughts on philosophy and various topics in tech</p>
          </Link>
        </li>
        <li className="w-12">
          <Link href="/blog" className="group flex flex-col">
            <span className="self-center border-2 border-slate-600 px-2 font-extrabold">CV</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
