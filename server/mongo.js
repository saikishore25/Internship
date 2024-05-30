const { MongoClient } = require("mongodb");
require('dotenv').config();
const url = process.env.MONGO_URL;

// const client = new MongoClient('mongodb://localhost:27017');
const client = new MongoClient(url);

// console.log(url);


async function dbConnection(){

    let result = await client.connect();
    // console.log(result)
    let database = result.db("AI_MODELS");
    // console.log(database);

    let collection = database.collection("chat-gpt");
    
    return collection
}


module.exports = dbConnection;