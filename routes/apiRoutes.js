const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");
const path = require('path');

router.get("/notes", (request, response) =>{
  response.json(db);

  response.send(db);
});


// router.post("/notes", (request, response) =>{

// })





// other apis here

// /api/notes/:id

module.exports = router;