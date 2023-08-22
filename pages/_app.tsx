import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full flex-col items-center">
      <Component {...pageProps} />
    </div>
  );
}
