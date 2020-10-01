<?php
	date_default_timezone_set('Asia/Ho_Chi_Minh');

    $servername = "localhost";
    $username = "root";
    $password = ""; 
    $dbname = "mobile_shop";
    // $dbname = "db_app.sql";

    $conn = new mysqli($servername,$username,$password,$dbname);
    $conn->set_charset("utf8");
    if (mysqli_connect_errno()) {
    	printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>