import { Space_Grotesk } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";
const SpaceGrotesk = Space_Grotesk({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--skin-font" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
