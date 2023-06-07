var jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET
const models = require("../models/index")
 function userMustBeLoggedIn(req, res, next) {
    const authorization = req.headers["authorization"] || "";
    const token = authorization.replace(/^Bearer\s/, "");
    if (!token) {
        res.status(401).send({message:"please provide a token"})
    } else {
        jwt.verify(token, supersecret, async function (err, decoded) {
            if (err) res.status(401).send({ message: err.message });
            else {
                const user = await models.User.findOne({
                    where: {id : decoded.user_id}
                })
                req.user = user;
                next();
            }
        })
    }
}

module.exports = userMustBeLoggedIn;