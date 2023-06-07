var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize")
const models = require("../models/index");


//GET all Values
router.get("/", async function (req, res, next) {
    try {
        const values = await models.Value.findAll();
        res.send(values);
      } catch (error) {
        res.status(500).send(error);
      }
})

//GET Values by Id
router.get("/:id", async function (req, res, next) {
    const { id } = req.params;
    try {
        const value = await models.Value.findOne({
            where: {
                id
            }
        });
        res.send(value);
      } catch (error) {
        res.status(500).send(error);
      }
})

//GET Values including field + word
router.get("/:id/wordfields", async function (req, res, next) {
    const { id } = req.params;
    try {
        const value = await models.Value.findOne({
            where: {
                id
            },
            include: [models.Word, models.Field]  
        });
        res.send(value);
      } catch (error) {
        res.status(500).send(error);
      }
})

router.get("/words/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    const values = await models.Value.findAll({
      where: { wordId : id },
    })
    res.send(values)
  } catch (err) {
    res.status(500).send({ message: err.message})
  }
})
//POST values
// router.post("/", async function (req, res, next) {
//     const { value, wordId, fieldId } = req.body;
//     try {
//       await models.Value.findOne({
//         where: { value:value, wordId:wordId, fieldId: fieldId },
//       });
//       const values = await models.Value.create({ value, wordId, fieldId });
//       res.send(values);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });

module.exports = router;