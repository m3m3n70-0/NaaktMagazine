<?php
$host = 'studmysql01.fhict.local';
$user = 'dbi507258';
$password = 'naakTMags';
$database = 'dbi507258';

$conn = new mysqli($host, $user, $password, $database);

$query = "SELECT * FROM password"; // Replace 'your_table' with the actual table name

$result = executeQuery($query);

$data = array();
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
