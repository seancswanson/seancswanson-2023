import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Swanson | Web Developer | Seattle, WA </title>
        <meta name="description" content="Portfolio for Sean Swanson | Web Developer | Seattle, WA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="m-auto flex min-h-screen w-full  max-w-[1268px] flex-col justify-between px-6">
        <div className=" mx-auto  px-4 py-8">
          <Hero />
          <div className="mx-auto px-4 py-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold text-gray-800">WebDev</h3>

                <div className="mb-8">
                  <h4 className="mt-4 text-xl font-bold text-gray-800">Cypher Queenz</h4>
                  <p className="mt-2 mb-4 text-gray-700">
                    Statically generated website built for local Bgirl organization. I used Astro with Tailwind CSS and integrated Sanity CMS for blog posts, media, and events. Optimized for performance and SEO from the beginning.
                  </p>
                  <a href="https://seanthaswan.github.io/chairman-of-the-board/" className="mr-2 rounded border-2 border-green-500 p-1 font-bold text-green-500">
                    View Live
                  </a>
                  <a href="https://seanthaswan.github.io/chairman-of-the-board/" className="font-bold text-blue-500">
                    Learn More
                  </a>
                </div>
                <div className="">
                  <h4 className="mt-4 text-xl font-bold text-gray-800">The Majesty of the 36 Views of Mt. Fuji</h4>
                  <p className="mt-2 mb-4 text-gray-700">An interactive tribute to Katsushika Hokusai utilizing modern web design techniques, Angular, and OpenSeadragon for ultra-smooth high-resolution gallery viewing.</p>
                  <a href="https://osd-woodblocks-angular.pages.dev/home" className="mr-2 rounded border-2 border-green-500 p-1 font-bold  text-green-500">
                    View Live
                  </a>
                  <a href="https://osd-woodblocks-angular.pages.dev/home" className="font-bold text-blue-500">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Art</h3>
                <div className="mb-8">
                  <h4 className="mt-4 text-xl font-bold italic text-gray-800">Sacrifice</h4>
                  <p className="mt-2 text-gray-700">A brief description of the art piece goes here.</p>
                  <a href="#" className="font-bold text-blue-500">
                    Learn More
                  </a>
                </div>
                <div>
                  <h4 className="mt-4 text-xl font-bold text-gray-800">Art 2</h4>
                  <p className="mt-2 text-gray-700">A brief description of the art piece goes here.</p>
                  <a href="#" className="font-bold text-blue-500">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="my-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">Recent Blog Posts</h2>
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Blog Post 1</h3>
                <p className="mb-2 text-gray-700">A brief description of the blog post goes here.</p>
                <a href="#" className="font-bold text-blue-500">
                  Read More
                </a>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">Blog Post 2</h3>
                <p className="mb-2 text-gray-700">A brief description of the blog post goes here.</p>
                <a href="#" className="font-bold text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact Me</h2>
            <p className="mb-4 text-gray-700">If you&apos;re interested in working with me or have any questions, please don&apos;t hesitate to get in touch. I&apos;m always open to new opportunities and collaborations.</p>
            <a href="#" className="btn btn-secondary rounded-full py-2 px-4 font-bold text-white">
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
