const {Router} = require('express');
const controller = require('../controller/login-controller');

const router = Router();

router.get("/", controller.getDataUsers);
router.post("/", controller.addDataUser);
router.get("/:id", controller.getDataUserById);

module.exports = router;