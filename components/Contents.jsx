'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import WordBreak from './WordBreak';
import { addToFav, getMovies } from '../app/utils/getMovies';
import { CiHeart } from "react-icons/ci";
import { v4 as uuidv4 } from 'uuid';
import FilterGenres from './FilterGenres';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import { useToast } from './ui/use-toast';


const Contents = () => {

    const Router = useRouter();
    const toast = useToast();
    const [movies, setMovies] = useState(null);

    const [webShows, setWebShows] = useState(null);

    const fetchMovies = async () => {
        const moviesList = await getMovies();
        console.log(moviesList.slice(0, 10));
        setMovies(moviesList.slice(0, 10));
        setWebShows(moviesList.slice(20, 30));
    }

    const handleToast = (message) => {
        console.log(message)
        toast({
            title: <span className='text-destructive'>{message}</span>,
        })
    }

    const handleFavourites = async (rank) => {
        const data = await addToFav(rank);
        console.log(data);
        handleToast(data.message);
    }

    useEffect(() => {
        fetchMovies();
        console.log('data fetching');
    }, [])

    return (
        <div className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            {/* first section */}
            <Navbar />
            {/* second section */}
            <div className='w-full relative h-[23rem]'>
                <img className='w-full h-full blackishBg' src='https://imgs.search.brave.com/yzCgKAOafpkAj4JT5KJgq_AVZU_AGU3P2cxYbeKVuOg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMvYXJ0/d29ya2ltYWdlcy9t/ZWRpdW0vMy9icmVh/a2luZy1iYWQtcGFp/bnRpbmctMi1wYXVs/LW1laWplcmluZy5q/cGc' alt='banner' />
                <div className='absolute top-[30%] translate-x-8 space-y-3 text-white '>
                    <h1 className='font-bold text-4xl'>Breaking Bad</h1>
                    <p className='font-medium text-lg'>World&apos;s Best Mafia Story <WordBreak /> Ever Seen</p>
                    <button className='flex items-center gap-2 hover:tracking-wider transition-all duration-500 ease-in-out bg-gray-100 text-black px-4 py-2 rounded-sm'><IoPlayCircleOutline className='text-2xl' />Watch Now</button>
                </div>
            </div>
            {/* third section */}
            <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Movies</h2>
                    <div className='flex items-center gap-6'>
                        <FilterGenres />
                        <div onClick={() => Router.push('/movieslist')} className='bg-gray-100 rounded-full px-6 py-2 cursor-pointer'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {movies?.map(item => {
                        return <div className='group min-w-[12rem] relative gradient-overlay' key={uuidv4()}>
                            <img src={item?.image} className='w-full' alt='movie img' />
                            <CiHeart onClick={() => { handleFavourites(item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                            <div className='absolute w-full bottom-2 text-center text-white'>
                                <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                <p className='font-medium text-xs'>{item?.genre[0]}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            {/* fourth section */}
            <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Web Series</h2>
                    <div className='flex items-center gap-6'>
                        <div className='bg-gray-100 rounded-full px-6 py-2'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {webShows?.map(item => {
                        return <div className='group min-w-[12rem] relative gradient-overlay' key={uuidv4()}>
                            <img src={item?.image} className='w-full' alt='movie img' />
                            <CiHeart className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                            <div className='absolute w-full bottom-2 text-center text-white'>
                                <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                <p className='font-medium text-xs'>{item?.genre[0]}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contents