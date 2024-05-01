import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  placeholder: string;
  htmlFor: string;
  type: "text" | "file" | "password" | "email";
  className: string;
};

export default function Field({
  label,
  placeholder,
  htmlFor,
  type,
  className,
}: FieldProps) {
  return (
    <div className={cn(className, "grid w-full max-w-sm items-center gap-1.5")}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input type={type} id={htmlFor} placeholder={placeholder} />
    </div>
  );
}
