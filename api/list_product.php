<?php
	// connect db
	include('./connect/connect.php');
	mysqli_set_charset($conn, 'UTF8');
	$mysqli = $conn;

	// Check connection
	if ($mysqli -> connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
	  exit();
	}
	
	// SELECT p.id_product,p.name as name, p.id_type as idType, t.name as nameType, p.price, p.small_description,p.full_description, i.link as productImage
	// Perform query
	$product = $mysqli -> query('
		SELECT p.id_product,p.name as name, p.id_type as idType, t.name as nameType, p.price, p.small_description,p.full_description, i.link as productImage
		FROM product p left join images i on p.id_product = i.id_product inner join product_type t on t.id_type = p.id_type
	');
	while ($row = $product->fetch_object()){
		$images = explode(',', $row->productImage);
		$row->productImage = $images;

		$descriptions = explode('^', $row->full_description);
		$row->full_description = $descriptions;

	    $productArr[] = $row;
	}

	$array = array('product' => $productArr);
	echo json_encode($array); // trả về dữ liệu dạng JSON

	// clsoe connection
	$mysqli -> close();
?>