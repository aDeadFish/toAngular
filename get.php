<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$con = mysql_connect("localhost","root","root");

if(!$con){
    die('Could not connect: '.mysql_connect_error());
}

mysql_select_db("test_db", $con);
$result = mysql_query("SELECT * FROM test");
$arr=array();
while($row = mysql_fetch_array($result))
  {
  $arr[]=$row;
  }

mysql_close($con);
echo json_encode($arr);
exit;
?>