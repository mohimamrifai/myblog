export default function validateImage(file: any): boolean {
    const allowedMimeTypes: string[] = ["image/png", "image/webp", "image/jpeg"];
    // Memisahkan tipe mime menjadi tipe dan sub-tipe
    const [type, subType] = file.mimetype.split('/');

    // Memeriksa apakah tipe mime file adalah 'image' dan sub-tipe mime termasuk dalam daftar yang diperbolehkan
    const isValidMimeType = type === 'image' && allowedMimeTypes.includes(`${type}/${subType}`);

    return isValidMimeType;
}