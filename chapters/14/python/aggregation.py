import pymongo

client = pymongo.MongoClient("localhost", 27017)

# set our database to "cooker"
db = client.cooker
collection = db["recipes"]

pipeline = [
    {
        "$group": {
            "_id": "$type",
            "count": {"$sum": 1}
        }
    },
    {
        "$sort": {"count": -1}
    }
]

result = list(collection.aggregate(pipeline))

for doc in result:
    print(doc["_id"], "has", doc["count"], "recipe(s)")
