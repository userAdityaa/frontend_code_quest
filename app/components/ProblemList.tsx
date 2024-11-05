import React, { useState, useEffect } from 'react';

interface ProblemListProps {
    currentPage: number;
}

interface Problem {
    title: string;
    difficulty: string;
    topicTags: string[];
}

const ProblemList = ({ currentPage }: ProblemListProps) => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(false);
    const problemsPerPage = 15;

    useEffect(() => {
        const fetchProblems = async () => {
            setLoading(true);
            try {
                const storedProblems = localStorage.getItem('problems');
                if (storedProblems) {
                    const parsedProblems: Problem[] = JSON.parse(storedProblems);
                    setProblems(parsedProblems);
                } else {
                    console.error("No problems found in localStorage");
                }
            } catch (error) {
                console.error("Error fetching problems:", error);
            }
            setLoading(false);
        };
        fetchProblems();
    }, []);

    const getBorderColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return '#3ac28d';
            case 'Medium':
                return '#ecc355';
            case 'Hard':
                return '#af2626';
            default:
                return '#6893ee'; // Default color
        }
    };

    const startIndex = (currentPage - 1) * problemsPerPage;
    const currentProblems = problems.slice(startIndex, startIndex + problemsPerPage);

    return (
        <div className={`w-[55vw] h-auto flex flex-col gap-3`}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                currentProblems.map((problem, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute inset-0 bg-black rounded-lg bottom-[-0.3rem]'></div>
                        <button
                            className='relative flex flex-col items-start gap-[0.55rem] bg-[#2c2c2e] px-14 pl-4 pb-2 rounded-lg border-l-8 w-full'
                            style={{ borderLeftColor: getBorderColor(problem.difficulty) }}
                        >
                            <div className='bg-white rounded-lg'></div>
                            <p className='font-semibold text-white'>{startIndex + index + 1}. {problem.title}</p>
                            <div className='flex flex-wrap gap-1'>
                                {problem.topicTags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className='bg-gray-700 rounded px-2 py-1'>{tag}</span>
                                ))}
                            </div>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProblemList;