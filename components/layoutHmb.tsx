import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function LayoutHmb({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Hello Cutie :)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Portfolio for Sean Swanson | Web Developer | Seattle, WA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main className="mb-4 h-full w-full max-w-[1010px] place-content-center">
        {children}
      </main>
    </>
  );
}
