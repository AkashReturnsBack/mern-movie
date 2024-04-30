import mongoose from "mongoose";
import Movie from '../models/movie.model';

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully!'))
    .catch(err => console.log(err.message));

export async function GET(request) {

    const params = await request.nextUrl.searchParams.get("sort");
    const sort = Number(params);

    if (sort == 1) {
        try {
            const movies = await Movie.find({}).sort({ year: 1 })
            return Response.json({
                success: true,
                data: movies
            })
        }
        catch (err) {
            console.log(err);
            return Response.json({
                success: false,
            })
        }
    }
    try {
        const movies = await Movie.find({}).sort({ year: -1 });
        return Response.json({
            success: true,
            data: movies
        })
    }
    catch (err) {
        console.log(err);
        return Response.json({
            success: false,
        })
    }
}