<?php 

$capitals = array("USA" => "asd", "Japan" => "asdsd", "Korea" => "ads","India"=>"ad", "Bangladesh" => "ads");

echo var_dump($capitals);

foreach($capitals as $key => $value){
    echo $key." ".$value;
}

?>