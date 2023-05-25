import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017/')

db = client['website']
collection = db['cookbook']

# Create document
document = {
    'title': 'Waffles',
    'directions': [
        'Mix batter',
        'Cook on waffle iron until golden brown',
        'Put lots of butter and maple syrup'
    ],
}

# Insert the document
result = collection.insert_one(document)

document_id = result.inserted_id

# Output the _id of the inserted document
print('Inserted successfully! The _id is: ', document_id)
