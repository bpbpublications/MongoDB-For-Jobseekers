<?php

require 'vendor/autoload.php';

$client = new MongoDB\Client(
    'mongodb://localhost:27017'
);

$collection = $client->website->cookbook;

$pipeline = [
    [
        '$group' => [
            '_id' => '$type',
            'count' => ['$sum' => 1]
        ]
    ],
    [
        '$sort' => ['count' => -1]
    ],
];

$cursor = $collection->aggregate($pipeline);

foreach ($cursor as $type) {
    echo $type['_id'] . " has " . $type['count'] . " recipe(s) \n\r";
}