<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>php-demo1</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <link rel="icon" href="" type="image/x-icon">
    <link rel="stylesheet" href="../../css/reset.css" type="text/css">
    <style type="text/css">
        
    </style>
</head>
<body>
   	<div class="wrap">
        <?php
            $servername = "localhost";
            $username = "username";
            $password = "password";
             
            // 创建连接
            $conn = new mysqli($servername, $username, $password);
             
            // 检测连接
            if ($conn->connect_error) {
                die("连接失败: " . $conn->connect_error);
            } 
            echo "连接成功";
        ?>
   	</div>
   
    
</body>
</html>