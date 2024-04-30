'use client';
import { ReactElement } from 'react';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });


interface IPost {
  _id: string;
  title: string;
  author: string;
  date: string;
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

  return (
      <article key={post._id} onClick={() => onPostClick(post)} className='max-w-[390px] max-h-[332px] gap-[11px]'>
        <Image src='/blogthumb.png' width={610} height={339} alt='Blog Post' className="responsive max-w-full max-h-full"/>
        <h2 className="text-2xl text-[#DFDFE4]">{post.title}</h2>
      </article>
  );
}
