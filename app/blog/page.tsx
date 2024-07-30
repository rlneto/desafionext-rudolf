import BlogContent from '@/components/BlogContent';
import { Suspense } from 'react';
import prisma from '../../lib/prisma';

interface IPost {
  id: number;
  title: string;
  author: string;
  date: Date;
  content: string;
}

interface BlogProps {
  initialPosts: IPost[];
}

const Blog = async () => {
  const posts: IPost[] = await prisma.post.findMany();

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div className="flex flex-col bg-[#023047] md:min-h-full w-full items-center justify-stretch gap-[30px] px-2 md:px-[100px]">
      <header className="flex text-center flex-row justify-center align- text-[#FA8400] text-2xl md:text-4xl">
        BLOG
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent initialPosts={posts} />
      </Suspense>
    </div>
  );
};

export default Blog;
