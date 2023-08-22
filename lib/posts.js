import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Assuming your markdown files are inside a folder named "posts"
const postsDirectory = path.join(process.cwd(), "data/posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get the id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // If date is a Date object, convert it to a string
    if (matterResult.data.date instanceof Date) {
      matterResult.data.date = matterResult.data.date.toISOString();
    }

    // Parse postData (you may need a library like 'gray-matter' to parse frontmatter)
    // Here's a simplified example:
    const postData = {
      id,
      ...matterResult.data, // This is just an example, use gray-matter in reality
    };

    return postData;
  });

  return allPostsData.sort((a, b) => {
    return new Date(a.date) < new Date(b.date) ? 1 : -1; // Sort by date
  });
}
export function getFeaturedPostsMetadata() {
  const data = getSortedPostsData();
  return data.filter((post) => post.featured);
}
