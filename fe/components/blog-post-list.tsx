'use client'
import React from "react";
import CardBlog from "./card-blog";
import { motion } from 'framer-motion' 
import { Post } from "@/lib/definitions";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5
    },
  },
};

export default function BlogPostList({datas} : {datas: Post[]}) {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="mt-3 grid lg:grid-cols-4 grid-cols-1 gap-3">
      {datas.map((post) => (
        <CardBlog key={post.id} data={post} />
      ))}
    </motion.div>
  );
}
