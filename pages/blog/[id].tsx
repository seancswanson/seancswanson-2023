import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import path from "path";
import Layout from "../../components/layout";
import styles from "./Post.module.css";

export default function Post({ markdown, data }: { markdown: any; data: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className="breadcrumbs mb-4 text-xs font-bold uppercase text-blue-500 opacity-50 transition-opacity duration-150 hover:opacity-100">
        /{" "}
        <Link
          href="/blog"
          className="border-b-2 border-transparent transition-all hover:border-blue-500"
        >
          Dev
        </Link>{" "}
        / {data.title}
      </div>
      <h1 className="relative mb-2 flex flex-col items-center gap-1 rounded-sm text-2xl md:flex-row md:gap-8">
        <div className="black-block h-[2px] w-full grow bg-black  md:w-[initial] "></div>
        <span className="block text-center font-bold md:text-start">
          {data.title}
        </span>
        <div className="black-block h-[2px] w-full grow bg-black md:w-[initial]"></div>
      </h1>
      <div className="mb-4 flex gap-2 text-sm">
        <span>{data.date}</span>
        <span>• {data.read_time} read time</span>
      </div>
      <div
        className={styles.markdownContent}
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </Layout>
  );
}
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        id: filename.replace(".mdx", ""),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "posts", `${params.id}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      markdown: contentHtml,
      data: data,
    },
  };
}
