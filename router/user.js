const router = require('express').Router();
const userController = require('./../controller/user');



router.post('/register', async (req, res) => {
    res.send(await userController.register(req.body));
});

router.post('/login', async (req, res) => {
    res.send(await userController.login(req.body));
});

router.get('/sent', async (req, res) => {
    res.send(await userController.mail(req.query.mail,req.query.subject,req.query.text));
});


module.exports = router;