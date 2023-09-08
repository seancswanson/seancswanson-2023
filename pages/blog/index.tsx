import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

const BlogPage = ({ data }: { data: any }) => {
  data;
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-75 hover:opacity-100">
        /{" "}
        <Link
          href="/art"
          className=" border-b-2  border-transparent transition-all hover:border-blue-500"
        >
          Blog
        </Link>
      </div>
      <h1 className="mb-4 text-3xl">Blog</h1>
      <div className="flex flex-col gap-6">
        {data.map((post: any) => (
          <div
            key={post.id}
            className="rounded border border-slate-200 bg-[rgba(255,255,255,0.8)] p-4 shadow "
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className="mb-3 text-2xl font-bold hover:underline">
                {post.title}
              </h2>
              <p className="mb-3 text-gray-600">{post.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.read_time}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  allPostsData;
  return {
    props: {
      data: allPostsData,
    },
  };
}

export default BlogPage;
