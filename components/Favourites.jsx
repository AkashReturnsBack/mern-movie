'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { CiHeart } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { addToFav } from '@/app/utils/getMovies';
import { getFavMovies } from '@/app/utils/getMovies';

const Favourites = () => {

    const [movies, setMovies] = useState(null);

    async function handleFetchMovies() {
        const favMovies = await getFavMovies();
        setMovies(favMovies);
    }

    useEffect(() => {
        handleFetchMovies();
    }, [])

    return (
        <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            <Navbar />
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Favourites</h2>
                <div className='flex items-center bg-gray-100 active:scale-90 transition-all duration-500 cursor-pointer ease-in-out gap-2 rounded-full px-6 py-2'>Sort <BiSortAlt2 className='text-2xl' /></div>
            </div>
            <div className='flex flex-wrap h-full gap-8'>
                {movies?.map(item => {
                    return <div className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay' key={uuidv4()}>
                        <img src={item?.image} className='w-full' alt='movie img' />
                        <CiHeart onClick={() => { addToFav(item?.rank); handleFetchMovies() }} className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer text-4xl' />
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