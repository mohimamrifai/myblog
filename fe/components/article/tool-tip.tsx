import React from "react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import { FontBoldIcon } from "@radix-ui/react-icons";

type Props = {
  editor: Editor | null;
};

export default function ToolTip({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className="mb-2 flex space-x-2">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm">
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <FontBoldIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
