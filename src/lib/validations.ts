import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title cannot be more than 100 characters long" }),

  content: z.string().min(1, { message: "Content cannot be empty" }),

  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag cannot be empty" })
        .max(30, { message: "Tag cannot be more than 30 characters long" })
    )
    .min(1, { message: "At least one tag is required" })
    .max(3, { message: "Cannot have more than 3 tags" }),
});
