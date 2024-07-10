import {Router} from "express"

const router = Router()

router.route("/users")
    .get((req, res) => {
        res.send("Users are here")
    })


export default router