export function toKebabCase(title: string) {
  return title
    .replace(/[.,'!?]/g, "") // Remove punctuation
    .toLowerCase() // Convert to lowercase
    .trim() // Remove any leading or trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
}
