import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    big_image: {
        type: String,
    },
    genre: {
        type: [String],
    },
    thumbnail: {
        type: String,
    },
    rating: {
        type: String,
    },
    id: {
        type: String,
    },
    year: {
        type: Number,
    },
    imdbid: {
        type: String,
    },
    imdb_link: {
        type: String,
    }
})

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;