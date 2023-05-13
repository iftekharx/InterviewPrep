
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="func.php" method="post">
        <label>x: </label> <br>
        <input type="text" name="x"><br>
        <input type="submit" value="total">

    </form>
   
</body>
</html>

<?php

   $x = $_POST['x'];
   $total = null;

    // math functions
   $total = round($x, 2); // round up 2 decimal places
   $total = floor($x); // round down
   $total = ceil($x); // round up
   // some other funcs. abs, sqrt, pow, max, min, pi

   $num = rand(90, 100);
   echo $num;



   echo $total;



?>