import Link from "next/link";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      {/* Create a Nextjs Link back to the home page */}
      <Link href="/">Home</Link>
      <h1>gPost: {router.query.id}</h1>
    </Layout>
  );
}
