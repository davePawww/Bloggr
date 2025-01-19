"use client";

// import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PostSchema } from "@/lib/validations";

const Editor = dynamic(() => import("@/components/editor"), {
  // Make sure we turn SSR off
  ssr: false,
});

export default function NewStoryPage() {
  // const { isSignedIn, user } = useUser();
  const editorRef = useRef<MDXEditorMethods>(null);

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] }
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag is too long",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }
    }
  };

  // publish handler
  // tag remove handler
  // x icon for tag remove
  // ui display

  const handlePublish = (values: z.infer<typeof PostSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlePublish)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Editor
                  editorRef={editorRef}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <div>
                  <Input
                    placeholder="Add tags"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div>
                      {field.value.map((tag) => (
                        <Badge variant="secondary" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </Form>
  );
}
