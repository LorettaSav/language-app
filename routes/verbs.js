var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const verbMustExist = require("../guards/verbMustExist");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/verbs", function(req, res, next){
  db("SELECT * FROM verbs;")
  .then((results) => {
    res.send(results.data);
  })
  .catch((err) => res.status(500).send(err));
});

router.get("/verbs/:id", verbMustExist, async function(req, res, next) {
  const { id } = req.params;
  try{
    const results = await db(`SELECT * FROM verbs WHERE id = ${id}`);
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/verbs", async function(req, res, next) { 
  const { verb, meaning1, meaning2, meaning3,  cases, preposition, example1, example2, example3 } = req.body;
  try {
    await db(
      `INSERT INTO verbs (verb, meaning1, meaning2, meaning3, cases, preposition, example1, example2, example3) VALUES ("${verb}", "${meaning1}", "${meaning2}", "${meaning3}", "${cases}", "${preposition}", "${example1}", "${example2}", "${example3}")`
    );
    res.send({ message: "The verb was added!" });
  } catch (err) {
    res.status(500).send(err);
  }
});


router.delete("/verbs/:id", verbMustExist, async function(req, res, next) {
  const { id } = req.params;
  try {
    await db(`DELETE FROM verbs WHERE id = ${id}`);
    res.send({ message: "Your verb was deleted!" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;


