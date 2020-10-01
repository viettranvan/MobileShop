<?php
//đăng kí
include('connect/connect.php');
mysqli_set_charset($conn, 'UTF8');
$mysqli = $conn;

// loại bỏ tất cả khoảng trắng
function validData($data){
	return preg_replace('/\s+/', '', $data);
}

function formatName($name){
	$lowerCase = mb_strtolower($name, 'UTF-8'); // đổi tất cả chữ thành chữ thường
	return mb_convert_case($lowerCase, MB_CASE_TITLE, "UTF-8");// đổi chữ đầu tiên thành chữ hoa
}

function formatBirthday($birthday){
	$result = "";
	$day = substr($birthday,-4);
	$month = substr($birthday,-7,2);
	$year = substr($birthday,-10,2);
	$result = $day.'-'.$month.'-'.$year;
	return $result;
}

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$fullname = formatName($obj['fullname']);
$username = validData($obj['username']);
$password = validData($obj['password']);
$repass = validData($obj['confirm_password']);
$birthday = formatBirthday($obj['birthday']);
// $birthday = $obj['birthday'];
$address = $obj['address'];
$phoneNumber = $obj['phoneNumber'];
$gender = $obj['gender'] == 0 ? "Nam" : "Nữ";

if($fullname != '' && $username != '' && $password != '' && $repass != ''){
	if(strlen($username) >= 6 && strlen($password) >= 8){
		$sql_user = "SELECT * FROM users WHERE username='$username'";
		$user_query = $mysqli->query($sql_user);
		$rowcount=mysqli_num_rows($user_query);
		if($rowcount == 1){
			echo 'ACCOUNT_ALREADY_EXISTS';
		}
		else{
			if($password === $repass){
			$sql = "INSERT INTO users(username, password, fullname,birthday ,phone_number, address, gender)
					VALUES('$username', '$password', '$fullname', '$birthday', '$phoneNumber', '$address', '$gender')";
			$result = $mysqli->query($sql);
			if($result){
				echo 'SUCCESS';
			}
			else{
				echo 'FAIL';
			}
			}
			else{
				echo 'CONFIRM_PASSWORD_FAIL';
			}
		}
	}
	else{
		echo 'FAIL';
	}
	
}
else{
	echo 'FAIL';
}	
?>