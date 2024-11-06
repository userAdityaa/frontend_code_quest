import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Pagination = () => {
  const router = useRouter();
  const totalPages = 40; 
  const maxVisiblePages = 7; 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRangeStart, setPageRangeStart] = useState(1);

  const handlePageClick = async (page: number) => {
    router.push(`/questions?page=${page}`); 
    setCurrentPage(page);
    if (page === pageRangeStart + maxVisiblePages - 1 && page < totalPages) {
      setPageRangeStart(pageRangeStart + maxVisiblePages);
    }
    if (page === pageRangeStart && page > 1) {
      setPageRangeStart(pageRangeStart - maxVisiblePages);
    }
  };


  const renderPageNumbers = () => {
    const pages = [];
    const endPage = Math.min(pageRangeStart + maxVisiblePages - 1, totalPages);
    for (let i = pageRangeStart; i <= endPage; i++) {
        pages.push(
          <div key={i} className='relative'>
            <div className='absolute bg-black w-full h-full rounded-lg top-[0.25rem] left-0 z-0'></div>
            <button
              onClick={() => handlePageClick(i)}
              className={`relative px-3 py-1 rounded z-10 font-bold ${
                i === currentPage ? 'bg-[#ecc355] text-black' : 'text-white bg-[#454545]'
              }`}
            >
              {i}
            </button>
          </div>
        );
      }
      return pages;
      };
      return(
      <div className='flex flex-col gap-14 items-center pr-40'>
        <div className='flex justify-end gap-2 mb-[4rem]'>
          {pageRangeStart > 1 && (
            <div className='relative'>
              <div className='absolute bg-black w-full h-full rounded-lg top-[0.20rem] left-0 z-0'></div>
              <button
                onClick={() => setPageRangeStart(pageRangeStart - maxVisiblePages)}
                className='relative text-white bg-[#454545] px-3 py-[0.35rem] rounded z-10'
              >
                <Image src='/prev-button.svg' alt='previous button' height={20} width={20}></Image>
              </button>
            </div>
          )}
          {renderPageNumbers()}
          {pageRangeStart + maxVisiblePages - 1 < totalPages && (
            <div className='relative'>
              <div className='absolute bg-black w-full h-full rounded-lg top-[0.20rem] left-0 z-0'></div>
              <button
                onClick={() => setPageRangeStart(pageRangeStart + maxVisiblePages)}
                className='relative text-white px-3 py-[0.35rem] rounded bg-[#454545] z-10'
              >
                <Image src='/next-button.svg' alt='next button' height={20} width={20}></Image>
              </button>
            </div>
          )}
        </div>
      </div>
      );
};

export default Pagination;
