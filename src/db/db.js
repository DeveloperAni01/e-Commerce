import mongoose from "mongoose"
import { DB_NAME } from "../utils/constants.js"
import debug from "debug" 

const debuger = debug("development:mongoose")

const connectToDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        debuger("MongoDB Connected !! Host: ", connectionInstance.connection.host);
    } catch (error) {
       debuger("MonngoDB connection error", error);
        process.exit(1)
    }
}

export {connectToDB}