const express = require('express')
const router = express.Router()
const cityData = require('../data/cityData');


// const cityData = require('../data/cityData')
// router.get('/', (request, response) => {
//     response.status(200).json(cityData)
// })

const {getAllCityData, addNewCityData, getCityById, updateCityData, deleteCityData} = require('../controllers/cityController')
const dataEntryLogger = require('../middlewares/dataEntryLogger')

router.get('/getCityData', getAllCityData)
// To access -> http://localhost:3000/api/v1/Cities/getCityData
router.post('/addCityData', addNewCityData);
// To Add/POST new data -> http://localhost:3000/api/v1/Cities/addCityData

router.get('/getCityById/:id', dataEntryLogger, getCityById)

router.put('/updateCityData/:id',updateCityData)

router.delete('/deleteCityData/:id',deleteCityData)


// Middleware
router.param('id', (request, response, next, id) => {
    request.city = cityData[id-1]
    next()
})

module.exports = router