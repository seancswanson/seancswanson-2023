import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-screen">
      <Head />
      <body className="h-full bg-[url('https://www.transparenttextures.com/patterns/brilliant.png')] font-skin">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
