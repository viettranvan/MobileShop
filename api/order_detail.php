<?php
	include('connect/connect.php');
	mysqli_set_charset($conn, 'UTF8');
	$mysqli = $conn;

	$id = $_GET['id'];
	// WHERE b.id_bill = '.$id.'
	// $id = 21;
	$order_detail = $mysqli -> query('
		SELECT *
		FROM bill_detail b left join product p on b.id_product = p.id_product inner join images i on p.id_product = i.id_product inner join order_history o on b.id_bill = o.id_bill
		WHERE b.id_bill = '.$id.'
	');

	$rowcount=mysqli_num_rows($order_detail);
	if($rowcount == 0){
		echo 'sai id';
	}
	else{
		while ($row = $order_detail->fetch_object()){
 		$descriptions = explode('^', $row->full_description);
 		$row->full_description = $descriptions;

 		$colors = explode(',', $row->color);
 		$row->color = $colors;

 		$imeges = explode(',', $row->link);
 		$row->link = $imeges;

	    $order_detailArr[] = $row;
		}
 	

	$array = array('bill_detail' => $order_detailArr);
	echo json_encode($array); // trả về dữ liệu dạng JSON
	}

	// clsoe connection
	$mysqli -> close();
?>