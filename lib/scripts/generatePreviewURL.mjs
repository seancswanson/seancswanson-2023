import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { getPlaiceholder } from "plaiceholder";
import toKebabCase from "../util.mjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname("../../" + "__filename");
async function generatePreviewURLs() {
  const inputFilePath = path.join(__dirname, "data/projects/art-project.json");
  const outputFilePath = path.join(__dirname, "art-project-base64-data.json");

  // Read the project data from the JSON file
  const artProjects = JSON.parse(await fs.readFile(inputFilePath, "utf-8"));

  const projectBase64Data = [];

  for (const project of artProjects) {
    const projectInfo = {
      title: project.title,
      slug: project.slug,
      media: {},
    };

    const mediaTypes = ["still_url"];

    for (const mediaType of mediaTypes) {
      if (project.media[mediaType]) {
        const mediaPath = path.join(
          __dirname,
          toKebabCase(project.media[mediaType]) + ".png"
        );

        // Log to ensure the file path is correct
        console.log(`Processing: ${mediaPath}`);

        try {
          const { base64 } = await getPlaiceholder(mediaPath);
          projectInfo.media[mediaType] = base64;
        } catch (error) {
          console.error(
            `Error generating placeholder for ${mediaPath}:`,
            error
          );
        }
      }
    }

    projectBase64Data.push(projectInfo);
  }

  // Write the base64 data to a JSON file
  await fs.writeFile(
    outputFilePath,
    JSON.stringify(projectBase64Data, null, 2)
  );

  console.log(
    "Base64 preview URLs generated and saved to art-project-base64-data.json"
  );
}

generatePreviewURLs().catch(console.error);
