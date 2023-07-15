import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="m-auto w-full max-w-[1010px] px-6">{children}</main>
    </>
  );
}
