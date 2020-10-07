<?php
//lich sử đặt hàng
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');
$mysqli = $conn;

$key = "example_key";
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$token = $obj['token'];

try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'HET_HAN';
	}
	else{
		$username = $decoded->email;
		$sql = "SELECT b.id_bill, b.date_order, b.status, b.total FROM bill b INNER JOIN users u ON u.id_user=b.id_user where u.username ='$username'";
		$result = $mysqli->query($sql);
		while ($row = $result->fetch_object()){
		    $bill[] = $row;
		}
		print_r(json_encode($bill));
	}
}

catch(Exception $e){
	echo 'LOI';
}


?>