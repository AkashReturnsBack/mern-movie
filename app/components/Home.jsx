import React from 'react'
import Sidebar from './Sidebar';
import Contents from './Contents';
import { getMovies } from '@/app/utils/getMovies.js';

const Home = () => {

    return (
        <section className='flex'>
            <Sidebar />
            <Contents />
        </section>
    )
}

export default Home