const router = require('express').Router();
const locationController = require('../controller/location_add');




router.post('/add', async (req, res) => {
	const response = await locationController.add(req.body);
	res.send(response);
})

router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await locationController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await locationController.fetchdata(req.query.id);
	res.send(response);
})
router.get('/fetchlocationdata', async (req, res) => {
	//res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await locationController.fetchlocationdata(req.query.country_stateid);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await locationController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await locationController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;