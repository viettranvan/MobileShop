<?php
//dang nhap
	use \Firebase\JWT\JWT;
	require __DIR__ . '/vendor/autoload.php';
	include('function.php');
	include('connect/connect.php');
	mysqli_set_charset($conn, 'UTF8');
	$mysqli = $conn;

	$key = "example_key";
	$json = file_get_contents('php://input');
	$obj = json_decode(json)e($json, true);
	$username = $obj['username'];
	$password = $obj['password'];
	$sql = "SELECT u.username, u.fullname, u.address, u.phone_number FROM users u where username = '$username' and password = '$password'";
	$result = $mysqli->query($sql);

	$user = mysqli_fetch_assoc($result);

	if($user){
		$jwt = getToken($email);
		$array = array('token'=>$jwt, 'user'=>$user);
		print_r(json_encode($array));
	}
	else{
		echo 'SAI_THONG_TIN_DANG_NHAP';
	}

?>