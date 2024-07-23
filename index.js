const mongoose = require("mongoose");
const User = require("./models/user.model");
const router = require("express").Router();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// require('dotenv').config();

const port = process.env.PORT || 3000;

// Create a Schema object

// Create a Model object

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/", async (req, res) => {
  // get the data from the form.html
  const MONGO_URI = req.body.myuri;

  const variables = {
    myName: "David Salazar",
    mySID: "300356922",
  };

  console.log("Reading URI: ", MONGO_URI);
  console.log("Variables to store in mongo: ", variables);

  // connect to the database and log the connection
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB: ", error);
    });

  // add the data to the database
  const user = new User(variables);
  user
    .save()
    .then(() => {
      console.log("User added");
    })
    .catch((error) => {
      console.error("Error: ", error);
    });

  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
