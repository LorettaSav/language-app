var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
const models = require("../models/index");
//const wordMustExist = require("../guards/wordMustExist");

//GET all words
router.get("/", async function (req, res, next) {
  try {
    const words = await models.Word.findAll();
    res.send(words);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET random word
// router.get("/random", async function (req, res, next) {
//   try {
//     const randWord = await models.Word.findAll({
//       order: Sequelize.literal("rand()"),
//       limit: 1,
//     });
//     res.send(randWord);
//   } catch (err) {
//     console.log(err);
//   }
// });

//GET word based on type
router.get("/types/:type", async function (req, res, next) {
  const { type } = req.params;
  try {
    const randWord = await models.Word.findAll({
      where: { type: type },
    });
    res.send(randWord);
  } catch (err) {
    console.log(err);
  }
});

//GET word by id NOT WORKING
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    const word = await models.Word.findOne({
      where: {
        id: id,
      },
    });

    if (!word) {
      res.status(404).send("No such word in your collection");
    } else {
      res.send(word);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET word fields
router.get("/:id/fields", async function (req, res, next) {
  const { id } = req.params;
  try {
    const wordFields = await models.Word.findOne({
      where: { id },
    });
    const fields = await wordFields.getFields();
    res.send(fields);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

//POST new word
router.post("/", async function (req, res, next) {
  const { word, type } = req.body;
  try {
    await models.Word.findOne({
      where: { word: word, type: type },
    });
    const myWord = await models.Word.create({ word, type });
    res.send(myWord);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE word by ID
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    await models.Word.destroy({
      where: {
        id,
      },
    });
    res.send("Your word has been deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
