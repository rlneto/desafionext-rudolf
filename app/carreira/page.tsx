'use client';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
import { useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import clsx from 'clsx';

const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });




export default function Carreira() {
  /* Validação de campos cookie-cutter */
  
  const nomeRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const portfolioRef = useRef<HTMLInputElement>(null)
  const pqRef = useRef<HTMLTextAreaElement>(null)
  
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /\S+@\S+\.\S+/;
  
  const [errorOpen, setErrorOpen] = useState(false);

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

  const [open, setOpen] = useState(false);
  const enviarCv = () => {
    const email = emailRef.current?.value;
    const portfolio = portfolioRef.current?.value;
    const porque = pqRef.current?.value;
  
    if (!email || !portfolio || !porque || emailError) {
      setErrorOpen(true);
    } else {
      setOpen(true);
    }
  };
  return(
    <div className={`flex flex-col bg-[#023047] md:min-h-full w-full items-center justify-stretch ${mont.className} gap-[30px]`}>
      <header className={`flex text-center flex-row justify-center align- ${press.className} text-[#FA8400] text-2xl md:text-4xl`}>
        Formulário de Vaga
      </header>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="nome" className='text-white text-xl'>Nome:</label>
          </div>
          <div className="flex flex-row ">
            <input type="text" name="nome" ref={nomeRef} id="formnome" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
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
            <input type="url" name="portfolio" id="formportfolio" ref={portfolioRef} className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
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
            <textarea name="porque" ref={pqRef} id="formpq" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[177px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]"/>
          </div>
        </div>
      </div>
      <button onClick={enviarCv} className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Enviar Formulário</button>


      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div
          className="bg-[#DFDFE4] px-[58px] py-[44px] shadow-xl flex flex-col justify-center items-center max-w-[809px] max-h-[364px] w-full h-full gap-[12px]"
        >
          <h2 id="modal-modal-title" className={ `flex ${press.className} text-5xl text-center text-[#023047] font-bold`}>
            Formulário enviado com sucesso!
          </h2>
          <Image src="/check.svg" alt="check" width={122} height={100} className="flex flex-row responsive"/>
        </div>
      </Modal>
      <Modal
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div
          className="bg-[#DFDFE4] px-[58px] py-[44px] shadow-xl flex flex-col justify-center items-center max-w-[809px] max-h-[364px] w-full h-full gap-[12px]"
        >
          <h2 id="error-modal-title" className={ `flex ${press.className} text-5xl text-center text-[#023047] font-bold`}>
            Preencha todos os campos!
          </h2>
          <Image src="/cross.svg" alt="cross" width={122} height={100} className="flex flex-row responsive"/>
        </div>
      </Modal>
    </div>
  )
}
