'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { CiHeart } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import SortMovies from './SortMovies';
import { useToast } from './ui/use-toast';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loader from './Loader';
import { addToFav } from '@/app/utils/getMovies';


const SearchMovie = () => {

    const { toast } = useToast();
    const searchParams = useSearchParams();
    const movieName = searchParams.get('name');
    console.log(movieName)
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

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

    const searchMovieFunc = async () => {
        const res = await fetch(`/api/searchMovies?name=${movieName}`);
        const data = await res.json();
        console.log(data)

        setMovies(data.data);
    }

    useEffect(() => {
        searchMovieFunc();
    }, [movieName])

    return (
        <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            <Navbar setActiveFilter={setActiveFilter} />
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl flex'>Search Result for {" "} -<span className={`${movieName ? "block" : "hidden"} capitalize`}>  {" " + movieName} <span className={`text-gray-400`}>({Array.isArray(movies) ? movies?.length : 0} Results Found!)</span> </span></h2>
            </div>
            <div className='flex flex-wrap gap-8'>
                {movies ? movies == 'No Movies Found!' ? <div className='font-semibold m-auto py-12 text-3xl'>No Movies Found!</div> : movies?.map(item => {
                    return (
                        <div key={uuidv4()} onClick={() => handleOpenMovie(item.rank)} className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay'>
                            <img src={item?.image} className='w-full' alt='movie img' />
                            <CiHeart onClick={(e) => { handleFavourites(e, item?.rank) }} className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                            <div className='absolute w-full bottom-2 text-center text-white'>
                                <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                <p className='font-medium text-xs'>{item?.genre.join(', ')}</p>
                            </div>
                        </div>
                    )
                }) : <Loader />}
            </div>
        </section>
    )
}

const SearchMovieSuspense = () => {
    return <Suspense>
        <SearchMovie />
    </Suspense>
}
export default SearchMovieSuspense;