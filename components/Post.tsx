'use client';
import { ReactElement } from 'react';
import Image from 'next/image';
import { Montserrat, Press_Start_2P } from 'next/font/google';
import { PostType } from '@/types';

const mont = Montserrat({ subsets: ['latin'] });
const press = Press_Start_2P({ weight: ['400'], subsets: ['latin'] });

interface PostProps {
  post: PostType;
  onPostClick: (post: PostType) => void;
}

export default function Post({ post, onPostClick }: PostProps): ReactElement {
  if (!post) {
    return <div>No posts found</div>;
  }

  return (
    <article key={post.id} onClick={() => onPostClick(post)} className='max-w-[390px] max-h-[332px] gap-[11px] cursor-pointer'>
      <Image src='/blogthumb.png' width={610} height={339} alt='Blog Post' className="responsive max-w-full max-h-full" />
      <h2 className="text-2xl text-[#DFDFE4]">{post.title}</h2>
    </article>
  );
}
