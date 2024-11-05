'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar, ProblemList } from '../components'
import axios from 'axios'
import { Mukta_Mahee } from 'next/font/google'
import Image from 'next/image'

const muktaMahee = Mukta_Mahee({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

const Questions = () => {
  const searchParams = useSearchParams(); 
  const username = searchParams.get('username')
  const avatar_url = searchParams.get('avatar_url')
  const token = searchParams.get('code')
  
  return (
    <div className={`${muktaMahee}`}>
      <Navbar/>
      <div className='h-[65vh] w-[80vw] flex justify-center items-center'>
        <div className='w-[65%] h-full absolute top-24 left-28 flex flex-col'>
          <div className='text-white font-bold text-[20px] flex flex-col h-[18%] items-start'>
            <p className='mb-5'>Learning Path</p>
            <div className='flex items-center justify-center font-semibold text-[16px] gap-8'>
              <div className='relative'>
                <div className='absolute inset-0 bg-black rounded-lg bottom-[-0.3rem]'></div>
                <button className='relative flex flex-col items-start gap-[0.55rem] bg-[#2c2c2e] px-14 pl-4 pb-2 rounded-lg border-l-8' style={{ borderLeftColor: '#6265d0' }}>
                  <div className='bg-black rounded-lg'></div>
                  <p>100 days of code</p>
                  <p className='text-zinc-400'>Perfect for begineers</p>
                </button>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 bg-black rounded-lg bottom-[-0.3rem]'></div>
                <button className='relative flex flex-col items-start gap-[0.55rem] bg-[#2c2c2e] px-14 pl-4 pb-2  rounded-lg border-l-8' style={{ borderLeftColor: '#bb7cd7' }}>
                  <div className='bg-black rounded-lg'></div>
                  <p>FAANG interview prep</p>
                  <p className='text-zinc-400'>To Land Your Dream Job</p>
                </button>
              </div>
              <div className='relative'>
                <div className='absolute inset-0 bg-black rounded-lg bottom-[-0.3rem]'></div>
                <button className='relative flex flex-col items-start gap-[0.55rem] bg-[#2c2c2e] px-14 pl-4 pb-2  rounded-lg border-l-8' style={{ borderLeftColor: '#6893ee' }}>
                  <div className='bg-black rounded-lg'></div>
                  <p>Google prep</p>
                  <p className='text-zinc-400 uppercase'>coming soon</p>
                </button>
              </div>
            </div>
          </div>
          <div className='text-white font-bold text-[20px]'>
            Started Questions
          </div>

          {/* <div className='mt-4 mb-4 w-[80%] flex items-center'>
            <div className='relative'>
              <input type="text" className='text-white rounded-lg bg-[#454545] pl-2 p-1 pr-20 outline-none w-full' placeholder='Search questions'/>
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <Image src="/search_logo.svg" alt="Search" width={20} height={20} />
              </div>
            </div> */}

            <div className='mt-4 mb-4 w-[80%] flex items-center'>
              <div className='relative'>
                <input type="text" className='text-white rounded-lg bg-[#454545] pl-2 p-1 pr-20 outline-none w-full' placeholder='Search questions'/>
                <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                  <Image src="/search_logo.svg" alt="Search" width={20} height={20} />
                </div>
              </div>
              <select className='ml-4 text-white font-bold rounded-lg bg-[#454545] pl-2 p-[0.35rem] outline-none pr-6' defaultValue="">
                <option value="" disabled>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

          <ProblemList currentPage={0}/>
        </div>

        <div className='border border-white fixed right-24 h-[40%] w-[25%]'></div>
      </div>
    </div>
  );
}

export default Questions