import {Router} from "express"

const router = Router()

router.route("/products")
    .get((req, res) => {
        res.send("Products are here!!")
    })



export default router