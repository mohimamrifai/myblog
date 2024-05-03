import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

// Tipe data Articles
export type Article = {
  id: string;
  title: string; // Diubah dari number menjadi string
  status: "draft" | "published";
};
