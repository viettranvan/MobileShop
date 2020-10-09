<?php
//cart
use \Firebase\JWT\JWT;
require __DIR__ . '/vendor/autoload.php';
include('function.php');
include('connect/connect.php');
	$mysqli = $conn;
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$key = "example_key";
	
	$arrayDetail = $obj['arrayDetail'];
	$token = $obj['token'];

try{
	$decoded = JWT::decode($token, $key, array('HS256'));
	if($decoded->expire < time()){
		echo 'EXPIRED_TOKEN'; // token hết hạn
	}
	else{
		$username = $decoded->email;
		$sql = "SELECT * FROM users where username = '$username'";
		$result = $mysqli->query($sql);
		$user = mysqli_fetch_assoc($result);
		$id_user = $user['id_user'];

		$tongtien = 0;
		foreach ($arrayDetail as $value) {
			$id_sp = $value['id_product'];
			$sanpham = $mysqli->query("select price from product where id_product=$id_sp");
			$product = mysqli_fetch_assoc($sanpham);
			$tongtien += $product['price'];
		}
		$todate = date('Y-m-d h:i:s');
		$sql = "INSERT INTO order_history(id_user,date_order, total) VALUES ($id_user, '$todate', $tongtien)";

		$mysqli->query($sql);
		$id_bill = $mysqli->insert_id;
		foreach ($arrayDetail as $value) {
			$product = $mysqli->query("SELECT * FROM product where id_product=$value[id_product]");
			$product = mysqli_fetch_assoc($product);
			$price = $product['price'];
			$sql = "INSERT INTO bill_detail(id_bill,id_product, quantity, price) VALUES ($id_bill, $value[id_product], $value[quantity], $price)";
			$mysqli->query($sql);
		}
		// echo 'INSERT_SUCCESSFULLY';
		$array = array('message'=>'INSERT_SUCCESSFULLY');
		echo json_encode($array);
	}
}
catch(Exception $e){
	echo 'INVALID_TOKEN'; // token không hợp lệ
}

?>