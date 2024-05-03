import React from "react";
import { Card } from "./ui/card";

export default function HeaderOverview({title, value}: {title: string, value: string | number}) {
  return (
    <Card className="p-5">
      <p>{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </Card>
  );
}
