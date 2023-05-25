<?php

require 'vendor/autoload.php';

// Replace with your MongoDB connection string and database name
$host = "mongodb://<host>";

$dbname = "website";

$options = array(
    "username" => "myusername",
    "password" => "mypassword"
);

// Connect to MongoDB
$client = new MongoDB\Client($host, $options);

// Select our database
$database = $client->selectDatabase($dbname);

// Query our collection
$collection = $database->cookbook;
$docs = $collection->find();

// This will return a cursor, so we need to iterate on each document
foreach ($docs as $document) {
    var_dump($document);
}
