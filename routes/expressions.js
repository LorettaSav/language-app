var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const expressionMustExist = require("../guards/expressionMustExist");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/expressions", function(req, res, next){
  db("SELECT * FROM expressions;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.get("/expressions/:id", expressionMustExist, async function(req, res, next) {
  const { id } = req.params;
  try{
    const results = await db(`SELECT * FROM expressions WHERE id = ${id}`);
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/expressions", async function(req, res, next) {
  const { expression, meaning1, meaning2, meaning3, example1, example2, example3 } = req.body;
  try {
    await db(
      `INSERT INTO expressions (expression, meaning1, meaning2, meaning3, example1, example2, example3) VALUES ("${expression}", "${meaning1}", "${meaning2}", "${meaning3}", "${example1}", "${example2}", "${example3}")`
    );
    res.send({ message: "The expression was added!" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.delete("/expressions/:id", expressionMustExist, async function(req, res, next) {
  const { id } = req.params;
  try {
    await db(`DELETE FROM expressions WHERE id = ${id}`);
    res.send({ message: "Your expression was deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;


