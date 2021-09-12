<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$output = ['firstname' => $firstname, 'lastname' => $lastname];
exit(json_encode($output)); // возвращает json представление данных