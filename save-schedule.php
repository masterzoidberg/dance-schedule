<?php
// This is a simple server-side script to save the schedule data
// It should only be used if you're hosting this on a server with PHP support

// Allow CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the JSON data from the request
$json_data = file_get_contents('php://input');

// Verify that the data is valid JSON
$schedule_data = json_decode($json_data);
if ($schedule_data === null && json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}

// Set the path to the JSON file
$file_path = 'dancer-schedule.json';

// Try to write the data to the file
$success = file_put_contents($file_path, $json_data);

if ($success === false) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to write to file',
        'details' => 'Make sure the server has write permissions to ' . $file_path
    ]);
    exit;
}

// Return success
http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Schedule data saved successfully',
    'bytes_written' => $success
]);
?>