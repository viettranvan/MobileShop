<?php
//search
	include('connect/connect.php');
	$mysqli= $conn;

	if(isset($_GET['key']) && strlen($_GET['key'])>2){
		$keyword = $_GET['key'];

		$product = $mysqli -> query("
		SELECT p.id_product,p.name as name, p.id_type as idType, t.name as nameType, p.price, p.small_description,p.full_description, i.link as productImage
		FROM product p left join images i on p.id_product = i.id_product inner join product_type t on t.id_type = p.id_type
		WHERE p.name like '%$keyword%' group by p.id_product
		");

		while ($row = $product->fetch_object()){
			$images = explode(',', $row->productImage);
			$row->productImage = $images;

			$descriptions = explode('^', $row->full_description);
			$row->full_description = $descriptions;

		    $productArr[] = $row;
		}

		$array = array('product' => $productArr);
		echo json_encode($array); // trả về dữ liệu dạng JSON

	}
	else{
		echo 'NHAP_TU_KHOA';
	}
?>
	
