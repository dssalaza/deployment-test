// Code to create the schema for the users collection in the database
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    myName: {
      type: String
    },
    mySID: {
      type: String
    }
  });
  
  const User = mongoose.model("s24students", user);


module.exports = User;