const jwt = require("jsonwebtoken");

module.exports = (userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: '1h',
    });

    return token;
}