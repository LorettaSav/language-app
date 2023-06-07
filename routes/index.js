var express = require('express');
var router = express.Router();
// const nouns = require("./nouns.js");
// const adjectives = require("./adjectives.js");
// const verbs = require("./verbs.js");
// const expressions = require("./expressions.js");
//const db = require("../model/helper.js")

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });

// router.get('/api/words/random', (req, res) => {
//   const tableName = req.query.table;
//   db(`SELECT * FROM ${tableName} ORDER BY RAND()LIMIT 1;`)
//   .then((results) => {
//     res.send(results.data);
//   })
//   .catch((err) => res.status(500).send(err));
// });
  

// router.get("/api/words/random", (req, res) => {
//   const tables = ["nouns", "adjectives", "verbs", "expressions"];
//  
//   // Select the appropriate file based on the randomly chosen table
//   let wordFile;
//   switch (randomTable) {
//     case "nouns":
//       wordFile = nouns;
//       break;
//     case "adjectives":
//       wordFile = adjectives;
//       break;
//       case "verbs":
//         wordFile = verbs;
//         break;
//       case "expressions":
//         wordFile = expressions;
//         break;
//       default:
//         res.status(500).json({ message: "Failed to retrieve a random word." });
//         return;
//     }
//     wordFile.getRandomWord((error, word) => {
//       if (error) {
//         res.status(500).json({ message: "Failed to retrieve a random word." });
//       } else {
//         res.status(200).json(word);
//       }
//     });
//   });  
module.exports = router;
