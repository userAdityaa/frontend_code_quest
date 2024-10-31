'use client'
import { useState } from "react";
import { Navbar } from "./components";
import { Mukta_Mahee } from 'next/font/google';
import Image from "next/image";

const muktaMahee = Mukta_Mahee({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

export default function Home() {
  const [isPressedButton, setIsPressedButton] = useState(false);

  const handleMouseDown = () => {
    setIsPressedButton(true);
  };

  const handleMouseUp = () => {
    setIsPressedButton(false);
  };

  return (
    <div className={muktaMahee.className}>
      <Navbar />
      <Image src='/left_main.png' alt="left_main" height={0} width={500} className="absolute top-20"></Image>
      <Image src='/right_main.png' alt="right_main" height={0} width={500} className="absolute right-2 top-28"></Image>
      <div className="relative h-screen">
        <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] h-[30vh] absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-zinc-100 font-extrabold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-tight">
          Master <span className="bg-[#fc7b97b5] inline-block align-baseline">Coding</span>
          <br />
          Through <span className="bg-[#6266d09c] inline-block align-baseline">Play</span>,
          <br />
          <span className="bg-[#5b9f51c6] inline-block align-baseline">Everywhere</span>
        </div>
        <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[34vw] absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-zinc-100 leading-tight mt-8 text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
          Dive into a world where coding meets gamification. Prepare for interviews wherever you are!
        </div>

        <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[34vw] absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-8 font-bold">
          <div className='relative w-full h-full flex justify-center items-center'>
            <div className='absolute bg-black w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-full rounded-lg top-[0.60rem] left-15 z-0'></div>
            <button 
              className={`relative bg-[#ecc355] w-[30vw] sm:w-[20vw] md:w-[15vw] lg:w-[10vw] h-full flex items-center justify-center p-2 rounded-lg text-black font-bold gap-2 z-10 ${isPressedButton ? 'bulge' : ''}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Start Coding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}