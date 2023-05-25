import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017/')

db = client['website']
collection = db['cookbook']

document = {
    'title': 'Waffles',
    'directions': [
        'Mix batter',
        'Cook on waffle iron until golden brown',
        'Put lots of butter and maple syrup'
    ],
}

result = collection.insert_one(document)
document_id = result.inserted_id

# Get back the inserted document
new_document = collection.find_one({'_id': document_id})

document_title = new_document['title']

# Print the title of the inserted document
print('Successfully inserted: ', document_title)
