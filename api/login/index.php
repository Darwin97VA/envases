<?php

header($_SERVER['SERVER_PROTOCOL'] . ' 200 OK');
header("Access-Control-Allow-Origin: *");

require_once __DIR__ . "/../../config/index.php";


echo json_encode($config);
