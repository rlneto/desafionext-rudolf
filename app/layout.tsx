import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Press_Start_2P } from "next/font/google";
import logoJojos from '@/public/icon.svg'
import Burger from '@/components/Burger'
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
  const links = [
    { href: '/jogos', label: 'Jogos' },
    { href: '/', label: 'Sobre' },
    { href: '/blog', label: 'Blog' },
    { href: '/carreira', label: 'Carreira' },
  ];

  return (
    <html lang="en">
        <body className={`${mont.className} flex flex-col min-h-screen w-screen max-w-full`}>
          <div className={`px-[10px] md:px-[100px] py-[5px] md:py-[50px] bg-[#023047] md:h-[152px] w-screen flex items-center justify-between max-w-full`}>
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
            <div className="md:hidden">
              <Burger links={links} />
            </div>
            <ul className={'hidden md:gap-[60px] items-center text-white text-xl md:flex'}>
                <li><Link href="/jogos">Jogos</Link></li>
                <li><Link href="/">Sobre</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li ><Link href="/carreira"><button className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Carreira</button></Link></li>
            </ul>
          </div>
          <div className="flex flex-row flex-grow overflow-y-auto">
                {children}
          </div>
          <div className="flex h-[100px] bg-[#023047] mt-auto text-white text-sm md:text-xl text-center items-center justify-center sticky bottom-0 w-full border-[#DFDFE4] border-t-[1px]">
                © JOJOS GAME STUDIO. ALL RIGHTS RESERVED
          </div>
        </body>
    </html>
  );
}
