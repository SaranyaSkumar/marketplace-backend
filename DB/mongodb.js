// const { MongoClient } = require('mongodb');

// const client = new MongoClient(uri);

// async function main(){
 
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");

//         // const databasesList = await client.db().admin().listDatabases();

//         // console.log("Databases:");
//         // databasesList.databases.forEach(db => console.log(` - ${db.name}`));

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main();

// module.exports = client;

const mongoose = require('mongoose');
const uri = "mongodb+srv://connectsaranyasasikumar06:9msBM5TFVgzHHHIa@cluster0.ffcfuuh.mongodb.net/marketplace?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch(err => {
    console.error('Connection error', err);
});
