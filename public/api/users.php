<?php

header('Content-Type: application/json');

echo json_encode([
	['email' => 'example1@example.com', 'name' => 'John Doe'],
	['email' => 'example2@example.com', 'name' => 'Jane Doe'],
	]);