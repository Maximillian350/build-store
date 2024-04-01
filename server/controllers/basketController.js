const {Device, BasketDevice, Basket} = require("../models/models")

class BasketController {
    async addToBasket(req, res, next) {
        const User = req.user
        const {DeviceId} = req.body
        const basket = await BasketDevice.create({BasketId: User.id, DeviceId: DeviceId})
        return res.json(basket)
    }
    async getBasketUser(req, res) {
        const {id} = req.user
        const basket = await BasketDevice.findAll({include:{
            model: Device},

            where:{BasketId: id}})
        if(!basket) res.status(400).json('None Id')
        return res.json(basket)
    }
}

module.exports = new BasketController()