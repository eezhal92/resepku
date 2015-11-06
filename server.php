<?php

$comment = [
	'name' => $_POST['name'] . ' via server',
	'text' => $_POST['text']
];

echo json_encode($comment);
exit;