// 'Import' the Express module instead of http
const express = require("express");
// Initialize the Express application
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const information = require("./routers/information");

dotenv.config();

const PORT = process.env.PORT || 4040;
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
// look into this more!!!
const app = express();
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  response.json({ message: "Service Healthy" });
  // Create the response body
  // End and return the response
  response.send(
    JSON.stringify({
      message: "How are you doing today? Everything's fine over here!"
    })
  );
});
app.post("/add", (request, response) => {
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
    sum: num1 + num2
  };
  response.json(responseBody);
}); //Need to edit this later!
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log("Listening on port 4040"));
