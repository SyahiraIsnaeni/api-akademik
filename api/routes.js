const {Router} = require('express');
const controller = require('../controller/controller');

const router = Router();

router.get("/", controller.getDataUsers);
router.post("/", controller.addDataUser);
router.get("/:id", controller.getDataUserById);

module.exports = router;