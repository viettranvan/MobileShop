<?php  
	function formatBirthday($birthday){
		$result = "";
		$day = substr($birthday,-4);
		$month = substr($birthday,-7,2);
		$year = substr($birthday,-10,2);
		$result = $day.'-'.$month.'-'.$year;
		return $result;
	}

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
			$fullname = $obj['fullname'];
			$phone_number = $obj['phone_number'];
			$address = $obj['address'];
			$gender = $obj['gender'] == 0 ? "Nam" : "Nữ";
			$birthday = formatBirthday($obj['birthday']);

			$sql = "UPDATE users 
				SET fullname='$fullname', phone_number='$phone_number', address='$address', gender='$gender', birthday='$birthday'
				WHERE username ='$username'";
			$user = $mysqli->query($sql);
			if($user){
				$result = $mysqli->query("SELECT * FROM users u WHERE username = '$username'");
				$user = mysqli_fetch_assoc($result);
				print_r(json_encode($user));
			}
			else{
				echo 'KHONG_THANH_CONG';
			}
		}
	}

	catch(Exception $e){
		echo 'LOI';
	}
?>