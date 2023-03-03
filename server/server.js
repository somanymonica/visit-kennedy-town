const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser"),
  port = 3080;

// import the routes file
const routes = require("./routes/routes");

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// register the routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-app/out/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
