const express = require('express');
const router = express.Router();
const db = require('../db/db');


/* Route to GET all questions. */
router.get('/',  async (req, res) => {
   try {
   let questions = await db.any(`SELECT * FROM questions`);
    console.log("questions", questions);
     res.json({
       payload: questions,
       message: `Request was successfully received`,
     });
   } catch (error) {
     res.status(500);
     res.json({
       message: `Unable to retrieve questions`,
     });
     console.log(error);
   }
 })


 module.exports = router;