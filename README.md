# Dance Schedule Web Application

A responsive web application for dance studios to manage and display competition schedules for dancers.

## Features

- View competition schedules by day
- Filter schedules by dancer name or activity type
- Automatic calculation of arrival and run-through times (rounded to nearest quarter hour)
- Color-coded routines by type (solo, duo/trio, group, etc.)
- Responsive design for mobile and desktop viewing
- Print-friendly layout

## Files

- `embedded-dance-scheduler.html` - Main application file with embedded schedule data
- `dancers.js` - JavaScript module for processing dancer information
- `dancer-schedule.json` - Schedule data in JSON format

## Usage

1. Open `embedded-dance-scheduler.html` in a web browser
2. Use the dropdown menus to filter by dancer or activity type
3. Click on day tabs to navigate between competition days
4. Use the print button to generate a printable schedule

## Future Enhancements

- Add ability to refresh data from external JSON file
- Implement user authentication for admin features
- Add editing capabilities for administrators