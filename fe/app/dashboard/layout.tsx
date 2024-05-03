
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="lg:p-5">
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full lg:py-20 lg:px-10 p-3">{children}</main>
      </div>
    </main>
  );
}