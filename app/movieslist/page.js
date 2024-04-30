import Contents from "@/components/Contents";
import Home from "@/components/Home.jsx";
import Sidebar from "@/components/Sidebar";

export default function Page() {
    return <section className='flex'>
        <Sidebar />
        <Contents />
    </section>
}