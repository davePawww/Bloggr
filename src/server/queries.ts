"use server";

import { db } from "@/server";

export async function getPosts() {
  const posts = await db.query.posts.findMany({
    orderBy: (posts, { asc }) => asc(posts.createdAt),
    with: {
      postTags: {
        with: {
          tag: true,
        },
      },
      bookmarks: true,
    },
  });

  return posts;
}

export async function getPostById(id: string) {
  const post = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  const tags = await db.query.postTags.findMany({
    where: (model, { eq }) => eq(model.postId, id),
    with: {
      tag: true,
    },
  });

  return { post, tags };
}

export async function getTags() {
  const tags = await db.query.tags.findMany({});

  return tags;
}

export async function getUserBookmarks(userId: string) {
  const bookmarks = await db.query.bookmarks.findMany({
    where: (model, { eq }) => eq(model.userId, userId),
    with: {
      post: true,
    },
  });

  return bookmarks;
}
