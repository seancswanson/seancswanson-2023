import Image from "next/image";
import Link from "next/link";
import swansongLogo from "../assets/swansong-logo-128.webp";

export const Header = () => {
  return (
    <div className=" m-auto mb-8 flex w-full max-w-[1280px] flex-wrap justify-center  px-6 pt-10 tracking-tight md:justify-between">
      <Link href="/" className="mb-12 flex h-full gap-4 md:mb-0">
        <div className="logo-container  rounded-full shadow-lg">
          <Image className="logo w-16 rounded-full" src={swansongLogo} alt="Swansong Logo" />
        </div>
        <div className="name-container flex-col">
          <span className="name block text-3xl">Sean Swanson</span>
          <span className="name flex items-center gap-2 italic">
            Web Dev <span className="text-xs">❖</span> Helpful Human
          </span>
        </div>
      </Link>
      <ul className="flex-0 flex w-full basis-full justify-end gap-8 md:basis-1/2">
        <li className=" basis-1/3 border-t border-black">
          <Link href="/" className="group flex flex-col">
            <div className="flex justify-between">
              <span>
                001
                <span className="px-2 font-extrabold">Dev</span>
              </span>
              <span className="font-extrabold">↗</span>
            </div>
            <p className="opacity-0 transition-opacity   group-hover:opacity-100">Client work, passion projects, & web experiments</p>
          </Link>
        </li>
        <li className=" basis-1/3 border-t border-black">
          <Link href="/about" className="group flex flex-col">
            <div className="flex justify-between">
              <span>
                002
                <span className="px-2 font-extrabold">Art</span>
              </span>
              <span className="font-extrabold">↗</span>
            </div>
            <p className="opacity-0 transition-opacity   group-hover:opacity-100">3D modeling, mixed media, & music visualizations</p>
          </Link>
        </li>
        <li className="basis-1/3 border-t border-black">
          <Link href="/blog" className="group flex flex-col">
            <div className="flex justify-between">
              <span>
                003
                <span className="px-2 font-extrabold">Blog</span>
              </span>
              <span className="font-extrabold">↗</span>
            </div>
            <p className="opacity-0 transition-opacity   group-hover:opacity-100">Capturing thoughts on philosophy and various topics in tech</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
