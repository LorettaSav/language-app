var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const nounMustExist = require("../guards/nounMustExist");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/nouns", function(req, res, next){
  db("SELECT * FROM nouns;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.get("/nouns/:id", nounMustExist, async function(req, res, next) {
  const { id } = req.params;
  try{
    const results = await db(`SELECT * FROM nouns WHERE id = ${id}`);
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/nouns", async function(req, res, next) {
  const { noun, meaning1, meaning2, meaning3, article, preposition, plural, example1, example2, example3 } = req.body;
  try {
    await db(
      `INSERT INTO nouns (noun, meaning1, meaning2, meaning3, article, preposition, plural, example1, example2, example3) VALUES ("${noun}", "${meaning1}", "${meaning2}", "${meaning3}", "${article}", "${preposition}", "${plural}", "${example1}", "${example2}", "${example3}")`
    );
    res.send({ message: "The noun was added!" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.delete("/nouns/:id", async function(req, res, next) {
  const { id } = req.params;
  try {
    let results = await db(`SELECT * FROM nouns WHERE id = ${id}`);
    if (results.data.length === 0) {
      res.status(404).send({ error: "List not found" });
    } else {
    await db(`DELETE FROM nouns WHERE id = ${id}`);
    res.send({ message: "Your noun was deleted!" });}
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;






