import pymongo

# Replace with your MongoDB connection string and database name
connection_string = "mongodb://<username>:<password>@<host>"

database_name = "website"

# Connect to the MongoDB
client = pymongo.MongoClient(connection_string)

# Set the database
database = client[database_name]

# Example query to test the connection
collection = database["cookbook"]

doc = collection.find_one()

print(doc)
