'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isPressedButton1, setIsPressedButton1] = useState(false);
  const [isPressedButton2, setIsPressedButton2] = useState(false);
  const [isPressedButton3, setIsPressedButton3] = useState(false);
  const currentPath = usePathname(); 
  const urlParams = new URLSearchParams(window.location.search);
  const avatar_url = currentPath === '/questions' ? urlParams.get('avatar_url') : null;

  return (
    <nav className='bg-[#131313] w-[100vw] h-[7vh] fixed flex justify-between items-center z-10'>
        <div className='bg-[#1c1c1e] w-[20%] h-[80%] rounded-t-xl flex items-center justify-center ml-8'>  
            <div className='relative w-[50%] h-[50%] flex justify-center items-center gap-4'>
                <div className='relative w-full h-full flex justify-center items-center'>
                    <div className='absolute bg-black w-full h-full rounded-lg top-[0.60rem] left-0 z-0'></div>
                    <button 
                        className={`relative bg-[#454545] w-full h-full flex items-center justify-center p-4 rounded-lg text-zinc-100 font-bold gap-2 z-10 ${isPressedButton1 ? 'bulge' : ''}`}
                        onMouseDown={() => setIsPressedButton1(true)}
                        onMouseUp={() => setIsPressedButton1(false)}
                    >
                        <Image src='/logo.webp' alt='logo' height={0} width={20}></Image>
                        CodenQuest
                    </button>
                </div>

                <div className='relative w-full h-full flex justify-center items-center'>
                    <div className='absolute bg-black w-full h-full rounded-lg top-[0.60rem] left-0 z-0'></div>
                    <button 
                        className={`relative bg-[#454545] w-full h-full flex items-center justify-center p-4 rounded-lg text-zinc-100 font-bold gap-2 z-10 ${isPressedButton2 ? 'bulge' : ''}`}
                        onMouseDown={() => setIsPressedButton2(true)}
                        onMouseUp={() => setIsPressedButton2(false)}
                    >
                        Blog
                    </button>
                </div>
            </div>
        </div>

        {currentPath !== '/Signin' && currentPath !== '/questions' && (
          <div className='bg-[#1c1c1e] w-[10%] h-[80%] rounded-t-xl flex items-center justify-center mr-8'>  
              <div className='relative w-[60%] h-[50%] flex justify-center items-center'>
                  <div className='absolute bg-black w-full h-full rounded-lg top-[0.60rem] left-0 z-0'></div>
                  <button 
                      className={`relative bg-[#454545] w-full h-full flex items-center justify-center p-4 rounded-lg text-zinc-100 font-bold gap-2 z-10 ${isPressedButton3 ? 'bulge' : ''}`}
                      onMouseDown={() => setIsPressedButton3(true)}
                      onMouseUp={() => setIsPressedButton3(false)}
                  >
                      Sign In
                  </button>
              </div>
          </div>
        )}

        {currentPath === '/questions' && avatar_url && (
          <div className='flex items-center justify-center mr-8'>
            <Image src={avatar_url} alt='Avatar' height={40} width={40} className='rounded-full' />
          </div>
        )}
    </nav>
  )
}

export default Navbar