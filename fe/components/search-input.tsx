import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchInput() {
  return (
    <div className="flex w-full max-w-md items-center space-x-2 mx-auto mt-5">
      <Input type="text" placeholder="Cari judul..." />
      <Button type="submit">Cari</Button>
    </div>
  );
}
