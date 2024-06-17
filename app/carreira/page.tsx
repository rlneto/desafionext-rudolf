'use client';
import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";
import { useState, useRef } from 'react';
import Modal from '@mui/material/Modal';
import clsx from 'clsx';

const mont = Montserrat({ subsets: ["latin"] });
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export default function Carreira() {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [errorOpen, setErrorOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    const title = titleRef.current?.value;
    const author = authorRef.current?.value;
    const body = contentRef.current?.value;
  
    if (!title || !author || !body) {
      setErrorOpen(true);
      return;
    }
  
    try {
      const response = await fetch('/.netlify/functions/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, body }),
      });
  
      if (response.ok) {
        setOpen(true);
      } else {
        setErrorOpen(true);
      }
    } catch (error) {
      console.error('Failed to submit form', error);
      setErrorOpen(true);
    }
  };
  

  return (
    <div className={`flex flex-col bg-[#023047] md:min-h-full w-full items-center justify-stretch ${mont.className} gap-[30px]`}>
      <header className={`flex text-center flex-row justify-center align- ${press.className} text-[#FA8400] text-2xl md:text-4xl`}>
        Criar Postagem no Blog
      </header>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="title" className='text-white text-xl'>Título:</label>
          </div>
          <div className="flex flex-row">
            <input type="text" name="title" ref={titleRef} id="formtitle" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[-5px]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <label htmlFor="author" className='text-white text-xl'>Autor:</label>
          </div>
          <div className="flex flex-row">
            <input type="text" name="author" id="formauthor" ref={authorRef} className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[55px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]" />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row w-[90vw] md:w-[600px]">
            <label htmlFor="content" className='text-white text-xl'>
              Conteúdo:
            </label>
          </div>
          <div className="flex flex-row">
            <textarea name="content" ref={contentRef} id="formcontent" className="text-[#DFDFE4] border-[#DFDFE4] border-solid border-2 outline-none bg-[#023047] h-[177px] w-[90vw] md:w-[600px] p-3 hover:border-[#FA8400] focus:border-[#FA8400]" />
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className={'text-[#023047] bg-[#FA8400] text-xl px-[20px] py-[10px] hover:bg-[#D16F00]'}>Enviar Postagem</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-[#DFDFE4] px-[58px] py-[44px] shadow-xl flex flex-col justify-center items-center max-w-[809px] max-h-[364px] w/full h/full gap-[12px]">
          <h2 id="modal-modal-title" className={`flex ${press.className} text-5xl text-center text-[#023047] font-bold`}>
            Postagem enviada com sucesso!
          </h2>
          <Image src="/check.svg" alt="check" width={122} height={100} className="flex flex-row responsive" />
        </div>
      </Modal>
      <Modal
        open={errorOpen}
        onClose={() => setErrorOpen(false)}
        aria-labelledby="error-modal-title"
        aria-describedby="error-modal-description"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-[#DFDFE4] px/[58px] py/[44px] shadow-xl flex flex-col justify-center items-center max-w/[809px] max-h/[364px] w/full h/full gap/[12px]">
          <h2 id="error-modal-title" className={`flex ${press.className} text-5xl text-center text-[#023047] font-bold`}>
            Preencha todos os campos!
          </h2>
          <Image src="/cross.svg" alt="cross" width={122} height={100} className="flex flex-row responsive" />
        </div>
      </Modal>
    </div>
  );
}
