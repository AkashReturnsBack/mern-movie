import mongoose from "mongoose"
import Movie from "../models/movie.model.js";
import fs from 'fs/promises';
import path from "path";


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully!'))
    .catch(err => console.log(err.message));

export async function POST() {

    try {
        const movieDataPath = path.join(process.cwd(), "/app/api/movieData.json");
        const movieData = await fs.readFile(movieDataPath, 'utf-8');
        const parsedMovieData = JSON.parse(movieData);

        const moviesToSave = [];

        for (const movie of parsedMovieData) {
            const newMovie = new Movie(movie);
            moviesToSave.push(newMovie);
        }

        await Movie.insertMany(moviesToSave);
        console.log('Movies saved successfully!');

        return Response.json({
            success: true,
            message: "Movies uploaded successfully!",
            data: moviesToSave
        });

    } catch (err) {
        console.error(err);
        return Response.json({
            success: false,
            message: "Error uploading movies",
        });
    } finally {
        // Close the MongoDB connection (optional, but recommended for long-running processes)
        await mongoose.connection.close();
    }
}

export async function GET() {

    const movies = await Movie.find({});

    return Response.json({
        success: true,
        data: movies
    })
}