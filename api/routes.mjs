const {Router} = require('express');
const controller = require('../controller/controller.mjs');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUsersById);

module.exports = router;