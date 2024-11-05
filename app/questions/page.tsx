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
          <div className='text-white font-bold text-[20px] mt-6'>
            Started Questions
          </div>
            <div className='mt-4  w-[85%] flex items-center'>
              <div className='relative w-full'>
                <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
                <input 
                  type="text" 
                  className='relative text-white rounded-lg bg-[#454545] pl-2 p-1 pr-20 outline-none w-full z-10' 
                  placeholder='Search questions'
                />
                <div className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10'>
                  <Image src="/search_logo.svg" alt="Search" width={20} height={20} />
                </div>
              </div>
              <div className='relative w-full ml-4'>
                <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
                <select className='relative text-white font-semibold rounded-lg bg-[#454545] pl-2 p-[0.35rem] outline-none pr-28 w-full z-10' defaultValue="">
                  <option value="" disabled>Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className='relative w-full ml-4'>
                <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
                <select className='relative text-white font-semibold rounded-lg bg-[#454545] pl-2 p-[0.35rem] outline-none pr-48 w-full z-10' defaultValue="">
                  <option value="" disabled>Tags</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <div className='flex items-center w-[40%] mt-4'>
              <div className='relative w-[60%] mb-7'>
                <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
                <select className='relative text-white font-semibold rounded-lg bg-[#454545] pl-2 p-[0.35rem] outline-none pr-2 w-full z-10' defaultValue="">
                  <option value="" disabled>Tags</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className='relative w-[15%] ml-4 mb-7'>
                <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
                <button className='relative bg-[#454545] w-full h-full flex items-center justify-center py-[0.35rem] rounded-lg px-4 z-10'>
                  <Image src='/random.svg' alt='random icon' height={30} width={18} className='object-contain' />
                </button>
              </div>
            </div>
          <ProblemList currentPage={1}/>
        </div>

        <div className='border border-white fixed right-24 h-[40%] w-[25%]'></div>
      </div>
    </div>
  );
}

export default Questions