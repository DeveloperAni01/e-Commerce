import dotenv from "dotenv"
import { app } from "./app.js"
import { connectToDB } from "./db/db.js"


dotenv.config({
    path: "./env"
})


connectToDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("error: ", err)
            throw err
        })
        app.listen(process.env.PORT || 8000, () => console.log("server listeninng on PORT: ", process.env.PORT))
    } )
    .catch((Error) => console.log("Mongodb on error"))
