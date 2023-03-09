const router = require('express').Router();
const statesController = require('./../controller/states');



router.post('/add', async (req, res) => {
	const response = await statesController.add(req.body);
	res.send(response);
})
router.post('/addmany', async (req, res) => {
	const response = await statesController.addMany();
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await statesController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await statesController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcountrydata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await statesController.fetchcountrydata(req.query.country_stateid);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await statesController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await statesController.update(req.query.id, req.body);
	res.send(response);
})
router.get('/aggreation', async (req, res) => {
	const response = await statesController.aggregation();
	res.send(response);
})
module.exports = router;