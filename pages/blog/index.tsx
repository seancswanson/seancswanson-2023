import Link from "next/link";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { FeaturedBlogPost } from "../../components/FeaturedBlogPost";
import Breadcrumbs from "../../components/Breadcrumbs";
const BlogPage = ({ data }: { data: any }) => {
  data;
  return (
    <Layout>
      <Breadcrumbs
        items={[
          { title: "Home", href: "/" },
          { title: "Blog", href: "/blog" },
        ]}
      />
      <h1 className="mb-4 text-3xl">Blog</h1>
      <div className="flex flex-col gap-6">
        {data.map((post: any) => (
          <FeaturedBlogPost key={post.id} post={post} />
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
