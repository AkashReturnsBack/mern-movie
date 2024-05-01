'use client';

import React, { useState, useEffect } from 'react'
import HambergurMenu from './HambergurMenu';
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { getFavMovies } from '@/app/utils/getMovies';
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';




const Navbar = ({ setActiveFilter }) => {

    const { toast } = useToast();
    const router = useRouter();
    const [searchVal, setSearchVal] = useState('');

    const handleToast = () => {
        toast({
            title: <span className='text-destructive'>Feature Coming Soon!</span>,
            description: <span className='text-gray-500'>Thanks you for your Patience</span>,
        })
    }

    const handleSearchMovie = async (e) => {
        e.preventDefault();
        if (searchVal.trim() == '') {
            return;
        }
        setActiveFilter(searchVal);
        router.push(`/search?name=${searchVal}`)
    }

    return <div className='flex items-center justify-between'>
        <HambergurMenu />
        <form onSubmit={handleSearchMovie} className='bg-gray-100 flex px-4 py-3 items-center w-[72%] md:w-[50%]'>
            <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type='text' className='w-full bg-transparent outline-none' placeholder='Search...' />
            <CiSearch onClick={handleSearchMovie} className='text-2xl cursor-pointer' />
        </form>
        <div className='flex items-center md:w-[45%] lg:w-[30%] cursor-pointer justify-between'>
            <Link href='/favourites'>
                <div onClick={getFavMovies} className='group bg-gray-100 flex hover:tracking-widest active:scale-90 transition-all duration-500 ease-in-out items-center gap-1 w-fit px-4 py-3 rounded-full'>
                    <span className='hidden md:block'>Favourites</span>
                    <CiHeart className='group-hover:hidden text-xl' />
                    <IoMdHeart className='hidden group-hover:block group-hover:text-red-500  text-xl' />
                </div>
            </Link>
            <div onClick={handleToast} className='bg-gray-50 hidden hover:bg-black hover:text-white rounded-full hover:tracking-widest transition-all ease-in-out duration-500 md:flex items-center px-4 py-3 gap-2'>
                <FaCircleUser className='text-xl' /> Akash
            </div>
        </div>
    </div>
}

export default Navbar