<?php
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');

$host = 'studmysql01.fhict.local';
$user = 'dbi507258';
$password = 'naakTMags';
$database = 'dbi507258';

$conn = new mysqli($host, $user, $password, $database);

$query = "SELECT * FROM password"; // Replace 'your_table' with the actual table name

$result = executeQuery($query);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function executeQuery($query) {
    global $conn;
    $result = $conn->query($query);
    if (!$result) {
        die("Query execution failed: " . $conn->error);
    }
    return $result;
}

$data = array();
while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}
echo json_encode($data);

?>
