'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navbar } from '../components';
import { Mukta_Mahee } from 'next/font/google';
import axios from 'axios';

const muktaMahee = Mukta_Mahee({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

const SignIn = () => {
  const [githubData, setGithubData] = React.useState(null);
  const [isPressedGoogleButton, setIsPressedGoogleButton] = useState(false);
  const [isPressedGithubButton, setIsPressedGithubButton] = useState(false)

  function handleGithubLogin() { 
    window.location.href = 'http://localhost:8080/login/github/'
  }

  return (
    <div className={`${muktaMahee.className} text-white`}>
      <Navbar/>
      <div className='flex justify-center items-center w-full h-screen flex-col'>
        <Image src='/sign_in.svg' alt='sign in page image' height={0} width={150}></Image>
        <p className='text-[34px] font-bold'>Welcome to CodenQuest!</p>
        <p className='text-[20px] font-semibold'>Sign in to start your coding journey</p>

        <div className='bg-[#2c2c2e] h-32 w-80 rounded-md mt-6 flex flex-col justify-center items-center font-semibold'>
          <div className='relative w-auto h-auto flex justify-center items-center'>
            <div className='absolute bg-[#1c3a8c] w-full h-full rounded-lg top-[0.45rem] left-0 z-0'></div>
            <button
              className={`relative bg-[#6893ee] w-auto h-auto flex items-center justify-center px-14 py-2 rounded-lg text-white font-bold gap-2 z-10 ${isPressedGoogleButton ? 'bulge' : ''}`}
              onMouseDown={() => setIsPressedGoogleButton(true)}
              onMouseUp={() => setIsPressedGoogleButton(false)}
            >
              <Image src='/google.svg' alt='Google logo' width={18} height={24} className='mr-2' />
              Sign in with Google
            </button>
          </div>

          <div className='relative w-auto h-auto flex justify-center items-center mt-4'>
            <div className='absolute bg-[#2d1a5e] w-full h-full rounded-lg top-[0.45rem] left-0 z-0'></div>
            <button
              className={`relative bg-[#412487] w-auto h-auto flex items-center justify-center px-14 py-2 rounded-lg text-white font-bold gap-2 z-10 ${isPressedGithubButton ? 'bulge' : ''}`}
              onMouseDown={() => setIsPressedGithubButton(true)}
              onMouseUp={() => setIsPressedGithubButton(false)}
              onClick={handleGithubLogin}
            >
              <Image src='/github.svg' alt='GitHub logo' width={18} height={24} className='mr-2' />
              Sign in with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn