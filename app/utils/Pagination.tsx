import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`text-white border border-white px-2 py-1 rounded ${
            i === currentPage ? 'bg-blue-500' : ''
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className='flex flex-col gap-14'>
      <div className='flex justify-end gap-2 mb-[4rem]'>
        {pageRangeStart > 1 && (
          <button
            onClick={() => setPageRangeStart(pageRangeStart - maxVisiblePages)}
            className='text-white border border-white px-2 py-1 rounded'
          >
            Prev
          </button>
        )}
        {renderPageNumbers()}
        {pageRangeStart + maxVisiblePages - 1 < totalPages && (
          <button
            onClick={() => setPageRangeStart(pageRangeStart + maxVisiblePages)}
            className='text-white border border-white px-2 py-1 rounded'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
