const router = require('express').Router();
const cityController = require('./../controller/city');



router.post('/add', async (req, res) => {
	const response = await cityController.add(req.body);
	res.send(response);
})
router.post('/addmany', async (req, res) => {
	const response = await cityController.addMany();
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await cityController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await cityController.fetchdata(req.query.id);
	res.send(response);
})

router.delete('/delete', async (req, res) => {
	const response = await cityController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await cityController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggreation', async (req, res) => {
	const response = await cityController.aggregation();
	res.send(response);
})
module.exports = router;