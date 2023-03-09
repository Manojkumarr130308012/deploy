const router = require('express').Router();
const countryController = require('./../controller/country');




router.post('/add', async (req, res) => {
	const response = await countryController.add(req.body);
	res.send(response);
})
router.post('/addmany', async (req, res) => {
	const response = await countryController.addMany();
	res.send(response);
})
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await countryController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await countryController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchcountrydata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await countryController.fetchcountrydata(req.query.country_stateid);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await countryController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await countryController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;