<?php

require 'vendor/autoload.php';

echo "<pre>";
 
$client = new MongoDB\Client(
  'mongodb://localhost:27017'
);

$collection = $client->website->cookbook;

$options = [];
$options['sort'] = ['title' => 1];
$options['limit'] = 3;

$recipes = $collection->find([], $options);

foreach ($documents as $document) {
  echo $document['title'] . "\n";
}

echo "</pre>";