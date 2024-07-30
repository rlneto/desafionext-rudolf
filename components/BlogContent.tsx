'use client';

import Image from 'next/image';
import { useState } from 'react';
import Post from '../components/Post';

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

const BlogContent = ({ initialPosts }: BlogProps) => {
  const [currentPost, setCurrentPost] = useState<IPost | null>(initialPosts.length > 0 ? initialPosts[0] : null);

  return (
    <>
      {currentPost && (
        <article className="flex flex-col md:flex-row w-full items-stretch justify-center md:max-w-[1240px] gap-[20px] max-h-full">
          <div className="flex flex-row md:flex-col">
            <Image src="/blogpost.jpg" alt="Blog Post" width={500} height={300} className="responsive max-w-full max-h-full" />
          </div>
          <div className="flex flex-col w-full justify-evenly max-w-[590px]">
            <h2 className="flex flex-row flex-wrap text-[#DFDFE4] text-[32px] font-bold mb-[16px]">
              {currentPost.title}
            </h2>
            <sub className="flex flex-row flex-wrap text-[#DFDFE4] mb-[16px] text-sm">
              Por {currentPost.author}, {new Date(currentPost.date).toLocaleDateString()}
            </sub>
            <p className="flex flex-row flex-wrap text-[#DFDFE4] text-xl">
              {currentPost.content}
            </p>
          </div>
        </article>
      )}
      <div className="flex flex-row flex-wrap gap-[35px] max-w-[1240px] flex-shrink-0 mb-[10vw]">
        {initialPosts.map((post) => (
          <Post key={post.id} post={post} onPostClick={setCurrentPost} />
        ))}
      </div>
    </>
  );
};

export default BlogContent;
