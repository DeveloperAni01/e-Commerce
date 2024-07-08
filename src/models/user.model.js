import mongoose, {Schema} from "mongoose"

const userSchema = new Schema ({
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    aaddress: [],
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    contactNo: {
        type: Number
    }
},
{timestamps: true})


export const User = mongoose.model("User", userSchema)