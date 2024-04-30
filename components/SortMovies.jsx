import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BiSortAlt2 } from 'react-icons/bi';


const SortByRating = ({ setMovies, setActiveFilter }) => {

    const handleSortByRank = async (e) => {
        if (e.target.innerText == "High Rated") {
            try {
                const res = await fetch('/api/filterRank?sort=1');
                const data = await res.json();
                console.log(data);
                setMovies(data.data);
                setActiveFilter('High Rated')
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            try {
                const res = await fetch('/api/filterRank?sort=-1');
                const data = await res.json();
                console.log(data);
                setMovies(data.data);
                setActiveFilter('Low Rated')
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    const handleSortByYear = async (e) => {
        if (e.target.innerText == "Latest") {
            try {
                const res = await fetch('/api/filterYear?sort=-1');
                const data = await res.json();
                console.log(data);
                setMovies(data.data);
                setActiveFilter('Latest')
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            try {
                const res = await fetch('/api/filterYear?sort=1');
                const data = await res.json();
                console.log(data);
                setMovies(data.data);
                setActiveFilter('Old')
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='flex items-center bg-gray-100 active:scale-90 transition-all duration-500 cursor-pointer ease-in-out gap-2 rounded-full px-6 py-2'>Sort <BiSortAlt2 className='text-2xl' /></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='font-montserrat'>
                <DropdownMenuLabel className='font-semibold text-[16px]'>Genres</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSortByRank} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >High Rated <IoIosArrowRoundUp /></DropdownMenuItem>
                <DropdownMenuItem onClick={handleSortByRank} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Low Rated <IoIosArrowRoundDown /></DropdownMenuItem>
                <DropdownMenuItem onClick={handleSortByYear} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Latest<IoIosArrowRoundUp /></DropdownMenuItem>
                <DropdownMenuItem onClick={handleSortByYear} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Old<IoIosArrowRoundDown /></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SortByRating

