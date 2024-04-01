const express = require('express')
const router = express.Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, basketController.addToBasket)
router.get('/', authMiddleware, basketController.getBasketUser)

module.exports = router