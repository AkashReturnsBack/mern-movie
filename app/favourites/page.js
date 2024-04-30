import Contents from "@/components/Contents";
import Favourites from "@/components/Favourites";
import Home from "@/components/Home.jsx";
import MoviesList from "@/components/MoviesList";
import Sidebar from "@/components/Sidebar";

export default function Page() {
    return <section className='flex'>
        <Sidebar />
        <Favourites />
    </section>
}