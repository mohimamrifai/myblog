"use client";
import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "@/components/ui/table";
import { Article } from "@/types";
import { columns } from "./column";
import FilterArticle from "./article/filter-article";
import DropdownColumn from "./article/dropdown-column";
import HeaderTableArticle from "./article/header-table-article";
import BodyTableArticle from "./article/body-table-article";
import FooterArticle from "./article/footer-article";

// Data dummy untuk tipe data Articles
export const data: Article[] = [
  {
    id: "1",
    title: "Introduction to TypeScript",
    status: "published",
  },
  {
    id: "2",
    title: "React Hooks Tutorial",
    status: "draft",
  },
  {
    id: "3",
    title: "Node.js Best Practices",
    status: "published",
  },
];

export function ArticlesTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <FilterArticle table={table} />
        <DropdownColumn table={table} />
      </div>
      <div className="rounded-md border">
        <Table>
          <HeaderTableArticle table={table} />
          <BodyTableArticle table={table} />
        </Table>
      </div>
      <FooterArticle table={table} />
    </div>
  );
}
