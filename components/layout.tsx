import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mb-4 w-full max-w-[1010px] px-6">{children}</main>
      <Footer />
    </>
  );
}
