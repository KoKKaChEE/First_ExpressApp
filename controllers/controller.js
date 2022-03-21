const db = require("../db/index")
const userModel = require("../db/model");
// const cache = require("../config/cache")

const getUserDetails = async (req, res) => {
  const users = await userModel.find({ username: req.params.username });
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

const validateLogin = async (req, res) => {
  const usersDetails = await userModel.find({ username: req.body.username, password: req.body.password });
  console.log("usersDetails", usersDetails)
  try {
    if (usersDetails.length) {
      res.send("LOGIN CONFIRMED");
    }
    else {
      res.status(400).send("USER DOES NOT EXIST");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

const createUser = async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports.createUser = createUser
module.exports.validateLogin = validateLogin
module.exports.getUserDetails = getUserDetails