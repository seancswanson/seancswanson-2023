import { Head, Html, Main, NextScript } from "next/document";
import bgCross from "../assets/bg-cross.png";
export default function Document() {
  return (
    <Html lang="en" className="h-screen">
      <Head />
      <body
        className={`h-full bg-[url('https://www.transparenttextures.com/patterns/brilliant.png')] bg-[length:8px] bg-fixed font-skin`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
