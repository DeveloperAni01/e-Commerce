import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
    image: {
        type: String,
        required: true,

    },
    name : {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
    },
    bgColor: {
        type: String
    },
    paneColor: {
        type: String,
    },
    textColor: {
        type: String,
    }
})


export const Product = mongoose.model("Product", productSchema)