const db = require("../model/helper");

async function expressionMustExist(req, res, next) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM expressions WHERE id = ${id}`);
    if (results.data.length) {
      next();
    } else {
      res.status(404).send({ message: "expression not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = expressionMustExist;