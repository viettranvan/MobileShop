<?php  
	use \Firebase\JWT\JWT;
	require __DIR__ . '/vendor/autoload.php';
	include('function.php');
	include('connect/connect.php');

	$key = "example_key";
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	// $token = $obj['token'];

	$id 			= $obj['id_user'];
	$fullname 		= $obj['fullname'];
	$birthday 		= $obj['birthday'];
	$phone_number 	= $obj['phone_number'];
	$address 		= $obj['address'];
	$gender 		= $obj['gender'];

	echo $id.' ';
	echo $fullname.' ';
	echo $birthday.' ';
	echo $phone_number.' ';
	echo $address.' ';
	echo $gender.' ';

?>