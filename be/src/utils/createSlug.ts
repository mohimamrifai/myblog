export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Removes characters that are not alphanumeric, space, or dash
    .replace(/\s+/g, "-") // Replace spaces with a dash
    .replace(/-+/g, "-") // Replace consecutive dashes with a single dash
    .replace(/^-|-$/g, ""); // Remove leading and trailing dashes
}
