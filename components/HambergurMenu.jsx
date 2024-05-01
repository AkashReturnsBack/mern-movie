import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiMiniHome } from "react-icons/hi2";
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { useToast } from './ui/use-toast';
import Link from "next/link";

const HambergurMenu = () => {

    const { toast } = useToast();
    const handleToast = () => {
        toast({
            title: <span className='text-destructive'>Feature Coming Soon!</span>,
            description: <span className='text-gray-500'>Thanks you for your Patience</span>,
        })
    }

    return <Sheet>
        <SheetTrigger asChild>
            <RxHamburgerMenu className='block md:hidden flex-shrink-0' />
        </SheetTrigger>
        <SheetContent className='flex flex-col justify-between'>
            <SheetHeader>
                <SheetTitle className='text-3xl font-bold border-b-[1px] pb-4 pt-4 text-start border-black'>Movies</SheetTitle>
                <div className='border-b-[1px] border-black py-4'>
                    <Link href='/'><div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><HiMiniHome className='flex-shrink-0' /> Home</div></Link>
                    <Link href='/movieslist'><div className='flex items-center gap-2 py-2 px-2 hover:bg-black hover:opacity-90 rounded-sm hover:text-white cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><FaRegCirclePlay className='flex-shrink-0' /> Movies</div></Link>
                    <Link href='/webseries'><div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><TbMovie className='flex-shrink-0' /> Series</div></Link>
                    <Link href='/favourites'><div className='flex items-center gap-2 py-2 px-2 hover:bg-white hover:opacity-90 rounded-sm hover:text-black cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><GoHeart className='flex-shrink-0' /> Favourites</div></Link>
                </div>
                <div className='border-b-[1px] border-black py-4'>
                    <h2 className='font-semibold text-xl text-start'>Account</h2>
                    <div onClick={handleToast} className='flex items-center gap-2 py-2 px-2 hover:bg-black hover:opacity-90 rounded-sm hover:text-white cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><FaCircleUser className='flex-shrink-0' /> Akash</div>
                    <div onClick={handleToast} className='flex items-center gap-2 py-2 px-2 hover:bg-black hover:opacity-90 rounded-sm hover:text-white cursor-pointer transition-all duration-500 ease-in-out hover:tracking-widest'><FaRegCircleUser className='flex-shrink-0' /> Raman</div>
                </div>
            </SheetHeader>
            <SheetFooter>
                <SheetClose asChild>
                    <button onClick={handleToast} className='flex w-fit items-center gap-2 py-2 px-2 hover:bg-destructive hover:opacity-90 transition-all duration-500 ease-in-out hover:tracking-widest hover:text-white rounded-sm cursor-pointer'><AiOutlineLogout className='flex-shrink-0' />Log Out</button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
}

export default HambergurMenu