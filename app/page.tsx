import Image from "next/image";
import Vaga from "@/components/Vaga"
import { Montserrat, Press_Start_2P } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

const comebig = "/ccxl.png"
const taitorama = "/taito.jpg"

/* Pseudo-resposta de um get de REST API, fiz assim pra lá embaixo renderizar dinamicamente as vagas */

const vagas = [ 
  {
    titulo: "Desenvolvedor C++ Júnior",
    area1: "DEV",
    area2: "Remoto"
  },
  {
    titulo: "Desenvolvedor C++ Pleno",
    area1: "DEV",
    area2: "Remoto"
  },
  {
    titulo: "Engenheiro de Software",
    area1: "Engenheiro",
    area2: "Remoto"
  },
  {
    titulo: "Artista Técnico",
    area1: "Arte",
    area2: "Remoto"
  },
  {
    titulo: "Representante Comercial",
    area1: "Comercial",
    area2: "Presencial"
  }
]

const previews: string[] = ["/ccsm.png", "/tsm.png", "/sism.png"]

export default function Home() {
  
  return ( 
  <div className={"flex flex-col bg-[#023047] md:min-h-screen w-full px-2 max-w-[640px] md:max-w-full md:px-[100px] py-3 items-center"}>
    <section className="flex flex-row md:max-w-[1240px]">
      <div className="flex-flex-col">
        <div className="flex-row hidden md:flex md:mb-[20px] border-transparent border-[5px] hover:border-solid hover:border-[5px] hover:border-[#FA8400]">
          <Image src={comebig} width={1240} height={490} alt="Screenshot do come-come."/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 flex-shrink">
        {previews.map((preview, index) => (
          <div key={index} className="md:flex-1 border-transparent border-[5px] hover:border-solid hover:border-[5px] hover:border-[#FA8400]">
            <Image src={preview} layout="md:responsive" width={400} height={300} alt={`Preview ${index}`} />
          </div>
          ))}
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center overflow-clip mt-7 mb-7 md:mt-[115px] md:mb-[115px] gap-[15px] max-w-[640px] md:max-w-[1240px]">
      <header className={`flex flex-row ${press.className} text-[#FA8400] text-4xl`}>
        Sobre nós
      </header>
      <div className="flex flex-col md:flex-row gap-x-3 gap-5">
        <div className="flex flex-1 text-white text-justify text-xl flex-col max-w-[625px] gap-2">
          <p className="leading-[32px] text-wrap">
            <span className="ml-10">Bem-vindo</span> à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.
          </p>
          <p className="leading-[32px]">
          <span className="ml-10">Acreditamos</span> que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.
          </p>
          <p className="leading-[32px]">
            <span className="ml-10">Jojos,</span> onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
          </p>
        </div>
        <div className="flex flex-1 flex-col items-stretch w-full md:w-[625px]">
          <Image src={taitorama} layout="responsive" width={625} height={692} objectFit="contain" alt="Imagem de um taitorama." />
        </div>
      </div>
    </section>
    <section className="flex flex-col max-w-[640px] md:max-w-[1240px] gap-[15px] items-center">
      <header className={`flex flex-row ${press.className} text-[#FA8400] text-4xl`}>
        Carreira
      </header>
      <div className="flex flex-col md:flex-row gap-[20px]  flex-wrap">
        {vagas.map((vaga, index) => (
          <div key={index}>
            <Vaga  {...vaga} />
          </div>
        ))}
      </div>
    </section>
  </div>
  );
} 
