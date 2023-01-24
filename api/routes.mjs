const {Router} = require('express');
import {getDataUsers, getDataUserById, addDataUser} from "../controller/controller.mjs";

export const router = Router();

router.get("/", getDataUsers);
router.post("/", addDataUser);
router.get("/:id", getDataUserById);