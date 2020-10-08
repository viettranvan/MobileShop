<?php
	// include('connect/connect.php');
	// mysqli_set_charset($conn, 'UTF8');
	// $mysqli = $conn;

	use \Firebase\JWT\JWT;
	require __DIR__ . '/vendor/autoload.php';
	include('function.php');
	include('connect/connect.php');
	$mysqli = $conn;

	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$id = $obj['id'];

	$bill = $mysqli->query("SELECT * FROM order_history WHERE id_bill=".$id."");
	$rowcount=mysqli_num_rows($bill);

	if($rowcount == 0){
		echo 'ID_NOT_FOUND';
	}
	else{
		$delete_bill = $mysqli->query("DELETE FROM bill_detail WHERE id_bill =".$id."");
 		$delete_order = $mysqli->query("DELETE FROM order_history WHERE id_bill=".$id."");
 		if($delete_bill == true && $delete_order == true){
 			echo "DELETE_SUCCESS";
 		}
 		else{
 			echo "DELETE_FAIL";
 		}
	}

	// clsoe connection
	$mysqli -> close();
?>