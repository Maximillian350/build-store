const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return  function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] //Bearer sfagsghfia
            if (!token) {
                return res.status(402).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(401).json({message: "Нет права доступа"})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(402).json({message: "Не авторизован"})
        }
    };
}




