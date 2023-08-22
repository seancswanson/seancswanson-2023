import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get the id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // If date is a Date object, convert it to a string
    if (matterResult.data.date instanceof Date) {
      matterResult.data.date = matterResult.data.date.toISOString();
    }

    // Parse postData
    const postData = {
      id,
      ...matterResult.data,
    };

    return postData;
  });

  return allPostsData.sort((a, b) => {
    return new Date(a.date) < new Date(b.date) ? 1 : -1;
  });
}

export function getFeaturedPostsMetadata() {
  const data = getSortedPostsData();
  return data.filter((post) => post.featured);
}
