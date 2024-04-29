'use client';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
import { useState, useRef } from 'react';
import clsx from 'clsx';

const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });




export default function Carreira() {
  const enviarCv = () => {

  }
  /* Validação de campos cookie-cutter */
  
  const emailRef = useRef<HTMLInputElement>(null)
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = () => {
    if(emailRef.current){
        const email = emailRef.current.value;
      if (!emailRegex.test(email)) {
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
          if(emailRef.current) {
            emailRef.current.value = "";
          }
        }, 5000);

      } else {
        setEmailError(false);
      }
    }
  };
  return(
    <div className={`flex flex-col bg-[#023047] md:min-h-screen w-full items-center justify-stretch ${mont.className} gap-[30px]`}>
      <header className={`flex text-center flex-row justify-center align- ${press.className} text-[#FA8400] text-2xl md:text-4xl`}>
        Formulário de Vaga
      </header>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="nome" className='text-white text-xl'>Nome:</label>
          </div>
          <div className="flex flex-row ">
            <input type="text" name="nome" id="formnome" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[-5px]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="email" className='text-white text-xl'>Email:</label>
          </div>
          <div className="flex flex-row">
          <input 
            type="email" 
            name="email" 
            id="formemail" 
            ref={emailRef}
            onBlur={validateEmail}
            className={clsx(
              'text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]',
              {
                'border-red-500': emailError,
              }

            )}
            
            
          />
          </div>
          <div className="flex flex-row h-5">
            <p className={clsx(
              'text-red-500',
              {
                'hidden': !emailError,
                'visible': emailError,
              }
            )}>Por favor, insira um e-mail válido!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="portfolio" className='text-white text-xl'>
              Link para Portfólio:
            </label>
          </div>
          <div className="flex flex-row">
            <input type="url" name="portfolio" id="formportfolio" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row w-[90vw] md:w-[600px]">
            <label htmlFor="text" className='text-white text-xl'>
              Por que você quer fazer parte da Jojos?
            </label>
          </div>
          <div className="flex flex-row">
            <textarea name="porque" id="formpq" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[177px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
          </div>
        </div>
      </div>
      <button onClick={enviarCv} className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Enviar Formulário</button>
    </div>
  )
}
