"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BookCheck,
  CalendarCheck,
  ChevronRight,
  Eye,
  ThumbsUp,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Post } from "@/lib/definitions";
import Image from "next/image";

const animate = {
  hidden: { opacity: 0, x: 20, y: 20 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};


export default function CardBlog({ data } : {data: Post}) {
  const thumbnail = `http://localhost:8000/api/v1/thumbnail/${data.thumbnail}`
  return (
    <motion.div
      variants={animate}
      className="border-gray-200 dark:border-gray-600 border-[1px] rounded-md shadow p-2"
    >
      <div className="h-40 w-full bg-slate-100 rounded grid place-items-center mb-3 overflow-hidden">
        <Image src={thumbnail} width={1000} height={1000} alt={data.title} className="w-full h-auto object-cover" />
      </div>
      <div className="px-2 mb-2 flex items-end gap-3 flex-wrap">
        <div className="flex items-end gap-1 text-xs text-slate-500 dark:text-slate-300">
          <BookCheck size={15} />
          <span>{data.read_time} min</span>
        </div>
        <div className="flex items-end gap-1 text-xs text-slate-500 dark:text-slate-300">
          <Eye size={15} />
          <span>{data.views} views</span>
        </div>
        <div className="flex items-end gap-1 text-xs text-slate-500 dark:text-slate-300">
          <ThumbsUp size={15} />
          <span>{data.likes} likes</span>
        </div>
      </div>
      <div className="px-2 mb-2 flex items-end gap-3">
        <div className="flex items-end gap-1 text-xs text-slate-500 dark:text-slate-300">
          <CalendarCheck size={15} />
          <span className="text-xs">{data.createdAt.slice(0, 10)}</span>
        </div>
        <div className="flex items-end gap-1 text-xs  text-slate-500 dark:text-slate-300">
          <User size={15} />
          <span>imam rifai</span>
        </div>
      </div>
      <Link
        href={`/post/${data.slug}`}
        className="font-semibold line-clamp-2 text-lg leading-6 px-2 mb-1"
      >
        {data.title}
      </Link>
      <p className="line-clamp-4 text-sm px-2 text-slate-500 dark:text-slate-300">
        {data.thumbnail}
      </p>
      <div className="flex justify-between items-center mt-2 ps-2 mb-1">
        <Link href="/">
          <Badge className={cn("rounded text-xs bg-blue-500 dark:text-white")}>{data.category.name}</Badge>
        </Link>
        <Link
          href={`/post/${data.slug}`}
          className="flex items-center text-sm px-2 font-medium justify-end pe-3 hover:pe-2 transition-all duration-200"
        >
          Read More
          <ChevronRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
