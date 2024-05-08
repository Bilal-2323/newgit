import mongoose from "mongoose";


const menuschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})


export default mongoose.model("Menu", menuschema);