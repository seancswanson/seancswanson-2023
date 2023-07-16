const fs = require("fs");
const path = require("path");
const data = require("../data/projects/art-projects.ts");
console.log(data);
const markdownDir = path.join(__dirname, "/markdownFiles");
console.log(markdownDir);
// Ensure the directory exists
if (!fs.existsSync(markdownDir)) {
  fs.mkdirSync(markdownDir);
}

data.forEach((project, index) => {
  const {
    title,
    type,
    description,
    created_at,
    updated_at,
    slug,
    featured,
    published_at,
    hash_id,
    permalink,
    tech,
    featuredTech,
    media,
  } = project;

  let markdownContent = `---
title: "${title}"
type: "${type}"
created_at: "${created_at}"
updated_at: "${updated_at}"
slug: "${slug}"
featured: ${featured}
published_at: "${published_at}"
hash_id: "${hash_id}"
permalink: "${permalink}"
tech: [${tech.map((t) => `"${t}"`)}]
featuredTech: [${featuredTech.map((t) => `"${t}"`)}]
media: 
  still_url: "${media.still_url || ""}"
  animation_preview: "${media.animation_preview || ""}"
  animation_full: "${media.animation_full || ""}"
  youtube_id: "${media.youtube_id || ""}"
---

${description}`;

  fs.writeFileSync(
    path.join(markdownDir, `${slug}.md`),
    markdownContent,
    "utf8"
  );
});
