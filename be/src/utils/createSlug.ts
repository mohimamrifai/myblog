export function createSlug (title: string) {
    return title.toLowerCase().split(" ").join("-")
}