# Dance Schedule Web Application

A responsive web application for dance studios to manage and display competition schedules for dancers.

## Features

- View competition schedules by day
- Filter schedules by dancer name or activity type
- Automatic calculation of arrival and run-through times (rounded to nearest quarter hour)
- Color-coded routines by type (solo, duo/trio, group, etc.)
- Responsive design for mobile and desktop viewing
- Print-friendly layout
- Teacher-friendly schedule view with simplified layout
- Ability to edit arrival and run-through times
- Saves changes to JSON data file

## Files

- `index.html` - Main application file with competition schedule view
- `dancers.js` - JavaScript module for processing dancer information
- `dancer-schedule.json` - Schedule data in JSON format
- `teacher-schedule.html` - Teacher-friendly schedule view
- `teacher-schedule.js` - JavaScript for the teacher view functionality
- `save-schedule.php` - PHP script for saving changes to the server (when hosted)

## GitHub Pages

This application is deployed on GitHub Pages at:
[https://masterzoidberg.github.io/dance-schedule/](https://masterzoidberg.github.io/dance-schedule/)

### Setting up GitHub Pages

To enable GitHub Pages for this repository:

1. Go to the repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "master branch"
5. Click "Save"
6. The site will be published at https://[username].github.io/dance-schedule/

## Usage

1. Visit the GitHub Pages URL or open `index.html` in a web browser
2. Use the dropdown menus to filter by dancer or activity type
3. Click on day tabs to navigate between competition days
4. Use the print button to generate a printable schedule
5. Click "Teacher View" to access the simplified teacher-friendly schedule
6. To edit arrival and run-through times:
   - Click the "Edit Schedule" button
   - Enter the password (default: "DanceSchedule2025")
   - Click on any arrival or run-through time to modify it
   - Click "Save Changes" when finished
7. When saving changes:
   - If hosted on a server with PHP, changes are saved directly to the JSON file
   - If viewing locally, a JSON file will be downloaded; replace the existing file

## Future Enhancements

- Add notification system for schedule changes
- Implement calendar export feature (iCal, Google Calendar)
- Create a mobile app version
- Add SMS notifications for schedule updates