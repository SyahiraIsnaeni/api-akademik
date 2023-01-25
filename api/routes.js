const {Router} = require('express');
const registerController = require('../controller/register-controller');
const loginController = require('../controller/login-controller');

const router = Router();

router.get("/register", registerController.getDataUsers);
router.post("/register", registerController.addDataUser);
router.post("/login", loginController.checkDataUser);
router.get("/login", loginController.getDataUsers);
router.get("/:id", registerController.getDataUserById);

module.exports = router;