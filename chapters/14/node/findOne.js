const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://<username>:<password>@<host>';
const db = 'website';

(async function() {
  const client = new MongoClient(uri, { useUnifiedTopology: true});

  try {
    await client.connect();

    const database = client.db(db);

    const collection = database.collection('cookbook');

    const doc = await collection.findOne();

    console.log(doc);

  } catch (err) {
    console.log(err.stack);
  }

  await client.close();
})();