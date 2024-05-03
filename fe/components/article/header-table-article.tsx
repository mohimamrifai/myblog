import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui/table";
import { Table, flexRender } from "@tanstack/react-table";
import { Article } from "@/types";

export default function HeaderTableArticle({table} : {table: Table<Article>}) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}
