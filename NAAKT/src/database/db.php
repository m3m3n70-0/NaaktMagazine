<?php
$host = 'studmysql01.fhict.local';
$user = 'dbi507258';
$password = 'naakTMags';
$database = 'test';

$conn = new mysqli($host, $user, $password, $database);

$query = "SELECT * FROM id"; // Replace 'your_table' with the actual table name

$result = executeQuery($query);

$data = array();
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
