const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const token = req.header('jwt_token');
    if (token) {
        try {
            const verify = jwt.verify(token, "secret");
            req.user = verify.id;
            next();
        } catch (error) {
            res.status(404).json({
                msg: error
            })
        }
    } else {
        return res.status(403).json({
            msg: "authorization denied."
        })
    }
}