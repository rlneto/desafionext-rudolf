'use client';

import type { ReactElement } from 'react';

interface IPost {
  id: number;
  title: string;
  author: string;
  date: Date;
  content: string;
}

interface PostProps {
  post: IPost;
  onPostClick: (post: IPost) => void;
}

export default function Post({ post, onPostClick }: PostProps): ReactElement {
  if (!post) {
    return <div>No posts found</div>;
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onPostClick(post);
    }
  };

  return (
    <div
      key={post.id}
      onClick={() => onPostClick(post)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="max-w-[390px] max-h-[332px] gap-[11px]"
    >
      <img src="/blogthumb.png" alt="Blog Post" className="responsive max-w-full max-h-full" />
      <h2 className="text-2xl text-[#DFDFE4]">{post.title}</h2>
    </div>
  );
}
