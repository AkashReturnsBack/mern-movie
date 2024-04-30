import mongoose from "mongoose";

const favouriteSchema = mongoose.Schema({
    rank: {
        type: Number,
        required: true,
        unique: true,
    }
})

export default mongoose.model('Favourite', favouriteSchema);