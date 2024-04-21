export function calculateReadTime(body: string): number {
    // Estimasi kecepatan baca dalam kata per menit (wpm)
    const wordsPerMinute = 200; // Contoh: 200 kata per menit

    // Hitung jumlah kata dalam teks
    const wordCount = body.trim().split(/\s+/).length;

    // Hitung waktu baca dalam menit
    const readTimeInMinutes = wordCount / wordsPerMinute;

    // Kembalikan waktu baca, bulatkan ke atas
    return Number(Math.ceil(readTimeInMinutes))
}