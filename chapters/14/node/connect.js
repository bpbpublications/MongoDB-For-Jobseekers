const MongoClient = require('mongodb').MongoClient;

// Replace with your MongoDB connection string and database name
const uri = 'mongodb://<username>:<password>@<host>/website';

MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.log(err.stack);
    return;
  }

  console.log('Connected Successfully!');

  client.close();
});