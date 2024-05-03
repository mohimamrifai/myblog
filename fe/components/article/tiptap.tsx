"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolTip from "./tool-tip";

const Tiptap = ({
  body,
  onChange,
}: {
  body: string;
  onChange: (rictText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: body,
    editorProps: {
        attributes: {
            class: "border-none outline-none min-h-[300px]"
        }
    },
    onUpdate({editor}){
        onChange(editor.getHTML())
    }
  });

  return (
    <div>
      <ToolTip editor={editor} />
      <div className="border rounded-md p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
