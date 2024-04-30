import Sidebar from "@/components/Sidebar"
import Home from "../components/Home"
import Contents from "@/components/Contents"

export default function Page() {
  return <section className='flex'>
    <Sidebar />
    <Contents />
  </section>
}
