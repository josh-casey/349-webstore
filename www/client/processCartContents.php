<?php
include('private/sql.php');

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$items = $_POST['items'];
$price = $_POST['price'];

$sql = "INSERT INTO orders ('item_id', 'cust_name', 'cust_email', 'cust_address', 'shipped') VALUES ('";
$sql += $items;
$sql += "', '";
$sql += $name;
$sql += "', '";
$sql += $email;
$sql += "', '";
$sql += $address;
$sql += "', '";
$sql += "0')";

$result = $db->query($sql);
?>
