const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const db = 'website';

(async function () {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(db);
    const collection = database.collection('cookbook');

    const pipeline = [
      { '$group': { '_id': "$type", 'count': { '$sum': 1 } } },
      { '$sort': { 'count': -1 } }
    ];

    const cursor = collection.aggregate(pipeline);

    // iterate over the cursor
    while (await cursor.hasNext()) {
      const doc = await cursor.next();
      console.log(`${doc._id} has ${doc.count} recipe(s)`);
    }

  } catch (err) {
    console.log(err.stack);
  }

  await client.close();
})();
