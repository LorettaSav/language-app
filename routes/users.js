var express = require('express');
var router = express.Router();
const models = require("../models/index");

router.get("/", async function (req, res, next) {
    try {
        const users = await models.User.findAll();
        res.send(users);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})

router.get("/:id", async function (req, res, next) {
    const { id } = req.params;
    try {
        const user = await models.User.findOne({
            where: {id}
        })
        res.send(user);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})


//Not receiving anything back
router.get("/:username", async function (req, res, next) {
    const { username } = req.params;
    try {
        const user = await models.User.findOne({
            where: {username}
        })
        res.send(user);
    } catch (err) {
        res.status(500).send({message: err.message})
    }
})




module.exports = router;