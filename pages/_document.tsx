import { Head, Html, Main, NextScript } from "next/document";
import bgCross from "../assets/bg-cross.png";
export default function Document() {
  return (
    <Html lang="en" className="h-screen">
      <Head />
      <body
        className={`h-full font-skin`}
      >
        <div className="overlay grain-overlay"></div>
        <div className="overlay marble-overlay"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
