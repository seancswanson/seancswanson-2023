import Link from "next/link";

interface Props {
  post: Post;
}

interface Post {
  id: string;
  date: string;
  read_time: string;
  title: string;
  description: string;
  url: string;
  featuredOn: string;
}

export const FeaturedBlogPost = ({ post }: Props) => {
  return (
    <div
      key={post.id}
      className="rounded border border-slate-200 bg-off-white p-4 shadow "
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
  );
};
