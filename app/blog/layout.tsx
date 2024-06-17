import React from 'react';

import { getPosts } from '@/lib/posts';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const postagens = await getPosts();

  return (
    <div>
      {React.cloneElement(children as React.ReactElement, { postagens })}
    </div>
  );
}
