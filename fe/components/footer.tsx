import React from "react";
import { navLinks } from "@/constant/constant";
import { categories } from "@/constant/constant";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mt-10 px-[10%] py-10 grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className="text-sm w-max hover:ms-1 transition-all duration-200"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
        {categories.map((category, index) => (
          <Link
            key={index}
            className="text-sm w-max hover:ms-1 transition-all duration-200"
            href={category.href}
          >
            {category.title}
          </Link>
        ))}
      </div>
      <p className="text-center py-5 text-sm">Build with &#x2764;&#xfe0f; @imamrifai</p>
    </div>
  );
}
