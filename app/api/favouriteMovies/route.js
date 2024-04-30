import mongoose from "mongoose";
import Favourite from "../models/favourite.model.js";
import Movie from '../models/movie.model.js';

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully!'))
    .catch(err => console.log(err.message));


export async function POST(request) {
    const { rank } = await request.json();

    try {
        await Favourite.create({ rank });
        console.log('Movie Added Successfully')
    }
    catch (err) {
        console.log(err);
        return Response.json({
            success: false,
        })
    }

    return Response.json({
        success: true,
    })
}

export async function GET(request) {

    const FavMovies = await Favourite.find({}, 'rank');
    const movieRanks = await FavMovies.map(item => item.rank);

    const FavMoviesList = await Movie.find({ rank: { $in: movieRanks } });

    console.log(FavMoviesList);

    return Response.json({
        success: true,
        data: FavMoviesList
    })
}

export async function DELETE(request) {
    const { rank } = await request.json();

    await Favourite.deleteOne({ rank });
    const movies = await Favourite.find({});

    return Response.json({
        success: true,
        data: movies
    })
}
