'use client';

import React, { useEffect, useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { CiHeart } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { addToFav, getMovies } from '@/app/utils/getMovies';
import SortMovies from './SortMovies';
import { useToast } from './ui/use-toast';
import Loader from './Loader';

const WebSeries = () => {

    const { toast } = useToast();
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    async function handleFetchMovies() {
        const favMovies = await getMovies();
        setMovies(favMovies.slice(0, 50));
    }

    const handleToast = (message) => {
        toast({
            title: <span className={`${message == "Movie Added Successfully!" ? "text-green-400" : "text-destructive"}`}>{message}</span>,
            description: <span className='text-gray-500'>Thank you for your Patience</span>,
        })
    }

    const handleFavourites = async (event, rank) => {
        event.stopPropagation();
        const data = await addToFav(rank);
        console.log(data);
        handleToast(data.message);
    }

    const handleOpenMovie = (rank) => {
        Router.push(`/movie?rank=${rank}`);
    }

    useEffect(() => {
        handleFetchMovies();
        console.log('fetching data');
    }, [])


    return <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
        <Navbar setActiveFilter={setActiveFilter} />
        <div className='flex justify-between'>
            <h2 className='font-semibold text-2xl flex'>Web Series {" "}<span className={`${activeFilter ? "block" : "hidden"}`}> - ( {activeFilter} )</span></h2>
            <SortMovies setMovies={setMovies} setActiveFilter={setActiveFilter} />
        </div>
        <div className='flex flex-wrap gap-8'>
            {movies ? movies?.map(item => {
                return <div key={uuidv4()} onClick={() => handleOpenMovie(item.rank)} className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay'>
                    <img src={item?.image} className='w-full' alt='movie img' />
                    <CiHeart onClick={(e) => { handleFavourites(e, item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-white active:text-red-500 transition-all duration-1000 ease-in-out font-extrabold cursor-pointer text-3xl' />
                    <div className='absolute w-full bottom-2 text-center text-white'>
                        <h2 className='font-semibold text-sm'>{item?.title}</h2>
                        <p className='font-medium text-xs'>{item?.genre.join(', ')}</p>
                    </div>
                </div>
            }) : <Loader />}
        </div>
    </section>
}

export default WebSeries