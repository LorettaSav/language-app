const db = require("../model/helper");

async function wordMustExist(req, res, next,type) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM ${type}s WHERE id = ${id}`);
    if (results.data.length) {
      next();
    } else {
      res.status(404).send({ message: `${type} not found` });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = wordMustExist;