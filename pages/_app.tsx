import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import PageTransition from "../components/PageTransition";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <div className="flex h-full flex-col items-center">
        <Component key={pageKey} {...pageProps} />
      </div>
    </AnimatePresence>
  );
}
