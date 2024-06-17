import { getPost } from "@/sanity/sanity.query";
import type { PostType } from "@/types";
import React from "react";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const postagens: PostType[] = await getPost();

  console.log('Fetched postagens in BlogLayout:', postagens); // Debug log to see fetched data

  return (
    <div>
      {React.cloneElement(children as React.ReactElement, { postagens })}
    </div>
  );
}
