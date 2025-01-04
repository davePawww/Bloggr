"use client";

import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const Editor = dynamic(() => import("@/components/editor"), {
  // Make sure we turn SSR off
  ssr: false,
});

export default function NewStoryPage() {
  const [value, setValue] = useState("");
  const editorRef = useRef<MDXEditorMethods>(null);

  return (
    <div className="w-full">
      <Editor editorRef={editorRef} value={value} onChange={setValue} />
      <Button className="float-end mt-4">Publish</Button>
    </div>
  );
}
