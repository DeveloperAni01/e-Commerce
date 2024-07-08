import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: `${process.env.JSON_LIMIT}kb`}))
app.use(express.urlencoded(
    {
        extended: false,
        limit: `${process.env.JSON_LIMIT}kb`
    }))


app.get("/",(req, res) => {
    res.send("Everthing is working fine !!")
})

export {app}