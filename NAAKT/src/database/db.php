<?php
$host = 'studmysql01.fhict.local';
$user = 'dbi507258';
$password = 'naakTMags';
$database = 'test';

$conn = new mysqli($host, $username, $password, $database);

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
?>
