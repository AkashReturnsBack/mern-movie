import Contents from "@/components/Contents";
import Home from "@/components/Home.jsx";
import MoviesList from "@/components/MoviesList";
import Sidebar from "@/components/Sidebar";
import WebSeries from "@/components/WebSeries";

export default function Page() {
    return <section className='flex'>
        <Sidebar />
        <WebSeries />
    </section>
}