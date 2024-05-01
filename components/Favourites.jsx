'use client';

import React, { useEffect, useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { addToFav } from '@/app/utils/getMovies';
import { getFavMovies } from '@/app/utils/getMovies';
import { useToast } from './ui/use-toast';

const Favourites = () => {
    const { toast } = useToast();

    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    const handleToast = (message) => {
        toast({
            title: <span className='text-destructive'>{message}</span>,
            description: <span className='text-gray-500'>Thanks you for your Patience</span>,
        })
    }

    async function handleFetchMovies() {
        const favMovies = await getFavMovies();
        setMovies(favMovies);
    }

    useEffect(() => {
        handleFetchMovies();
    }, [])

    const handleRemoveFromFav = async (rank) => {
        const data = await addToFav(rank);
        handleFetchMovies();
        handleToast(data.message);
    }

    return (
        <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            <Navbar setActiveFilter={setActiveFilter} />
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Favourites</h2>
            </div>
            <div className='flex flex-wrap h-full gap-8'>
                {movies?.map(item => {
                    return <div className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay' key={uuidv4()}>
                        <img src={item?.image} className='w-full' alt='movie img' />
                        <FaHeart onClick={() => { handleRemoveFromFav(item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-red-500 active:text-white transition-all duration-1000 ease-in-out font-extrabold cursor-pointer text-2xl' />
                        <div className='absolute w-full bottom-2 text-center text-white'>
                            <h2 className='font-semibold text-sm'>{item?.title}</h2>
                            <p className='font-medium text-xs'>{item?.genre[0]}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Favourites;