import express from "express";

import {
    showUsers,
    showUsersById,
    createUser
} from "../controllers/UserCont.js";

const router = express.Router();

//users
router.get("/users", showUsers);
router.get("/users:id", showUsersById);
router.post("/user", createUser);

export default router;