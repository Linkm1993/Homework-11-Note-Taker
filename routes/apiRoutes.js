const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");
const path = require('path');
let db = require("../db/db.json");

router.get("/notes", function(request, response) {
  res.json(db);

  response.send(db);
});

// other apis here

// /api/notes/:id

module.exports = router;