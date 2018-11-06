<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "movieinfo";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    echo 'sumpin done busted!';
    exit;
}
//echo "connected!";

//select all of the data from the table
$myquery = "SELECT title, fullcontent FROM movies";
$result = mysqli_query($conn, $myquery);
$rows = array();

while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}
//var_dump($result);
// var_dump($rows);
// var_dump(json_encode($rows));
// header('Access-Control-Allow-Origin: *');
// header('Connect-Type: application/json;charset=UTF8');
echo json_encode($rows);
//echo $myquery;

?>