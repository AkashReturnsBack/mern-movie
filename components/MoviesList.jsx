'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { CiHeart } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import SortMovies from './SortMovies';
import { useToast } from './ui/use-toast';
import { addToFav, getMovies } from '@/app/utils/getMovies';
import Loader from './Loader';

const MoviesList = () => {

    const { toast } = useToast();
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    const fetchMovies = async () => {
        const moviesList = await getMovies();
        setMovies(moviesList);
    }

    const handleToast = (message) => {
        toast({
            title: <span className={`${message == "Movie Added Successfully!" ? "text-green-400" : "text-destructive"}`}>{message}</span>,
            description: <span className='text-gray-500'>Thank you for your Patience</span>,
        })
    }

    useEffect(() => {
        fetchMovies();
        console.log('data fetching');
    }, [])

    const handleFavourites = async (event, rank) => {
        event.stopPropagation();
        const data = await addToFav(rank);
        console.log(data);
        handleToast(data.message);
    }

    const handleOpenMovie = (rank) => {
        Router.push(`/movie?rank=${rank}`);
    }

    return (
        <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            <Navbar setActiveFilter={setActiveFilter} />
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl flex'>All Movies {" "}<span className={`${activeFilter ? "block" : "hidden"}`}> - ( {activeFilter} )</span></h2>
                <SortMovies setMovies={setMovies} setActiveFilter={setActiveFilter} />
            </div>
            <div className='flex flex-wrap h-full gap-8'>
                {movies ? movies?.map(item => {
                    return <div key={uuidv4()} onClick={() => handleOpenMovie(item.rank)} className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay'>
                        <img src={item?.image} className='w-full' alt='movie img' />
                        <FaHeart onClick={(e) => { handleFavourites(e, item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-red-500 active:text-white transition-all duration-1000 ease-in-out font-extrabold cursor-pointer text-2xl' />
                        <div className='absolute w-full bottom-2 text-center text-white'>
                            <h2 className='font-semibold text-sm'>{item?.title}</h2>
                            <p className='font-medium text-xs'>{item?.genre.join(', ')}</p>
                        </div>
                    </div>
                }) : <Loader />}
            </div>
        </section>
    )
}

export default MoviesList