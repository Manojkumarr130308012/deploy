const router = require("express").Router();
const authController = require('./../controller/auth');

//REGISTER
router.post("/register", async (req, res) => {
    res.send(await authController.register(req.body));
});

//LOGIN
router.post("/login", async (req, res) => {
    res.send(await authController.login(req));
});

module.exports = router;