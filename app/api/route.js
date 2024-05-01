import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully!'))
    .catch(err => console.log(err.message));

export async function GET() {

    return Response.json({
        success: true,
        message: "Backend Created Successfully"
    })
}