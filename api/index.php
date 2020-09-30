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
	
	// Perform query
	$product = $mysqli -> query('
		SELECT p.id_product,p.name as name, p.id_type as idType, t.name as nameType, p.price, p.small_description, i.link as productImage
		FROM product p left join images i on p.id_product = i.id_product inner join product_type t on t.id_type = p.id_type
		WhERE p.new = 1
	');
	while ($row = $product->fetch_object()){
		$assignees = explode(',', $row->productImage);
		$row->productImage = $assignees;
	    $productArr[] = $row;
	}

	// Perform query
	$product_types = $mysqli -> query("SELECT * FROM product_type");
 	while ($type = $product_types->fetch_object()){
	    $product_type[] = $type;
	}

	$array = array('type'=>$product_type,'product' => $productArr);
	echo json_encode($array); // trả về dữ liệu dạng JSON

	// clsoe connection
	$mysqli -> close();
?>