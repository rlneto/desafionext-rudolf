'use client';

import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });
import { useState, useEffect } from 'react';
import Post from '../../components/Post';
import { PostModel } from '../../models/Post';
import pseudodata from '../../db/posts' /* Tentei o sanity, o mongodb e o supadata e não consegui conectar diretamente a um bd, com o Next.js usando sua abstração para integrar não só a camada de views mas também os controllers, então fiz com esse mockup de dados. */



interface IPost {
  _id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}



const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>(pseudodata);
  const [currentPost, setCurrentpost] = useState<IPost>(posts[0]);

  const changePostHandler = (post: IPost) => {
    setCurrentpost(post);
  }

  return (
    <div className={`flex flex-col bg-[#023047] md:min-h-full w-full items-center justify-stretch ${mont.className} gap-[30px] px-2 md:px-[100px]`}>
      <header className={`flex text-center flex-row justify-center align- ${press.className} text-[#FA8400] text-2xl md:text-4xl`}>
        BLOG
      </header>
      <article className="flex flex-col md:flex-row w-full items-stretch justify-center md:max-w-[1240px] gap-[20px] max-h-full">
        <div className="flex flex-row md:flex-col ">
          <Image src='/blogpost.jpg' width={610} height={339} alt='Blog Post' className="responsive max-w-full max-h-full"/>
        </div>
        <div className="flex flex-col w-full justify-evenly max-w-[590px]">
          <h2 className="flex flex-row flex-wrap text-[#DFDFE4] text-[32px] font-bold mb-[16px]">
            {currentPost.title}
          </h2>
          <sub className="flex flex-row flex-wrap text-[#DFDFE4] mb-[16px] text-sm">
            Por {currentPost.author}, {currentPost.date}
          </sub>
          <p className="flex flex-row flex-wrap text-[#DFDFE4] text-xl">
            {currentPost.content}
          </p>
        </div>
        
      </article>
      <div className="flex flex-row flex-wrap gap-[35px] max-w-[1240px] flex-shrink-0 mb-[10vw]">
        {posts.map((post) => (
          <Post key={post._id} post={post} onPostClick={changePostHandler} />
        ))}
      </div>
    </div>

  );
}

export default Blog;
