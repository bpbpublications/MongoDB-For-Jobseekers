import pymongo

client = pymongo.MongoClient("localhost", 27017)

# Set our database to "website"
db = client.website

for item in db.cookbook.find().sort("title", pymongo.ASCENDING).limit(3):
    print(item["title"])
