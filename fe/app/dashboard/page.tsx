import HeaderOverview from "@/components/header-overview";
import React from "react";

export default function PageDashboard() {
  return (
    <div className="grid lg:grid-cols-4 gap-2 grid-cols-2">
      <HeaderOverview title="Total Articles" value={400} />
      <HeaderOverview title="Total My Articles" value={100} />
      <HeaderOverview title="Draft" value={20} />
      <HeaderOverview title="Total Likes" value={20000} />
    </div>
  );
}
