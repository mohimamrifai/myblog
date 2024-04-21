"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { ModeToggle } from "./mode-toogle";

export default function NavLinks() {
  return (
    <NavigationMenu className="mx-auto mt-3">
      <NavigationMenuList className="flex items-center gap-3">
        {navLinks.map((link, index) => (
          <NavigationMenuItem key={index} className="text-base">
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink>{link.title}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
