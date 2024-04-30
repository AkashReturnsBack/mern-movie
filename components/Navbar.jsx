import React from 'react'
import HambergurMenu from './HambergurMenu';
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { getFavMovies } from '@/app/utils/getMovies';
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';


const Navbar = () => {

    return <div className='flex items-center justify-between'>
        <HambergurMenu />
        <div className='bg-gray-100 flex px-4 py-3 items-center w-[72%] md:w-[50%]'>
            <input type='text' className='w-full bg-transparent outline-none' placeholder='Search...' />
            <CiSearch className='text-2xl' />
        </div>
        <div className='flex items-center md:w-[45%] lg:w-[30%] cursor-pointer justify-between'>
            <Link href='/favourites'>
                <div onClick={getFavMovies} className='group bg-gray-100 flex hover:tracking-widest active:scale-90 transition-all duration-500 ease-in-out items-center gap-1 w-fit px-4 py-3 rounded-full'>
                    <span className='hidden md:block'>Favourites</span>
                    <CiHeart className='group-hover:hidden text-xl' />
                    <IoMdHeart className='hidden group-hover:block group-hover:text-red-500  text-xl' />
                </div>
            </Link>
            <div className='bg-gray-50 hidden hover:bg-black hover:text-white rounded-full hover:tracking-widest transition-all ease-in-out duration-500 md:flex items-center px-4 py-3 gap-2'>
                <FaCircleUser className='text-xl' /> Akash
            </div>
        </div>
    </div>
}

export default Navbar