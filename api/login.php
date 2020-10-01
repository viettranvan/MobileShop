<?php
	use \Firebase\JWT\JWT;
	require __DIR__ . '/vendor/autoload.php';
	include('function.php');
	include('connect/connect.php');
	$mysqli = $conn;

	$key = "example_key";
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);

	$username = $obj['username'];
	$password = $obj['password'];
	$sql = "SELECT * FROM users WHERE username='$username' and password = '$password'";
	// $sql = "SELECT * FROM users WHERE username='bocapquyen' and password = 'vanquyen123'";


	$result = $mysqli->query($sql);
	$user = mysqli_fetch_assoc($result);

	if($user){
		$jwt = getToken($username);
		$array = array('token'=>$jwt, 'user'=>$user);
		print_r(json_encode($array));
	}
	else{
		$array = array('fail'=>'LOGIN_FAIL');
		echo json_encode($array);
	}
?>