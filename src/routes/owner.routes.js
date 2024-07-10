import { Router } from "express";


const router = Router()

router.route("/owners")
    .get((req, res) => {
        res.send("owners are here")
    })

export default router