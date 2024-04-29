import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { Montserrat, Press_Start_2P } from "next/font/google";
import logoJojos from '@/public/icon.svg'
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jojos",
  description: "Desafio do Rudolf para a trilha dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className={`px-[100px] py-[50px] bg-[#023047] h-[152px] w-screen flex items-center justify-between`}>
          <div className={'flex flex-col'}>
            <div className={'flex gap-[13.3px]'}>
              <Image src={logoJojos} width={48} height={40} alt='Ícone Jojos'/>
              <div className={`text-center ${press.className} text-[40px]`}>
                <span className="text-white">J</span>
                <span className="text-[#FA8400]">O</span><span className="text-white">J</span>
                <span className="text-[#FA8400]">O</span><span className="text-white">S</span>
              </div>
            </div>

          </div>
            <ul className={'flex gap-[60px] items-center'}>
              <li className={'text-white text-xl'}><Link href="/jogos">Jogos</Link></li>
              <li className={'text-white text-xl'}><Link href="/sobre">Sobre</Link></li>
              <li className={'text-white text-xl'}><Link href="/blog">Blog</Link></li>
              <li ><Link href="/carreira"><button className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Carreira</button></Link></li>
            </ul>
        </div>

        
        
        {children}</body>
    </html>
  );
}
