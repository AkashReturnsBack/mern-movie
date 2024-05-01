'use client';

import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { CiHeart } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import SortMovies from './SortMovies';
import { useToast } from './ui/use-toast';
import Loader from './Loader';

const SearchMovie = () => {

    const { toast } = useToast();
    const [movies, setMovies] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    const handleToast = (message) => {
        toast({
            title: <span className={`${message == "Movie Added Successfully!" ? "text-green-400" : "text-destructive"}`}>{message}</span>,
            description: <span className='text-gray-500'>Thank you for your Patience</span>,
        })
    }

    const addToFav = async (rank) => {
        const res = await fetch('/api/favouriteMovies', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                rank: rank
            })
        })
        const data = await res.json();
        console.log(data);
        handleToast(data.message);
    }

    const searchMovieFunc = async () => {
        const res = await fetch(`/api/searchMovies?name=${activeFilter}`);
        const data = await res.json();
        console.log(data)
        setMovies(data.data);
    }

    useEffect(() => {
        searchMovieFunc();
    }, [activeFilter])

    return (
        <section className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            <Navbar setActiveFilter={setActiveFilter} />
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl flex'>Search Result for - {" "}<span className={`${activeFilter ? "block" : "hidden"}`}> -  {activeFilter} ({movies?.length} Results Found!) </span></h2>
                <SortMovies setMovies={setMovies} setActiveFilter={setActiveFilter} />
            </div>
            <div className='flex flex-wrap h-full gap-8'>
                {movies?.map(item => {
                    return <div className='group min-w-[9rem] max-w-[9rem] relative gradient-overlay' key={uuidv4()}>
                        <img src={item?.image} className='w-full' alt='movie img' />
                        <CiHeart onClick={() => addToFav(item?.rank)} className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer text-4xl' />
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

export default SearchMovie;