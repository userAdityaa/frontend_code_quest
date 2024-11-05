// components/ProblemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mukta_Mahee } from 'next/font/google';

const muktaMahee = Mukta_Mahee({
  weight: ['400', '700'],
  subsets: ['latin'],
});

type ProblemListprops = {
    currentPage: number;
}

const ProblemList = ({currentPage }: ProblemListprops) => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(false);
    const problemsPerPage = 15;

    // useEffect(() => {
    //     const fetchProblems = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await axios.get('https://alfa-leetcode-api.onrender.com/problems?limit=200',);
    //             setProblems(response.data.problems);
    //         } catch (error) {
    //             console.error("Error fetching problems:", error);
    //         }
    //         setLoading(false);
    //     };
        
    //     fetchProblems();
    // }, []);
    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

    return (
        <div className={`w-[55vw] h-auto flex flex-col gap-3 ${muktaMahee.className}`}>
            <div className='relative'>
                <div className='absolute inset-0 bg-black rounded-lg bottom-[-0.3rem]'></div>
                <button className='relative text-white pt-2 pb-2 pl-4 bg-[#2c2c2e] rounded-lg w-full flex flex-col items-start'>
                    <p className='font-semibold text-white'>1. Access First Element</p>
                    <p>Array</p>
                </button>
            </div>
        </div>
    );
};

export default ProblemList;
