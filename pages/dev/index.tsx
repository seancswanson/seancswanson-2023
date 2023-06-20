import Head from "next/head";
import { Header } from "../../components/Header";

export default function Dev() {
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
      <main className="m-auto w-full max-w-[960px] px-6">Dev Page</main>
    </>
  );
}
