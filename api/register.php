<?php
//đăng kí
include('connect/connect.php');
mysqli_set_charset($conn, 'UTF8');
$mysqli = $conn;
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$fullname = $obj['fullname'];
$email = $obj['email'];
$password = $obj['password'];
if($fullname !='' && $email != '' && $password!=''){
	
	$sql = "INSERT INTO users(email,password,fullname) VALUES('$email','$password','$fullname')";
	$result = $mysqli->query($sql);
	if($result){
		echo 'THANH_CONG';
	}
	else{
		echo 'KHONG_THANH_CONG';
	}
}
else{
	echo 'KHONG_THANH_CONG';
}

?>