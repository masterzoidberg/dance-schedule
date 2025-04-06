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

- `index.html` - Main application file with embedded schedule data
- `dancers.js` - JavaScript module for processing dancer information
- `dancer-schedule.json` - Schedule data in JSON format

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

## Future Enhancements

- Add ability to refresh data from external JSON file
- Implement user authentication for admin features
- Add editing capabilities for administrators