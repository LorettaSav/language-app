var express = require("express");
var router = express.Router();
const models = require("../models/index");

router.get("/", async function (req, res, next) {
  try {
    const field = await models.Field.findAll();
    res.send(field);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const field = await models.Field.findOne({
      where: {
        id
      }
    });
    res.send(field);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async function (req, res, next) {
  const { fields } = req.body;
  const fieldType = Object.keys(fields)
  try {
    for (let i = 0; i < fieldType.length; i++){
      const myFields = await models.Field.create({ field: fieldType[i] });
    }
    //console.log(w);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
