import mongoose from 'mongoose';
import Movie from '../models/movie.model';

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DataBase connected successfully'))
    .catch(err => console.log(err));

export async function GET(request) {
    const movieName = await request.nextUrl.searchParams.get('name');

    try {
        const movies = await Movie.find({ title: { $regex: movieName, $options: "i" } })
        console.log(movies);
        if (movies.length == 0) {
            return Response.json({
                success: true,
                data: "No Movies Found!"
            }, { status: 200 })
        }
        return Response.json({
            success: true,
            data: movies,
        }, { status: 200 });
    }
    catch (err) {
        console.log(err)
    }
}

export async function POST(request) {
    const { rank } = await request.json();
    try {
        const movie = await Movie.find({ rank });
        return Response.json({
            success: true,
            data: { ...movie }
        }, { status: 200 })
    }
    catch (err) {
        console.log(err);
    }
}