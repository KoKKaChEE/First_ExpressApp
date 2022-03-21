const mongoose = require("mongoose");
const config = require("../config/index")

async function main() {
  // Use connect method to connect to the server
  console.log(`mongodb+srv://admin:${config.dbPassword}@training.owrmc.mongodb.net/${config.dbName}?retryWrites=true&w=majority`)
  mongoose.connect(`mongodb+srv://admin:${config.dbPassword}@training.owrmc.mongodb.net/${config.dbName}?retryWrites=true&w=majority`);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  // await client.connect();
  // console.log('Connected successfully to server');
  // const db = client.db(dbName);
  // module.exports.userDetailsCollection = db.collection('userDetails');


  // the following code examples can be pasted here...
  // const insertResult = await userDetailsCollection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // console.log('Inserted documents =>', insertResult);

  // const findResult = await userDetailsCollection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // const filteredDocs = await collection.find({ a: 3 }).toArray();
  // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  // console.log('Updated documents =>', updateResult);

  // const deleteResult = await collection.deleteMany({ a: 3 });
  // console.log('Deleted documents =>', deleteResult);

  // const indexName = await collection.createIndex({ a: 1 });
  // console.log('index name =', indexName);
  return "CONNECTED"
}

main()
  .then(console.log)
  .catch(console.error)
  