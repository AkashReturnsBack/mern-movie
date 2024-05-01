import Sidebar from "@/components/Sidebar";
import SearchMovie from "@/components/SearchMovie";

export default function Page() {
    return <section className='flex'>
        <Sidebar />
        <SearchMovie />
    </section>
}