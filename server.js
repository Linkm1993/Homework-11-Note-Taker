
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// PLUS the following 
app.use(express.static("public"));
/* 
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html: 
                       <script src="/js/index.js"></script>. 
this is because we have created a static path that routes
to the /public directory automatically.
*/
app.use("/api", apiRoutes);  // /api/notes
app.use("/", htmlRoutes);    // /notes or /

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})