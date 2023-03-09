const router = require('express').Router();
const userController = require('./../controller/user');



router.post('/register', async (req, res) => {
    res.send(await userController.register(req.body));
});

router.post('/login', async (req, res) => {
    res.send(await userController.login(req.body));
});

router.get('/login1', async (req, res) => {
    res.send(await userController.login1(req.query.username,req.query.password));
});
router.get('/sent', async (req, res) => {
    res.send(await userController.mail(req.query.mail,req.query.subject,req.query.text));
});

router.post('/add', async (req, res) => {
	const response = await userController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await userController.fetch(req.body);
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await userController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await userController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await userController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;