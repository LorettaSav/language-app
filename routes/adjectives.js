var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const adjectiveMustExist = require("../guards/adjectiveMustExist");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/adjectives", function(req, res, next){
  db("SELECT * FROM adjectives;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.get("/adjectives/:id", adjectiveMustExist, async function(req, res, next) {
  const { id } = req.params;
  try{
    const results = await db(`SELECT * FROM adjectives WHERE id = ${id}`);
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/adjectives", async function(req, res, next) {
  const { adjective, meaning1, meaning2, meaning3, example1, example2, example3 } = req.body;
  try {
    await db(
      `INSERT INTO adjectives (adjective, meaning1, meaning2, meaning3, example1, example2, example3) VALUES ("${adjective}", "${meaning1}", "${meaning2}", "${meaning3}", "${example1}", "${example2}", "${example3}")`
    );
    res.send({ message: "The adjective was added!" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.delete("/adjectives/:id", adjectiveMustExist, async function(req, res, next) {
  const { id } = req.params;
  try {
    await db(`DELETE FROM adjectives WHERE id = ${id}`);
    res.send({ message: "Your adjective was deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;






