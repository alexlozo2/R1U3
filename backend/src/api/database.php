<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header("Access-Control-Max-Age: 3600");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With');

//PRODUCCION

define('DB_HOST', 'bowrpzwozxfm640l38z3-mysql.services.clever-cloud.com'); 
define('DB_USER', 'uqrmzwjbqssh0kdo');
define('DB_PASS', 'L0YXbWNRdBO1CeryCWt8');
define('DB_NAME', 'bowrpzwozxfm640l38z3');



function connect()
{
  $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }
  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();


/*
MYSQL_ADDON_HOST=b5gpr0dt5vig4v4fuchq-mysql.services.clever-cloud.com
MYSQL_ADDON_DB=b5gpr0dt5vig4v4fuchq
MYSQL_ADDON_USER=urgmhrwzu9dh2rmv
MYSQL_ADDON_PORT=3306
MYSQL_ADDON_PASSWORD=6mENK3R0vqeFDMimZVXw
MYSQL_ADDON_URI=mysql://urgmhrwzu9dh2rmv:6mENK3R0vqeFDMimZVXw@b5gpr0dt5vig4v4fuchq-mysql.services.clever-cloud.com:3306/b5gpr0dt5vig4v4fuchq
*/
