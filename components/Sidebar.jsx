import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {

    return (
        <div className='w-[25%] hidden font-montserrat px-9 py-4 bg-black text-white md:flex flex-col justify-between'>
            <div>
                <h1 className='text-3xl font-bold border-b-[1px] pb-4 border-white'>Movies</h1>
                <div className='border-b-[1px] border-white py-4'>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><HiMiniHome className='flex-shrink-0' /> Home</div>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><FaRegCirclePlay className='flex-shrink-0' /> Movies</div>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><TbMovie className='flex-shrink-0' /> Series</div>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><GoHeart className='flex-shrink-0' /> Favourites</div>
                </div>
                <div className='border-b-[1px] border-white py-4'>
                    <h2 className='font-semibold text-xl'>Account</h2>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 transition-all duration-500 ease-in-out hover:tracking-widest hover:text-black rounded-sm cursor-pointer'><FaCircleUser className='flex-shrink-0' /> Akash</div>
                    <div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 transition-all duration-500 ease-in-out hover:tracking-widest hover:text-black rounded-sm cursor-pointer'><FaRegCircleUser className='flex-shrink-0' /> Raman</div>
                </div>
            </div>
            <div className='flex w-fit items-center gap-2 py-2 px-2 hover:bg-destructive hover:opacity-90 transition-all duration-500 ease-in-out hover:tracking-widest hover:text-white rounded-sm cursor-pointer'><AiOutlineLogout className='flex-shrink-0' />Log Out</div>
        </div>
    )
}

export default Sidebar