'use client';

import { useEffect } from 'react';
import { PostsProvider, usePosts } from '@/context/PostsContext';
import { PostType } from '@/types';

async function fetchPosts(): Promise<PostType[]> {
  console.log('Fetching posts from API...');
  const res = await fetch('http://localhost:3000/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await res.json();
  console.log('Fetched posts:', posts);
  return posts;
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Rendering BlogLayout...');
  return (
    <PostsProvider>
      <PostsDataInitializer />
      {children}
    </PostsProvider>
  );
}

function PostsDataInitializer() {
  const { setPosts } = usePosts();

  useEffect(() => {
    console.log('Initializing posts data...');
    fetchPosts()
      .then(posts => {
        console.log('Setting posts in context:', posts);
        setPosts(posts);
      })
      .catch(error => {
        console.error('Failed to fetch posts:', error);
      });
  }, [setPosts]);

  return null;
}
