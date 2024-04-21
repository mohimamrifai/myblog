"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/constant/constant";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function CategoryList() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <ScrollArea className="flex gap-2 whitespace-nowrap border-b px-1 pt-1 pb-2 lg:pb-0 mt-3 lg:w-max lg:mx-auto lg:border-b-0">
        <div className="flex gap-1 lg:mx-auto">
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Button asChild size="sm">
                <Link
                  className={cn(category.bg_color, "text-sm")}
                  href={category.href}
                >
                  {category.title}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </motion.div>
  );
}
