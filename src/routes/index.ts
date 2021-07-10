import express from "express";
import UserRouter from "./user.route";

const router = express.Router();
 
router.use("/users", UserRouter)

export default router;
