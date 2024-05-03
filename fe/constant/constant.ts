import { NavItem } from "@/types";

export const APP_NAME = process.env.APP_NAME;
export const navLinks = [
  {
    title: "Documentation",
    href: "/docs",
  },
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Register",
    href: "/register",
  },
];
export const categories = [
  {
    title: "News",
    href: "/?category=news",
    bg_color: "bg-red-500",
  },
  {
    title: "Tech",
    href: "/?category=tech",
    bg_color: "bg-blue-400",
  },
  {
    title: "Health",
    href: "/?category=health",
    bg_color: "bg-green-400",
  },
  {
    title: "Sports",
    href: "/?category=sports",
    bg_color: "bg-yellow-400",
  },
  {
    title: "Entertainment",
    href: "/?category=entertainment",
    bg_color: "bg-purple-400",
  },
  {
    title: "Science",
    href: "/?category=science",
    bg_color: "bg-indigo-400",
  },
  {
    title: "Business",
    href: "/?category=business",
    bg_color: "bg-orange-400",
  },
  {
    title: "Fashion",
    href: "/?category=fashion",
    bg_color: "bg-pink-400",
  },
  {
    title: "Food",
    href: "/?category=food",
    bg_color: "bg-yellow-500",
  },
  {
    title: "Travel",
    href: "/?category=travel",
    bg_color: "bg-blue-500",
  },
];

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Articles",
    href: "/dashboard/articles",
    icon: "newsPaper",
    label: "newsPaper",
  },
  {
    title: "Logout",
    href: "/",
    icon: "logout",
    label: "logout",
  },
];
