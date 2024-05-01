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
import Loader from './Loader';
import Link from 'next/link';


const Contents = () => {

    const Router = useRouter();
    const { toast } = useToast();
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);
    const [webShows, setWebShows] = useState(null);

    const fetchMovies = async () => {
        const moviesList = await getMovies();
        console.log(moviesList.slice(0, 10));
        setMovies(moviesList.slice(0, 10));
        setWebShows(moviesList.slice(20, 30));
    }


    const handleToast = (message) => {
        toast({
            title: <span className={`${message == "Movie Added Successfully!" ? "text-green-400" : "text-destructive"}`}>{message}</span>,
            description: <span className='text-gray-500'>Thank you for your Patience</span>,
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
            <Navbar setActiveFilter={setActiveFilter} />
            {/* second section */}
            <div className='w-full relative h-[23rem]'>
                <div className='absolute top-0 left-0 w-full h-full gradient-bg rounded-lg'></div>
                <img className='w-full h-full' src='https://imgs.search.brave.com/eHQnLDwLjrIVZ1aLjsH3ylgFY64CqKsKBItFYFMnxb4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE5ZVRIanpXeEwu/anBn' alt='banner' />
                <div className='absolute top-[30%] translate-x-8 space-y-3 text-white '>
                    <h1 className='font-bold text-4xl'>Breaking Bad</h1>
                    <p className='font-medium text-lg'>World&apos;s Best Mafia Story <WordBreak /> Ever Seen</p>
                    <button onClick={() => Router.push(`/movie?rank=0`)} className='flex items-center gap-2 hover:tracking-wider transition-all duration-500 ease-in-out bg-gray-100 text-black px-4 py-2 rounded-sm'><IoPlayCircleOutline className='text-2xl' />Watch Now</button>
                </div>
            </div>
            {/* third section */}
            <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Movies</h2>
                    <div className='flex items-center gap-6'>
                        <FilterGenres setMovies={setMovies} />
                        <div onClick={() => Router.push('/movieslist')} className='bg-gray-100 rounded-full px-6 py-2 cursor-pointer'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {movies ? movies?.map(item => {
                        return <Link key={uuidv4()} href={`/movie?rank=${item?.rank}`} className='relative'>
                            <div className='absolute top-0 left-0 w-full h-full gradient-bg rounded-lg'></div>
                            <div className='group min-w-[12rem] relative gradient-overlay cursor-pointer'>
                                <img src={item?.image} className='w-full' alt='movie img' />
                                <CiHeart onClick={() => { handleFavourites(item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                                <div className='absolute w-full bottom-2 text-center text-white'>
                                    <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                    <p className='font-medium text-xs'>{item?.genre.join(', ')}</p>
                                </div>
                            </div>
                        </Link>
                    }) : <Loader />}
                </div>
            </div>
            {/* fourth section */}
            <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Web Series</h2>
                    <div className='flex items-center gap-6'>
                        <FilterGenres setWebShows={setWebShows} />
                        <div onClick={() => Router.push('/webseries')} className='bg-gray-100 rounded-full px-6 py-2 cursor-pointer'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {webShows ? webShows?.map(item => {
                        return <Link key={uuidv4()} href={`/movie?rank=${item?.rank}`} className='relative'>
                            <div className='absolute top-0 left-0 w-full h-full gradient-bg rounded-lg'></div>
                            <div className='group min-w-[12rem] relative gradient-overlay'>
                                <img src={item?.image} className='w-full' alt='movie img' />
                                <CiHeart className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                                <div className='absolute w-full bottom-2 text-center text-white'>
                                    <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                    <p className='font-medium text-xs'>{item?.genre[0]}</p>
                                </div>
                            </div>
                        </Link>
                    }) : <Loader />}
                </div>
            </div>
        </div>
    )
}

export default Contents