'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
import Post from '../../components/Post';
import type { PostType } from "@/types";

const mont = Montserrat({ subsets: ["latin"] });
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

interface BlogProps {
  postagens: PostType[];
}

export default function Blog({ postagens }: BlogProps) {
  useEffect(() => {
    console.log('Received postagens in Blog component:', postagens);
  }, [postagens]);

  const [currentPost, setCurrentPost] = useState<PostType | null>(postagens && postagens.length > 0 ? postagens[0] : null);

  const changePostHandler = (post: PostType) => {
    console.log('Changing current post to:', post);
    setCurrentPost(post);
  };

  if (!postagens || postagens.length === 0 || !currentPost) {
    console.log('No postagens or currentPost is null. Rendering loading...');
    return <div>Loading...</div>;
  }

  return (
    <div className={`flex flex-col bg-[#023047] md:min-h-full w/full items-center justify-stretch ${mont.className} gap/[30px] px-2 md:px/[100px]`}>
      <header className={`flex text-center flex-row justify-center align- ${press.className} text-[#FA8400] text-2xl md:text-4xl`}>
        BLOG
      </header>
      <article className="flex flex-col md:flex-row w/full items-stretch justify-center md:max-w/[1240px] gap/[20px] max-h/full">
        <div className="flex flex-row md:flex-col ">
          <Image src='/blogpost.jpg' width={610} height={339} alt='Blog Post' className="responsive max-w/full max-h/full" />
        </div>
        <div className="flex flex-col w/full justify-evenly max-w/[590px]">
          <h2 className="flex flex-row flex-wrap text-[#DFDFE4] text/[32px] font-bold mb/[16px]">
            {currentPost.title}
          </h2>
          <sub className="flex flex-row flex-wrap text-[#DFDFE4] mb/[16px] text-sm">
            Por {currentPost.author}, {currentPost.publishedAt}
          </sub>
          <p className="flex flex-row flex-wrap text-[#DFDFE4] text-xl">
            {currentPost.body}
          </p>
        </div>
      </article>
      <div className="flex flex-row flex-wrap gap/[35px] max-w/[1240px] flex-shrink-0 mb/[10vw]">
        {postagens.map((post: PostType) => (
          <Post key={post.id} post={post} onPostClick={changePostHandler} />
        ))}
      </div>
    </div>
  );
}
