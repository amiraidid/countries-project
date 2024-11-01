const express = require('express')
const dataController = require('../Controllers/dataController')

const router = express.Router();

router.route('/countries').get(dataController.countries);
router.route('/country/:name').get(dataController.country)
router.route('/region/:region').get(dataController.regions)


module.exports = router