const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const blogRoute = require('./routes/gemini');
var cors = require("cors");

app.use(express.json())
app.use(cors());
app.use('/api/v1/blog', blogRoute);

app.listen(3000, () => {
  console.log("server is listening 3000");
});
