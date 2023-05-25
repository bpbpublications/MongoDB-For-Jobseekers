<?php

require 'vendor/autoload.php';

$client = new MongoDB\Client(
  'mongodb://localhost:27017'
);

$collection = $client->website->cookbook;

$document = [
  'title' => 'Waffles',
  'directions' => [
    'Mix batter',
    'Cook on waffle iron until golden brown',
    'Put lots of butter and maple syrup'
  ]
];

$result = $collection->insertOne($document);

if ($result->getInsertedCount() === 1) {
  $_id = $result->getInsertedId();

  $insertedDoc = $collection->findOne(["_id" => $_id]);

  echo "Successfully inserted: " . $insertedDoc['title'] . "\n\r";
}
