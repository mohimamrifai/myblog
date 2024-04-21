'use client'
import { BookCheck, CalendarCheck, Eye, ThumbsUp, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import SharesButton from "./share-button";
import { motion } from "framer-motion";

const articleContent = `Dalam era yang didorong oleh inovasi teknologi, perubahan terjadi dengan cepat. Seiring dengan perkembangan AI, IoT, dan teknologi lainnya, kita dapat mengantisipasi transformasi yang lebih besar di masa depan. Berikut adalah beberapa tren yang mungkin mendefinisikan perubahan teknologi di tahun-tahun mendatang.

## 1. Kecerdasan Buatan yang Lebih Lanjut

AI telah menjadi bagian tak terpisahkan dari kehidupan sehari-hari kita, tetapi kita baru melihat permulaannya. Di masa depan, AI akan menjadi lebih adaptif dan mampu memecahkan masalah yang lebih kompleks. Dengan pengembangan algoritma yang lebih canggih, kemampuan AI untuk memahami dan merespons lingkungan akan meningkat secara signifikan.

## 2. Revolusi IoT

Internet of Things (IoT) telah mengubah cara kita berinteraksi dengan lingkungan sekitar. Di masa depan, IoT akan semakin terintegrasi dalam kehidupan sehari-hari, mulai dari rumah pintar hingga kota pintar. Dengan lebih banyak perangkat terhubung, kita akan memiliki akses yang lebih besar ke data real-time untuk meningkatkan efisiensi dan kenyamanan.

## 3. Pengembangan Quantum Computing

Quantum computing memiliki potensi untuk merevolusi industri teknologi. Dengan kemampuannya untuk menyelesaikan masalah yang sulit secara eksponensial lebih cepat daripada komputer klasik, quantum computing akan membuka pintu untuk inovasi yang belum pernah terjadi sebelumnya dalam bidang seperti kriptografi, ilmu material, dan desain obat.

## 4. Privasi dan Keamanan Data
***

Dengan semakin banyaknya data yang dikumpulkan oleh perangkat terhubung, privasi dan keamanan data akan menjadi perhatian utama. Di masa depan, perlindungan data pribadi akan menjadi fokus utama dalam pengembangan teknologi. Inovasi dalam bidang keamanan cyber akan menjadi kunci untuk melindungi informasi sensitif dari ancaman yang berkembang.

Dalam mewujudkan potensi teknologi di masa depan, penting bagi kita untuk memastikan bahwa inovasi tersebut berlangsung dengan tanggung jawab dan memperhatikan dampaknya terhadap masyarakat secara keseluruhan. Dengan demikian, kita dapat menciptakan masa depan yang lebih cerah dan berkelanjutan bagi semua orang.
`;

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Article() {
  return (
    <motion.article variants={variants} initial="hidden" animate="visible" className="py-5">
      <Link href="/">
        <Badge className={cn("rounded bg-blue-500 dark:text-white mb-4 text-sm")}>Tech</Badge>
      </Link>
      <h1 className="text-3xl font-black lg:text-2xl">
        Tutorial javascript | Fetch data dengan library axios
      </h1>
      <div className="lg:flex gap-3">
        <div className="py-2 flex items-end gap-3 flex-wrap mt-3">
          <div className="flex items-end gap-1 text-sm text-slate-500 dark:text-slate-300">
            <BookCheck size={18} />
            <span>3 min</span>
          </div>
          <div className="flex items-end gap-1 text-sm text-slate-500 dark:text-slate-300">
            <Eye size={18} />
            <span>4k views</span>
          </div>
          <div className="flex items-end gap-1 text-sm text-slate-500 dark:text-slate-300">
            <ThumbsUp size={18} />
            <span>3.1k likes</span>
          </div>
        </div>
        <div className="mb-2 flex items-end gap-3">
          <div className="flex items-end gap-1 text-sm text-slate-500 dark:text-slate-300">
            <CalendarCheck size={18} />
            <span className="text-sm">sen, 17 jan 2024</span>
          </div>
          <div className="flex items-end gap-1 text-sm text-slate-500 dark:text-slate-300">
            <User size={18} />
            <span>imam rifai</span>
          </div>
        </div>
      </div>
      <ReactMarkdown className="lg:w-8/12 mt-5">{articleContent}</ReactMarkdown>
      <SharesButton />
    </motion.article>
  );
}
