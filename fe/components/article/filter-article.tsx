import React from "react";
import { Input } from "../ui/input";
import { Table } from "@tanstack/react-table";
import { Article } from "@/types";

export default function FilterArticle({table} : {table: Table<Article>}) {
  return (
    <Input
      placeholder="Filter title..."
      value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("title")?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
}
