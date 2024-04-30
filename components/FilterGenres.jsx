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


const FilterGenres = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className='flex items-center gap-1 bg-gray-100 px-6 py-2 rounded-full'>Filter <IoIosArrowDown className='text-xl ' /></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='font-montserrat'>
                <DropdownMenuLabel className='font-semibold text-lg'>Genres</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Crime</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Drama</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Action</DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out' >Adventure</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default FilterGenres

