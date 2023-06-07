var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
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
    // create the word in the words table
    const myWord = await models.Word.create({ word, type });
    //getting all the fields from the fields table
    const fields = await models.Field.findAll();
    const values = await models.Value.bulkCreate(
      fields
        .map((field) => ({
          value: req.body[field.field],
          fieldId: field.id,
          wordId: myWord.id,
        }))
        .filter((field) => field.value)
    );
    console.log(values);
    res.send(myWord);
  } catch (error) {
    res.status(500).send(error);
  }
});

//propName --> array of properties as string
  //keyVals --> array of values as string

  // add "values" into the Value table
    //   let myValue;
    //   let values;
    //  for (let i = 0; i < propName.length; i++){
    //    values = await models.Value.create(
    //      {
    //        value: req.body[fields[i].keyVals[i]],
    //        fieldId: fields[i].id,
    //        wordId: myWord.id
    //      }
    //    )
    //    return values.filter(e => e.value)
    //   }


//DELETE word by ID
router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
     await models.Value.destroy({
      where: {
        wordId: id
      }
    })

    await models.Word.destroy({
      where: {
        id,
      },
    });
    res.send({message: "Your word has been deleted successfully"});
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
