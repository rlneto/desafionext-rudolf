'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  label: string;
}

interface BurgerProps {
  links: LinkProps[];
}

export default function Burger({ links }: BurgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-around w-10 h-10 bg-transparent border-none focus:outline-none"
      >
        <div className={`w-6 h-[2px] bg-white transition-transform duration-200 ${isOpen ? 'transform rotate-45' : ''}`}></div>
        <div className={`w-6 h-[2px] bg-white transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-[2px] bg-white transition-transform duration-200 ${isOpen ? 'transform -rotate-45' : ''}`}></div>
      </button>

      {isOpen && (
        <div className="flex flex-col text-white bg-[#023047] mt-2">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <p className="p-2" onClick={closeMenu}>{link.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
