import mongoose from "mongoose";
import Movie from "../models/movie.model";

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully!'))
    .catch(err => console.log(err.message));

export async function GET(request) {
    const genre = await request.nextUrl.searchParams.get("genre")
    const movies = await Movie.find({ genre: { $regex: genre, $options: 'i' } })
    console.log(movies)
    return Response.json({ success: true, data: movies }, { status: 201 })
}