'use client';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
import { useState } from 'react';




const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

const comebig = "/ccxl.png"
const comesmall = "/ccsm.png"
const cash: HTMLAudioElement = new Audio("/cash.mp3"); /* Licença: Creative Commons, url: https://www.free-stock-music.com/sound-effects-library-cash-register-sound.html */


export default function Jogos() {
  const [showMessage, setShowMessage] = useState(false);

  const cashIn = () => {
    cash.play();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return(
    <article className={`flex flex-row bg-[#023047] md:min-h-screen w-full justify-center ${mont.className}`}>
      <div className="flex flex-col gap-[20px] w-full md:max-w-[80%] px-1 md:px-0 items-center ">
        <header className={`flex flex-row justify-center ${press.className} text-[#FA8400] text-4xl`}>
          Come-come
        </header>
        <Image src={comebig} width={1240} height={490} className="responsive md:flex flex-row hidden w-full" alt="Screenshot do come-come."/>
        <Image src={comesmall} className="md:hidden flex responsive" width={400} height={300} alt={`Thumbnail do come-come.`} />
        <div className="flex flex-col md:flex-row justify-start w-full items-center gap-[42px]">
          <span className="text-white text-2xl">Preço<span className='text-[#FA8400]'>*</span>: <span className='line-through'>R$ 9.999,99</span> <span className='text-[#FA8400]'>R$ 9,99</span></span>
          <button onClick={cashIn} className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Comprar</button>
          {showMessage && (
          <div className={`animate-float ${press.className} text-[#FA8400]`}>
            Mais 10 pila pra conta da Pixel!
          </div>
        )}
        </div>
        <section className="text-white text-2xl">
          <p className='my-3'>O Come-Come, também conhecido como o jogo amarelinho, é um dos primeiros jogos criados para computadores. Desenvolvido pela empresa Namco em 1980, ele conquistou corações e mentes com sua simplicidade e desafio cativante. Imagine-se no labirinto, controlando o famoso personagem amarelo, enquanto ele devora bolinhas e foge dos fantasmas.</p>

          <p className='my-3'>Uma Jornada Viciante: O objetivo é claro: comer todas as bolinhas no labirinto antes que os fantasmas o alcancem. À medida que você avança, a tensão aumenta. Cada bolinha ingerida é uma pequena vitória, e cada fantasma evitado é um suspiro de alívio. O Come-Come é um jogo que testa sua agilidade e estratégia, mantendo-o grudado na tela por horas a fio.</p>

          <p className='my-3'>Recordes e Desafios: O Come-Come não é apenas sobre comer bolinhas; é sobre superar seus próprios recordes. Quem nunca se sentiu triunfante ao bater a pontuação máxima? E quando os fantasmas se tornam mais rápidos e astutos, o desafio se intensifica. Cada partida é uma oportunidade de superação e diversão.</p>

          <p >Seja você um veterano nostálgico ou um novato curioso, o Come-Come é um tesouro atemporal que nunca sai de moda. Experimente e descubra por que esse jogo simples conquistou o mundo!</p>
        </section>
        <p className='text-sm text-[#FA8400] mb-[115px]'>*Oferta válida apenas enquanto durarem os estoques! </p>
      </div>
    </article>
  )
}
