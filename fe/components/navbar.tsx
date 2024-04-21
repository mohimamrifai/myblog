import React from "react";
import NavLinks from "@/components/navlinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <Link href="/" className="text-3xl mt-10 font-extrabold text-center block w-max mx-auto">
        MyBlog
      </Link>
      <NavLinks />
    </header>
  );
}
