'use client';

import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useSearchParams } from 'next/navigation'
import Navbar from './Navbar';
import { Suspense } from 'react'
import { v4 as uuidv4 } from 'uuid';

const MoviePage = () => {

    const [movie, setMovie] = useState({});
    const searchParams = useSearchParams();
    const rank = searchParams.get('rank');
    const genre = ["Crime", "Action", "Thriller"];

    async function handleFetchMovie() {
        if (rank != 0) {
            const res = await fetch('/api/searchMovies', {
                method: 'POST',
                'Content-Type': 'application/json',
                body: JSON.stringify({
                    rank
                })
            })
            const data = await res.json();
            console.log(data.data[0]);
            setMovie(data.data[0]);
        }
    }

    useEffect(() => {
        handleFetchMovie();
    }, [])

    return (
        <div className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-6'>
            <Navbar />
            <div className='flex justify-between'>
                <div>
                    <div className='text-3xl font-semibold'>{movie?.title || 'Breaking Bad'}</div>
                    <div>Movie - {movie?.year || "2008 - 2013"}</div>
                </div>
                <div className='text-center'>
                    <div className='font-medium text-lg'>Rating</div>
                    <div className='flex items-center gap-1'><FaStar className='text-orange-300 text-xl' />{movie?.rating || 9.5}/10</div>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <img className='w-full md:w-[30%] h-[28rem]' src={movie?.image || 'https://imgs.search.brave.com/qIWvFUu0xiusUGUTc72uCXKFUMgrH0dSKuUfmilIxrc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFyR0g0VW45R0wu/anBn'} alt='image' />
                <img className='hidden md:block w-[70%] h-[28rem]' src={movie?.big_image || 'https://imgs.search.brave.com/eHQnLDwLjrIVZ1aLjsH3ylgFY64CqKsKBItFYFMnxb4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE5ZVRIanpXeEwu/anBn'} alt='image' />
            </div>
            <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                    {movie?.genre ? movie?.genre?.map(i => {
                        return <div key={uuidv4()} className='border border-black px-4 py-2 rounded-md bg-black text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer'>{i}</div>
                    }) : genre?.map(i => {
                        return <div key={uuidv4()} className='border border-black px-4 py-2 rounded-md bg-black text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer'>{i}</div>
                    })}
                </div>
                <div>{movie?.description || "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future."}</div>
            </div>
        </div>
    )
}

const moviePageSuspenes = () => {
    return (
        <Suspense>
            <MoviePage />
        </Suspense>
    )
}

export default moviePageSuspenes;