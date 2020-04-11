const router = require("express").Router();
let db = require("../db/db.json");
const store = require("../js/store");
const path = require('path');
const fs = require('fs');


function writeDB() {
  const data = JSON.stringify(db,null,"\t")
  fs.writeFile(path.join(__dirname, "../db/db.json"), data, err => {
    if (err) throw err
  });
}


router.get("/notes", (request, response) =>{
  response.send(db);
});

router.post("/notes", (request, response)=>{
  db.push(store(request.body));
  response.json(true);
  const data = JSON.stringify(db)
  writeDB()
})

router.delete("/notes/:id", function(req, res) {
  db = db.filter(elem => elem.id != req.params.id);
  res.json(true);
  writeDB();
  })

module.exports = router;