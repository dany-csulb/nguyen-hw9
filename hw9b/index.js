// Load packages as a module
const express = require("express");

// Access exported services
const app = express();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve content of the "public" folder directly
app.use(express.static("public"));

// Web routes
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/hello", (request, response) => {
  response.sendFile(`${__dirname}/views/hello.html`);
});

// JSON API

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});