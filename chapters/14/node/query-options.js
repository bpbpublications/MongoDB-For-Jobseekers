const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const db = 'website';

(async function() {
  const client = new MongoClient(uri, { useUnifiedTopology: true});

  try {
    await client.connect();

    const database = client.db(db);

    const collection = database.collection('cookbook');

    const documents = collection.find().sort(['title', 1]).limit(3);

    // Iterate over the cursor
    while(await documents.hasNext()) {
      const document = await documents.next();
      console.dir(recipe.title);
    }

  } catch (err) {
    console.log(err.stack);
  }

  await client.close();
})();