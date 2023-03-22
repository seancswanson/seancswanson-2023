interface Props {
  post: Post;
}

interface Post {
  title: string;
  description: string;
  url: string;
  featuredOn: string;
  minToRead: string;
}

export const RecentBlogPost = ({ post }: Props) => {
  return (
    <div className="rounded border border-slate-200 bg-off-white p-4 shadow">
      <h3 className="text-xl font-bold text-slate-800">{post.title}</h3>
      <span className="text-sm italic tracking-tighter opacity-80">
        {post.featuredOn} | {post.minToRead} min read
      </span>
      <p className="mb-2 text-slate-800">{post.description}</p>
      <a href={post.url} className="font-bold text-blue-500">
        Read More
      </a>
    </div>
  );
};
