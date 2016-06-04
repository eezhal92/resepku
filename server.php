<?php

$comment = [
	'name' => $_POST['name'] . ' @ ' . date('M d, Y - H:i', time()),
	'text' => $_POST['text']
];

echo json_encode($comment);
exit;