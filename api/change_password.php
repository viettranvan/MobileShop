<?php  
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
			$password = md5($obj['password']);
			$new_password = md5($obj['new_password']);

			$get_password = $mysqli->query("SELECT * FROM users  WHERE username = '$username' AND password ='$password'");
			$rowcount=mysqli_num_rows($get_password);
			
			if($rowcount == 0){
				echo 'INCORRECT_PASSWORD';
			}
			else{
				$sql = "UPDATE users SET password='$new_password' WHERE username ='$username'";
				$user = $mysqli->query($sql);
				if($user){
					echo 'SUCCESS';
				}
				else{
					echo 'FAIL1';
				}
			}
		}
	}
	catch(Exception $e){
		echo 'FAIL2';
	}
?>