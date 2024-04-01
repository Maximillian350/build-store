const express = require('express')
const router = express.Router()

const deviceRouter = require('./DeviceRouter')
const userRouter = require('./UserRouter')
const brandRouter = require('./BrandRouter')
const typeRouter = require('./TypeRouter')
const basketRouter = require('./BasketRouter')

router.use('/User', userRouter)
router.use('/Type', typeRouter)
router.use('/Brand', brandRouter)
router.use('/Device', deviceRouter)
router.use('/Basket', basketRouter)

module.exports = router

