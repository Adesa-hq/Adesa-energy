"use server";
import { siteConfig } from "@/config/site";

const PAGE_SIZE = 8;

export async function getPosts({ page = 1, tag }) {
  let posts = siteConfig.blog.posts;

  if (tag) {
    posts = posts.filter((p) => p.tag === tag);
  }

  const totalPages = Math.ceil(posts.length / PAGE_SIZE);

  const paginatedPosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return { posts: paginatedPosts, totalPages };
}
