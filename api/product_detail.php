<?php
	include('connect/connect.php');
	mysqli_set_charset($conn, 'UTF8');
	$mysqli = $conn;

	$id = $_GET['id'];
	// $id = 21;
	$products = $mysqli -> query('
		SELECT p.id_product,p.name as name, p.id_type as idType, t.name as nameType,p.color, p.price, p.small_description,p.full_description , i.link as productImage
		FROM product p left join images i on p.id_product = i.id_product inner join product_type t on t.id_type = p.id_type
		WHERE p.id_product='.$id.'
	');
 	while ($row = $products->fetch_object()){
 		$descriptions = explode('^', $row->full_description);
 		$row->full_description = $descriptions;

 		$colors = explode(',', $row->color);
 		$row->color = $colors;

 		$imeges = explode(',', $row->productImage);
 		$row->productImage = $imeges;

	    $productss[] = $row;
	}

	$array = array('product_detail' => $productss);
	echo json_encode($array); // trả về dữ liệu dạng JSON

	// clsoe connection
	$mysqli -> close();
?>