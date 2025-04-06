document.addEventListener('DOMContentLoaded', function() {
    // Try to fetch the data from the JSON file first
    fetch('dancer-schedule.json')
        .then(response => response.json())
        .then(data => {
            console.log("Successfully loaded schedule data from JSON file");
            processScheduleData(data);
        })
        .catch(error => {
            console.warn("Error loading from JSON file, using embedded data as fallback:", error);
            // Fall back to embedded data if fetch fails (e.g., when running locally with CORS issues)
            const scheduleData = getDanceScheduleData();
            processScheduleData(scheduleData);
        });
});

// Fallback schedule data - only used if JSON file cannot be loaded
function getDanceScheduleData() {
    return [
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "JR/PRE-TEEN SOLO + PRE-TEEN/TEEN DUO/TRIO COMPETITION",
            "Est. Performance Time": "8:36 AM",
            "Routine Number": 35,
            "Routine Name": "The Stranded",
            "Category": "Pre-Teen Solo Contemporary",
            "Num Dancers": 1,
            "Dancer Names": "Paisley Reich",
            "Choreographer": "Travis Wall",
            "Props": "Yes, Small Prop",
            "Activity Type": "Performance"
        },
        // ... more data would be here in real implementation
        {
            "Day": "Sunday",
            "Date": "4/13/2025",
            "Competition Session": "AWARDS CEREMONY",
            "Est. Performance Time": "12:30 PM",
            "Routine Number": null,
            "Routine Name": "Teen & Senior Awards",
            "Category": "Awards",
            "Num Dancers": null,
            "Dancer Names": "",
            "Choreographer": "",
            "Props": "",
            "Activity Type": "Award"
        },
        // Additional award ceremonies for completeness
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "JR/PRE-TEEN SOLO + PRE-TEEN/TEEN DUO/TRIO COMPETITION",
            "Est. Performance Time": "11:00 PM",
            "Routine Number": null,
            "Routine Name": "TEEN SOLO & TEEN/SENIOR SMALL GROUP AWARDS",
            "Category": "Awards",
            "Num Dancers": null,
            "Dancer Names": "",
            "Choreographer": "",
            "Props": "",
            "Activity Type": "Award"
        },
        {
            "Day": "Saturday",
            "Date": "4/12/2025",
            "Competition Session": "MINI/JR/PRE-TEEN COMPETITION",
            "Est. Performance Time": "6:30 PM",
            "Routine Number": null,
            "Routine Name": "MINI, JUNIOR, & PRE-TEEN GROUP AWARDS",
            "Category": "Awards",
            "Num Dancers": null,
            "Dancer Names": "",
            "Choreographer": "",
            "Props": "",
            "Activity Type": "Award"
        },
        {
            "Day": "Sunday",
            "Date": "4/13/2025",
            "Competition Session": "AWARDS CEREMONY",
            "Est. Performance Time": "10:00 AM",
            "Routine Number": null,
            "Routine Name": "Junior & Pre-Teen Awards",
            "Category": "Awards",
            "Num Dancers": null,
            "Dancer Names": "",
            "Choreographer": "",
            "Props": "",
            "Activity Type": "Award"
        }
        // Note: In actual implementation, this would contain all entries
    ];
}

function processScheduleData(scheduleData) {
    // Initialize schedule containers for each day
    const scheduleByDay = {
        'friday': [],
        'saturday': [],
        'sunday': []
    };
    
    // Group data by day
    scheduleData.forEach(item => {
        const day = item.Day.toLowerCase();
        if (scheduleByDay[day]) {
            scheduleByDay[day].push(item);
        }
    });
    
    // Sort each day's entries by performance time
    for (const day in scheduleByDay) {
        scheduleByDay[day].sort((a, b) => {
            return convertTimeToMinutes(a['Est. Performance Time']) - convertTimeToMinutes(b['Est. Performance Time']);
        });
    }
    
    // Generate processed entries for each day
    const processedEntries = generateProcessedEntries(scheduleByDay);
    
    // Populate the schedule sections with tabular layout
    populateScheduleTable('friday', processedEntries.friday);
    populateScheduleTable('saturday', processedEntries.saturday);
    populateScheduleTable('sunday', processedEntries.sunday);
    populateFullSchedule(processedEntries);
}

function generateProcessedEntries(scheduleByDay) {
    const results = {
        'friday': [],
        'saturday': [],
        'sunday': []
    };
    
    // Process each day
    for (const day in scheduleByDay) {
        const entries = scheduleByDay[day];
        let processedEntries = [];
        
        // Group entries by session
        const sessionGroups = {};
        entries.forEach(entry => {
            const session = entry['Competition Session'];
            if (!sessionGroups[session]) {
                sessionGroups[session] = [];
            }
            sessionGroups[session].push(entry);
        });
        
        // For each session, generate the entries with proper chronological order
        for (const session in sessionGroups) {
            const sessionEntries = sessionGroups[session];
            
            // Add session header
            processedEntries.push({
                type: 'session-header',
                title: session
            });
            
            // Create arrival entries for all dancers in this session
            const dancers = new Set();
            sessionEntries.forEach(entry => {
                if (entry['Activity Type'] === 'Performance') {
                    entry['Dancer Names'].split(', ').forEach(dancer => {
                        dancers.add(dancer);
                    });
                }
            });
            
            // Add a single "All dancers arrive" entry for each session
            if (dancers.size > 0) {
                const firstPerformance = sessionEntries.find(e => e['Activity Type'] === 'Performance');
                if (firstPerformance) {
                    const arrivalTime = calcTimeOffset(firstPerformance['Est. Performance Time'], -150); // 2.5 hours before
                    processedEntries.push({
                        type: 'arrival',
                        time: arrivalTime,
                        title: 'ALL DANCERS ARRIVE TO DO FULL ROPE STRETCH'
                    });
                }
            }
            
            // Add entries for workshops/instructions if needed
            sessionEntries.forEach(entry => {
                if (entry['Activity Type'] === 'Workshop') {
                    processedEntries.push({
                        type: 'workshop',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'] || 'WORKSHOP CLASSES BEGIN',
                        number: null
                    });
                }
            });
            
            // Add run-through entries
            sessionEntries.forEach(entry => {
                if (entry['Activity Type'] === 'Performance') {
                    const runThruTime = calcTimeOffset(entry['Est. Performance Time'], -60); // 1 hour before
                    
                    processedEntries.push({
                        type: 'run-thru',
                        time: runThruTime,
                        title: `${entry['Routine Name']} run thru`,
                        number: entry['Routine Number']
                    });
                }
            });
            
            // Add performance and award entries
            sessionEntries.forEach(entry => {
                if (entry['Activity Type'] === 'Performance') {
                    processedEntries.push({
                        type: 'performance',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'],
                        number: entry['Routine Number'],
                        category: entry['Category'],
                        choreographer: entry['Choreographer'],
                        dancers: entry['Dancer Names'],
                        numDancers: entry['Num Dancers']
                    });
                } else if (entry['Activity Type'] === 'Award') {
                    processedEntries.push({
                        type: 'award',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'] || 'AWARD CEREMONY',
                        number: null
                    });
                } else if (entry['Activity Type'] === 'Rehearsal') {
                    processedEntries.push({
                        type: 'rehearsal',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'] || 'GROUP REHEARSAL',
                        number: null
                    });
                }
            });
        }
        
        // Sort all entries by time
        processedEntries.sort((a, b) => {
            if (a.type === 'session-header') {
                if (b.type === 'session-header') {
                    // If both are session headers, maintain original order
                    return 0;
                }
                // Put session headers at the beginning
                return -1;
            }
            if (b.type === 'session-header') {
                return 1;
            }
            
            const aTime = a.time ? convertTimeToMinutes(a.time) : 0;
            const bTime = b.time ? convertTimeToMinutes(b.time) : 0;
            return aTime - bTime;
        });
        
        // Now process to ensure session headers appear just before their first entries
        let organizedEntries = [];
        let currentSession = null;
        
        for (let i = 0; i < processedEntries.length; i++) {
            const entry = processedEntries[i];
            
            if (entry.type === 'session-header') {
                currentSession = entry;
                // Don't add the header yet, wait until we have an entry for this session
            } else {
                // If this is the first entry after a new session header, add the header first
                if (currentSession && !organizedEntries.includes(currentSession)) {
                    organizedEntries.push(currentSession);
                }
                organizedEntries.push(entry);
            }
        }
        
        results[day] = organizedEntries;
    }
    
    return results;
}

function populateScheduleTable(day, entries) {
    // Get the table element inside the day's section
    const tableBody = document.querySelector(`#${day}-content .schedule-table tbody`);
    if (!tableBody) return;
    
    // Clear existing content
    tableBody.innerHTML = '';
    
    // Track current session
    let currentSession = null;
    // Track if we need to add special awards section
    let hasAddedAwards = {};
    
    // First pass: collect all awards for special handling
    const awards = entries.filter(entry => entry.type === 'award');
    
    // Add rows for each entry
    entries.forEach(entry => {
        if (entry.type === 'session-header') {
            // Create a session header row
            const row = document.createElement('tr');
            row.className = 'session-header';
            
            const cell = document.createElement('td');
            cell.colSpan = 4; // Span across all columns
            cell.textContent = entry.title;
            
            row.appendChild(cell);
            tableBody.appendChild(row);
            
            currentSession = entry.title;
            
            // Check if we need to add an AWARDS CEREMONY header after this session
            const hasAwardsForThisSession = awards.some(award =>
                award.title.toUpperCase().includes(currentSession.split(' ')[0]) || // Check for session type in award title
                (currentSession.includes('SOLO') && award.title.toUpperCase().includes('SOLO'))
            );
            
            if (hasAwardsForThisSession && !hasAddedAwards[currentSession]) {
                hasAddedAwards[currentSession] = true;
            }
        } else {
            // Create a regular entry row
            const row = document.createElement('tr');
            
            // Set row class based on entry type
            if (entry.type === 'arrival') row.className = 'arrival-row';
            else if (entry.type === 'workshop') row.className = 'workshop-row';
            else if (entry.type === 'run-thru') row.className = 'runthru-row';
            else if (entry.type === 'award') row.className = 'awards-row';
            
            // Time cell
            const timeCell = document.createElement('td');
            timeCell.className = 'time-cell';
            timeCell.textContent = entry.time || '';
            timeCell.setAttribute('data-label', 'Time');
            
            // Number cell
            const numberCell = document.createElement('td');
            numberCell.className = 'number-cell';
            numberCell.textContent = entry.number || '';
            numberCell.setAttribute('data-label', 'Number');
            
            // Event cell
            const eventCell = document.createElement('td');
            eventCell.setAttribute('data-label', 'Event');
            
            if (entry.type === 'arrival') {
                eventCell.textContent = entry.title;
            } else if (entry.type === 'run-thru') {
                eventCell.textContent = entry.title;
            } else if (entry.type === 'workshop' || entry.type === 'rehearsal') {
                eventCell.textContent = entry.title;
            } else if (entry.type === 'award') {
                eventCell.textContent = entry.title;
            } else if (entry.type === 'performance') {
                eventCell.textContent = entry.title;
            }
            
            // Category cell
            const categoryCell = document.createElement('td');
            categoryCell.className = 'category-cell';
            categoryCell.textContent = entry.category || '';
            categoryCell.setAttribute('data-label', 'Category');
            
            // Append cells to row
            row.appendChild(timeCell);
            row.appendChild(numberCell);
            row.appendChild(eventCell);
            row.appendChild(categoryCell);
            
            // Append row to table
            tableBody.appendChild(row);
        }
    });
}

function populateFullSchedule(processedEntries) {
    const fullContent = document.getElementById('full-content');
    if (!fullContent) return;
    
    // Clear existing content
    fullContent.innerHTML = '';
    
    // Add each day's table
    for (const day in processedEntries) {
        if (processedEntries[day].length === 0) continue;
        
        // Create day header
        const dayHeader = document.createElement('h3');
        dayHeader.className = 'day-title';
        dayHeader.textContent = day.charAt(0).toUpperCase() + day.slice(1) + ', ' +
                               (day === 'friday' ? 'April 11' : day === 'saturday' ? 'April 12' : 'April 13') +
                               ', 2025';
        fullContent.appendChild(dayHeader);
        
        // Create table
        const table = document.createElement('table');
        table.className = 'schedule-table';
        
        // Add table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Time', 'Number', 'Event', 'Category'];
        headers.forEach((headerText, index) => {
            const th = document.createElement('th');
            th.textContent = headerText;
            if (index === 0) th.className = 'time-cell';
            if (index === 1) th.className = 'number-cell';
            if (index === 3) th.className = 'category-cell';
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Add table body
        const tbody = document.createElement('tbody');
        
        // Track current session
        let currentSession = null;
        
        // Add rows for each entry
        processedEntries[day].forEach(entry => {
            if (entry.type === 'session-header') {
                // Create a session header row
                const row = document.createElement('tr');
                row.className = 'session-header';
                
                const cell = document.createElement('td');
                cell.colSpan = 4; // Span across all columns
                cell.textContent = entry.title;
                
                row.appendChild(cell);
                tbody.appendChild(row);
                
                currentSession = entry.title;
            } else {
                // Create a regular entry row
                const row = document.createElement('tr');
                
                // Set row class based on entry type
                if (entry.type === 'arrival') row.className = 'arrival-row';
                else if (entry.type === 'workshop') row.className = 'workshop-row';
                else if (entry.type === 'run-thru') row.className = 'runthru-row';
                else if (entry.type === 'award') row.className = 'awards-row';
                
                // Time cell
                const timeCell = document.createElement('td');
                timeCell.className = 'time-cell';
                timeCell.textContent = entry.time || '';
                timeCell.setAttribute('data-label', 'Time');
                
                // Number cell
                const numberCell = document.createElement('td');
                numberCell.className = 'number-cell';
                numberCell.textContent = entry.number || '';
                numberCell.setAttribute('data-label', 'Number');
                
                // Event cell
                const eventCell = document.createElement('td');
                eventCell.setAttribute('data-label', 'Event');
                
                if (entry.type === 'arrival') {
                    eventCell.textContent = entry.title;
                } else if (entry.type === 'run-thru') {
                    eventCell.textContent = entry.title;
                } else if (entry.type === 'workshop' || entry.type === 'rehearsal') {
                    eventCell.textContent = entry.title;
                } else if (entry.type === 'award') {
                    eventCell.textContent = entry.title;
                } else if (entry.type === 'performance') {
                    eventCell.textContent = entry.title;
                }
                
                // Category cell
                const categoryCell = document.createElement('td');
                categoryCell.className = 'category-cell';
                categoryCell.textContent = entry.category || '';
                categoryCell.setAttribute('data-label', 'Category');
                
                // Append cells to row
                row.appendChild(timeCell);
                row.appendChild(numberCell);
                row.appendChild(eventCell);
                row.appendChild(categoryCell);
                
                // Append row to table
                tbody.appendChild(row);
            }
        });
        
        table.appendChild(tbody);
        fullContent.appendChild(table);
    }
}

// Helper function to convert time to minutes for sorting
function convertTimeToMinutes(timeStr) {
    if (!timeStr) return 0;
    
    const [hourMinute, ampm] = timeStr.split(' ');
    let [hour, minute] = hourMinute.split(':').map(num => parseInt(num, 10));
    
    // Extract actual minutes from format like "12:30 PM"
    const actualMinute = parseInt(minute.toString().substr(0, 2));
    
    // Convert to 24-hour format
    if (ampm === 'PM' && hour !== 12) {
        hour += 12;
    } else if (ampm === 'AM' && hour === 12) {
        hour = 0;
    }
    
    return hour * 60 + actualMinute;
}

// Calculate time offset with formatting
function calcTimeOffset(timeStr, offsetMinutes) {
    if (!timeStr) return '';
    
    const [hourMinute, ampm] = timeStr.split(' ');
    let [hour, minuteStr] = hourMinute.split(':');
    hour = parseInt(hour);
    
    // Extract minutes
    const minute = parseInt(minuteStr);
    
    // Calculate base hour in 24-hour format
    let hour24 = hour;
    if (ampm === 'PM' && hour !== 12) hour24 += 12;
    if (ampm === 'AM' && hour === 12) hour24 = 0;
    
    // Calculate total minutes since midnight
    let totalMinutes = hour24 * 60 + minute + offsetMinutes;
    
    // Make sure we stay within a day (0-1439 minutes)
    while (totalMinutes < 0) totalMinutes += 24 * 60;
    totalMinutes = totalMinutes % (24 * 60);
    
    // Round to nearest 15 minutes (quarter hour)
    totalMinutes = Math.round(totalMinutes / 15) * 15;
    
    // Convert back to 12-hour format
    const newHour24 = Math.floor(totalMinutes / 60);
    let newHour = newHour24 % 12;
    if (newHour === 0) newHour = 12;
    
    const newMinute = totalMinutes % 60;
    const newAmPm = newHour24 < 12 ? 'AM' : 'PM';
    
    return `${newHour}:${newMinute.toString().padStart(2, '0')} ${newAmPm}`;
}