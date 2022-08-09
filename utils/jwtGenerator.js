const jwt = require('jsonwebtoken');
const jwtGenerator = (user_id) => {
    const payload = {
        id: user_id
    };
    return jwt.sign(payload, "secret", { expiresIn: "365d" });
};
module.exports = jwtGenerator;