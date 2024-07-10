import express from "express"
import cors from "cors"
import ownerRouter from "./routes/owner.routes.js"
import userRouter from "./routes/user.routes.js"
import productRouter from "./routes/product.routes.js"

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


app.use("/e-commerce/api/v1", ownerRouter)
app.use("/e-commerce/api/v1/", userRouter)
app.use("/e-commerce/api/v1/", productRouter)
export {app}