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
		echo 'EXPIRED_TOKEN';
	}
	else{
		$username = $decoded->email;
		$sql = "SELECT ord.id_bill, ord.date_order, ord.status, ord.total
				FROM order_history ord INNER JOIN users u ON u.id_user=ord.id_user 
				where u.username ='$username'";
		$result = $mysqli->query($sql);

		$rowcount=mysqli_num_rows($result);
		if($rowcount == 0){
			// echo '';
			$none = 'EMPTY';
			print_r(json_encode($none));
		}
		else{
			while ($row = $result->fetch_object()){
		   		$bill[] = $row;
			}
			print_r(json_encode($bill));
		}
	}
}

catch(Exception $e){
	echo 'FAIL';
}


?>