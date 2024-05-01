import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const FilterGenres = ({ setMovies, setWebShows }) => {

    const handleGenre = async (e) => {
        const genre = e.target.innerText;
        const res = await fetch(`/api/filterGenre?genre=${genre}`);
        const data = await res.json();
        console.log(data);
        setMovies ? setMovies(data.data) : setWebShows(data.data);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='flex items-center gap-1 bg-gray-100 px-6 py-2 rounded-full'>Filter <IoIosArrowDown className='text-xl ' /></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='font-montserrat'>
                <DropdownMenuLabel className='font-semibold text-lg'>Genres</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleGenre} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Crime</DropdownMenuItem>
                <DropdownMenuItem onClick={handleGenre} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Drama</DropdownMenuItem>
                <DropdownMenuItem onClick={handleGenre} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Action</DropdownMenuItem>
                <DropdownMenuItem onClick={handleGenre} className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Adventure</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterGenres

