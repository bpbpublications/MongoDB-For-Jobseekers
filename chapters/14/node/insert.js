const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const db = 'website';

const document = {
  'title': 'Waffles',
  'directions': [
    'Mix batter',
    'Cook on waffle iron until golden brown',
    'Put lots of butter and maple syrup'
  ]
};

(async function () {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(db);
    const collection = database.collection('cookbook');

    const result = await collection.insertOne(document);

    const id = result.insertedId;

    // Get back the inserted document
    const insertedDocument = await collection.findOne({ _id: id });
    
    const documentTitle = insertedDocument.title

    console.log(`Successfully inserted: ${documentTitle}`);

  } catch (err) {
    console.log(err.stack);
  }

  await client.close();
})();
