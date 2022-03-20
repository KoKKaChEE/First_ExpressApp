const db = require("../db/index")
// const cache = require("../config/cache")

const getUserDetails = async (req, res) => {
  try {
      userDetails = await db.userDetailsCollection.findOne({ username: req.params.username });
      res.json(userDetails)
  }
  catch (ex) {
    // res.status(500)
    // res.json("CREATING USER FAILED -",ex)
  }
}

const validateLogin = async (req, res) => {
  try {
    const userDetails = await db.userDetailsCollection.findOne({ username: req.body.username, password: req.body.password });
    console.log(userDetails)
    if (userDetails) {
      res.json("LOGIN CONFIRMED")
    }
    else {
      res.status(500)
      res.json("USER DOES NOT EXIST")
    }
  }
  catch (ex) {
    // res.status(500)
    // res.json("CREATING USER FAILED -",ex)
  }
}

const sendResponseforPost = (req, res) => {
  // var sql = "select * from user"
  // var params = []
  // db.all(sql, params, (err, rows) => {
  //   if (err) {
  //     res.status(400).json({ "error": err.message });
  //     return;
  //   }
  //   res.json({
  //     "message": "success",
  //     "data": rows
  //   })
  // });
  res.json("HELLO WORLD 2")
}

const createUser = async (req, res) => {
  try {
    console.log("AAAAAAAAA", db.userDetailsCollection)
    console.log(req.body)
    const insertResult = await db.userDetailsCollection.insertOne({ username: req.body.username, password: req.body.password });
    console.log('Inserted documents =>', insertResult);
    res.json("USER CREATED")
  }
  catch (ex) {
    // res.status(500)
    // res.json("CREATING USER FAILED -",ex)
  }

}

module.exports.createUser = createUser
module.exports.validateLogin = validateLogin
module.exports.getUserDetails = getUserDetails
module.exports.sendResponseforPost = sendResponseforPost