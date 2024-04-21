const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = {
  username: "imamrifai",
  email: "imam@gmail.com",
  password: "123456",
};

const categories = [
  {
    name: "News",
    slug: "news",
  },
  {
    name: "Tech",
    slug: "tech",
  },
];

const posts = [
  {
    title: "Artikel generate oleh seed 1",
    slug: "artikel-generate-oleh-seed-1",
    thumbnail: "#",
    excerpt: "Ini adalah cuplikan artikel pertama yang di-generate oleh seed.",
    published: true,
    body: "Isi artikel pertama yang di-generate oleh seed.",
    read_time: 5, // Waktu baca dalam menit
    views: 100,
    likes: 50,
    category_id: "a3ba2863-2cea-41e6-9e08-6764418326bc", // ID kategori yang sesuai
    author_id: "c7e756c9-4ba4-4969-ac37-1a4d4a9e4e00",
  },
  {
    title: "Artikel generate oleh seed 2",
    slug: "artikel-generate-oleh-seed-2",
    thumbnail: "#",
    excerpt: "Ini adalah cuplikan artikel kedua yang di-generate oleh seed.",
    category_id: "a3ba2863-2cea-41e6-9e08-6764418326bc", // ID kategori yang sesuai
    published: true,
    read_time: 7, // Waktu baca dalam menit
    views: 120,
    likes: 70,
    author_id: "c7e756c9-4ba4-4969-ac37-1a4d4a9e4e00",
    body: "Isi artikel kedua yang di-generate oleh seed.",
  },
  {
    title: "Artikel generate oleh seed 3",
    slug: "artikel-generate-oleh-seed-3",
    thumbnail: "#",
    excerpt: "Ini adalah cuplikan artikel ketiga yang di-generate oleh seed.",
    category_id: "a3ba2863-2cea-41e6-9e08-6764418326bc", // ID kategori yang sesuai
    published: false,
    read_time: 4, // Waktu baca dalam menit
    views: 80,
    likes: 40,
    author_id: "c7e756c9-4ba4-4969-ac37-1a4d4a9e4e00",
    body: "Isi artikel ketiga yang di-generate oleh seed.",
  },
];

async function run() {
  try {
    // step 1 : seed user
    // await prisma.user.create({
    //   data: user,
    // });

    // step 2 : seed category
    // await prisma.category.createMany({
    //   data: categories,
    // });

    // step 3 : seed post
    // await prisma.post.createMany({
    //   data: posts,
    // });
    prisma.$disconnect;
    return "Berhasil menambahkan data";
  } catch (error) {
    console.log(error);
    return "Gagal menambahkan data";
  }
}

run()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
