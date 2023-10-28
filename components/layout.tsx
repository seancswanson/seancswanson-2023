import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Sean Swanson | Web Developer | Seattle, WA </title>
        <meta
          name="description"
          content="Portfolio for Sean Swanson | Web Developer | Seattle, WA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mb-4 w-full max-w-[1010px] px-6">{children}</main>
      <Footer />
    </>
  );
}
