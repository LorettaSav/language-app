const db = require("../model/helper");

async function adjectiveMustExist(req, res, next) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM adjectives WHERE id = ${id}`);
    if (results.data.length) {
      next();
    } else {
      res.status(404).send({ message: "adjecive not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = adjectiveMustExist;