import Sidebar from "@/components/Sidebar";
import SearchMovie from "@/components/SearchMovie";
import MoviePage from "@/components/MoviePage";

export default function Page() {
    return <section className='flex'>
        <Sidebar />
        <MoviePage />
    </section>
}