import mongoose from "mongoose"
import { DB_NAME } from "../utils/constants.js"

const connectToDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB Connected !! Host: ", connectionInstance.connection.host);
    } catch (error) {
        console.log(console.log("MonngoDB connection error", error));
        process.exit(1)
    }
}

export {connectToDB}