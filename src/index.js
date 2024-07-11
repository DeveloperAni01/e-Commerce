import dotenv from "dotenv"
import { app } from "./app.js"
import { connectToDB } from "./db/db.js"
import debug from "debug"

const debuger = debug("development:index")

dotenv.config({
    path: "./env"
})


connectToDB()
    .then(() => {
        app.on("error", (err) => {
           debuger("error: ", err)
            throw err
        })
        app.listen(process.env.PORT || 8000, () => debuger("server listeninng on PORT: ", process.env.PORT))
    } )
    .catch((Error) => debuger("Mongodb on error"))
