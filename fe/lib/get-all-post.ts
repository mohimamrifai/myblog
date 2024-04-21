export default async function getAllPost() {
    try {
        const res = await fetch(`http://localhost:8000/api/v1/posts`, {cache: "no-store"})
        const result = res.json()
        return result
    } catch (error) {
        console.log(error)
    }
}