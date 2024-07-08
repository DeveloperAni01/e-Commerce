import mongoose, {Schema} from "mongoose"

const ownerSchema = new Schema ({
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
    address: [],
    products: {
        type: Array,
    },
    contactNo: {
        type: Number
    },
    gstIn: {
        type: String,
    }
},
{timestamps: true})


export const Owner = mongoose.model("Owner", ownerSchema)