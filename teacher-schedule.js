document.addEventListener('DOMContentLoaded', function() {
    // We'll use embedded schedule data to avoid CORS issues when loading from local file system
    const scheduleData = getDanceScheduleData();
    processScheduleData(scheduleData);
});

// Function to get schedule data - embedded to avoid CORS issues with local files
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
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "JR/PRE-TEEN SOLO + PRE-TEEN/TEEN DUO/TRIO COMPETITION",
            "Est. Performance Time": "8:44 AM",
            "Routine Number": 38,
            "Routine Name": "So Broken",
            "Category": "Pre-Teen Solo Contemporary",
            "Num Dancers": 1,
            "Dancer Names": "Keringtyn Spencer",
            "Choreographer": "Travis Wall",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "JR/PRE-TEEN SOLO + PRE-TEEN/TEEN DUO/TRIO COMPETITION",
            "Est. Performance Time": "9:27 AM",
            "Routine Number": 53,
            "Routine Name": "Please I Have Only This",
            "Category": "Pre-Teen Solo Contemporary",
            "Num Dancers": 1,
            "Dancer Names": "Charleigh Reich",
            "Choreographer": "Travis Wall",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "SENIOR SOLO COMPETITION",
            "Est. Performance Time": "1:15 PM",
            "Routine Number": 117,
            "Routine Name": "Don't Walk Away",
            "Category": "Senior Solo Contemporary",
            "Num Dancers": 1,
            "Dancer Names": "Casey Mckenna",
            "Choreographer": "Travis Wall",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "SENIOR SOLO COMPETITION",
            "Est. Performance Time": "3:45 PM",
            "Routine Number": 170,
            "Routine Name": "Poinciana",
            "Category": "Senior Solo Tap",
            "Num Dancers": 1,
            "Dancer Names": "Caroline Sison",
            "Choreographer": "Anthony Morigerato",
            "Props": "Yes, Big Props",
            "Activity Type": "Performance"
        },
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "TEEN SOLO + SR DUO/TRIO + SR SM GROUP COMPETITION",
            "Est. Performance Time": "7:05 PM",
            "Routine Number": 224,
            "Routine Name": "O God Protect Me",
            "Category": "Teen Solo Contemporary",
            "Num Dancers": 1,
            "Dancer Names": "Lulu Gandia",
            "Choreographer": "Travis Wall",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Friday",
            "Date": "4/11/2025",
            "Competition Session": "TEEN SOLO + SR DUO/TRIO + SR SM GROUP COMPETITION",
            "Est. Performance Time": "9:26 PM",
            "Routine Number": 273,
            "Routine Name": "Begin The Beguine",
            "Category": "Senior Small Group Tap",
            "Num Dancers": 9,
            "Dancer Names": "Lila Kai Ashley, Lulu Gandia, Ava Lee Kaufman, Casey Mckenna, Ellen Grace Olansen, Jaslyn Proctor, Caroline Sison, Myla Smith, Hannah White",
            "Choreographer": "Anthony Morigerato",
            "Props": "Yes, Big Props",
            "Activity Type": "Performance"
        },
        {
            "Day": "Saturday",
            "Date": "4/12/2025",
            "Competition Session": "MINI/JR/PRE-TEEN COMPETITION",
            "Est. Performance Time": "2:59 PM",
            "Routine Number": 299,
            "Routine Name": "Dance With Me",
            "Category": "Junior Small Group Jazz",
            "Num Dancers": 6,
            "Dancer Names": "Matilda Brown, Zaedith Ghacham, Clara Nigbur, Victoria Rodriguez, Khloe Taylor, Ryatt Weinberg",
            "Choreographer": "Cami Walton",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Saturday",
            "Date": "4/12/2025",
            "Competition Session": "MINI/JR/PRE-TEEN COMPETITION",
            "Est. Performance Time": "3:45 PM",
            "Routine Number": 314,
            "Routine Name": "The Way That You Love Me",
            "Category": "Pre-Teen Small Group Jazz",
            "Num Dancers": 8,
            "Dancer Names": "Anna Doebert, Emma Ford, Lily Anna King, Anna Oddo, Charleigh Reich, Paisley Reich, Keringtyn Spencer, Elara Zamani",
            "Choreographer": "Cami Walton",
            "Props": "No",
            "Activity Type": "Performance"
        },
        {
            "Day": "Saturday",
            "Date": "4/12/2025",
            "Competition Session": "MINI/JR/PRE-TEEN COMPETITION",
            "Est. Performance Time": "4:28 PM",
            "Routine Number": 328,
            "Routine Name": "News Of The Fall",
            "Category": "Pre-Teen Small Group Contemporary",
            "Num Dancers": 9,
            "Dancer Names": "Anna Doebert, Emma Ford, Lulu Gandia, Lily Anna King, Anna Oddo, Charleigh Reich, Paisley Reich, Keringtyn Spencer, Elara Zamani",
            "Choreographer": "Travis Wall",
            "Props": "Yes, Big Props",
            "Activity Type": "Performance"
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
        },
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
        }
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
    
    // Generate arrival and run-through entries
    const processingResults = generateProcessedEntries(scheduleByDay);
    
    // Populate the schedule sections
    populateScheduleSection('friday', processingResults.friday);
    populateScheduleSection('saturday', processingResults.saturday);
    populateScheduleSection('sunday', processingResults.sunday);
    populateFullSchedule(processingResults);
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
        const processedEntries = [];
        
        // Group entries by session
        const sessionGroups = {};
        entries.forEach(entry => {
            const session = entry['Competition Session'];
            if (!sessionGroups[session]) {
                sessionGroups[session] = [];
            }
            sessionGroups[session].push(entry);
        });
        
        // For each session, generate the entries in chronological order
        for (const session in sessionGroups) {
            const sessionEntries = sessionGroups[session];
            
            // Add session header
            processedEntries.push({
                type: 'session-header',
                title: session
            });
            
            // Group by dancer for arrival times
            const dancersArrival = {};
            
            // Process each performance, adding arrival and run-through entries
            sessionEntries.forEach(entry => {
                // Create arrival entries for individual performances
                if (entry['Activity Type'] === 'Performance' && entry['Num Dancers'] <= 3) {
                    const dancers = entry['Dancer Names'].split(', ');
                    dancers.forEach(dancer => {
                        // Only add arrival for a dancer once per session
                        if (!dancersArrival[dancer]) {
                            // Calculate arrival time (2.5 hours before first performance)
                            const arrivalTime = calcTimeOffset(entry['Est. Performance Time'], -150);
                            
                            processedEntries.push({
                                type: 'arrival',
                                time: arrivalTime,
                                dancer: dancer,
                                perfTime: entry['Est. Performance Time']
                            });
                            
                            dancersArrival[dancer] = true;
                        }
                    });
                }
                
                // Create group arrival entries
                if (entry['Activity Type'] === 'Performance' && entry['Num Dancers'] > 3) {
                    // Check if group arrival entry already exists for this group
                    const groupName = entry['Category'].includes('Group') ? 
                        entry['Category'].split(' ').slice(-2).join(' ') : 'Group';
                    
                    // Calculate arrival time (2.5 hours before performance)
                    const arrivalTime = calcTimeOffset(entry['Est. Performance Time'], -150);
                    
                    processedEntries.push({
                        type: 'group-arrival',
                        time: arrivalTime,
                        groupName: groupName,
                        dancers: entry['Dancer Names']
                    });
                }
                
                // Add run-thru entries (1 hour before performance)
                if (entry['Activity Type'] === 'Performance') {
                    const runThruTime = calcTimeOffset(entry['Est. Performance Time'], -60);
                    
                    processedEntries.push({
                        type: 'run-thru',
                        time: runThruTime,
                        routine: entry['Routine Name'],
                        number: entry['Routine Number']
                    });
                }
                
                // Add the performance entry itself
                if (entry['Activity Type'] === 'Performance') {
                    processedEntries.push({
                        type: 'performance',
                        time: entry['Est. Performance Time'],
                        number: entry['Routine Number'],
                        title: entry['Routine Name'],
                        category: entry['Category'],
                        performer: entry['Dancer Names'],
                        isGroup: entry['Num Dancers'] > 3
                    });
                } else if (entry['Activity Type'] === 'Award') {
                    processedEntries.push({
                        type: 'award',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'] || 'Award Ceremony',
                    });
                } else if (entry['Activity Type'] === 'Rehearsal') {
                    processedEntries.push({
                        type: 'rehearsal',
                        time: entry['Est. Performance Time'],
                        title: entry['Routine Name'] || 'Group Rehearsals',
                    });
                }
            });
        }
        
        // Sort all entries by time
        processedEntries.sort((a, b) => {
            // Session headers always go at their chronological position
            if (a.type === 'session-header') {
                return -1;  // Put session headers before other entries of the same time
            }
            if (b.type === 'session-header') {
                return 1;  // Put other entries after session headers of the same time
            }
            
            const aTime = a.time ? convertTimeToMinutes(a.time) : 0;
            const bTime = b.time ? convertTimeToMinutes(b.time) : 0;
            return aTime - bTime;
        });
        
        results[day] = processedEntries;
    }
    
    return results;
}

function populateScheduleSection(day, entries) {
    const sectionId = `${day}-schedule`;
    const section = document.getElementById(sectionId);
    
    // Clear any existing content except the heading
    const heading = section.querySelector('.day-title');
    section.innerHTML = '';
    section.appendChild(heading);
    
    if (entries.length === 0) {
        section.innerHTML += '<p>No schedule information available for this day.</p>';
        return;
    }
    
    // Add each entry to the section
    let currentSession = null;
    
    entries.forEach(entry => {
        if (entry.type === 'session-header') {
            if (entry.title !== currentSession) {
                currentSession = entry.title;
                const sessionHeader = document.createElement('h3');
                sessionHeader.className = 'session-title';
                sessionHeader.textContent = entry.title;
                section.appendChild(sessionHeader);
            }
        } else if (entry.type === 'arrival') {
            const html = `
                <div class="entry arrival-entry">
                    <div class="time-column">${entry.time}</div>
                    <div class="description-column">${entry.dancer} arrive with hair & makeup done to do full stretch & warm up</div>
                </div>
            `;
            section.innerHTML += html;
        } else if (entry.type === 'group-arrival') {
            const html = `
                <div class="entry arrival-entry">
                    <div class="time-column">${entry.time}</div>
                    <div class="description-column">${entry.groupName} dancers arrive with hair & makeup done to do full stretch & warm up</div>
                </div>
            `;
            section.innerHTML += html;
        } else if (entry.type === 'run-thru') {
            const html = `
                <div class="entry run-thru-entry">
                    <div class="time-column">${entry.time}</div>
                    <div class="description-column">#${entry.number} ${entry.routine} Run-Through</div>
                </div>
            `;
            section.innerHTML += html;
        } else if (entry.type === 'performance') {
            if (entry.isGroup) {
                const html = `
                    <div class="entry group-entry">
                        <span class="performance-time">${entry.time}</span>
                        <span class="routine-number">#${entry.number}</span>
                        <span class="routine-title">${entry.title}</span>
                        <span class="category">${entry.category}</span> - 
                        <span class="group-name">Group</span>
                    </div>
                `;
                section.innerHTML += html;
            } else {
                const html = `
                    <div class="entry performance-entry">
                        <span class="performance-time">${entry.time}</span>
                        <span class="routine-number">#${entry.number}</span>
                        <span class="routine-title">${entry.title}</span>
                        <span class="category">${entry.category}</span> - 
                        <span class="performer">${entry.performer}</span>
                    </div>
                `;
                section.innerHTML += html;
            }
        } else if (entry.type === 'award') {
            const html = `
                <div class="entry award-entry">
                    ${entry.time} - ${entry.title}
                </div>
            `;
            section.innerHTML += html;
        } else if (entry.type === 'rehearsal') {
            const html = `
                <div class="entry rehearsal-entry">
                    ${entry.time} - ${entry.title}
                </div>
            `;
            section.innerHTML += html;
        }
    });
    
    // Add back to top link
    const backToTopLink = document.createElement('a');
    backToTopLink.href = '#';
    backToTopLink.className = 'back-to-top';
    backToTopLink.textContent = 'Back to Top';
    section.appendChild(backToTopLink);
}

function populateFullSchedule(processingResults) {
    const section = document.getElementById('full-schedule');
    
    // Clear any existing content except the heading
    const heading = section.querySelector('.day-title');
    section.innerHTML = '';
    section.appendChild(heading);
    
    // Add each day's schedule
    for (const day in processingResults) {
        const entries = processingResults[day];
        
        if (entries.length > 0) {
            const dayTitle = document.createElement('h3');
            dayTitle.className = 'day-title';
            dayTitle.textContent = day.charAt(0).toUpperCase() + day.slice(1); // Capitalize first letter
            section.appendChild(dayTitle);
            
            // Process entries for this day
            let currentSession = null;
            
            entries.forEach(entry => {
                if (entry.type === 'session-header') {
                    if (entry.title !== currentSession) {
                        currentSession = entry.title;
                        const sessionHeader = document.createElement('h4');
                        sessionHeader.className = 'session-title';
                        sessionHeader.textContent = entry.title;
                        section.appendChild(sessionHeader);
                    }
                } else if (entry.type === 'arrival') {
                    const html = `
                        <div class="entry arrival-entry">
                            <div class="time-column">${entry.time}</div>
                            <div class="description-column">${entry.dancer} arrive with hair & makeup done to do full stretch & warm up</div>
                        </div>
                    `;
                    section.innerHTML += html;
                } else if (entry.type === 'group-arrival') {
                    const html = `
                        <div class="entry arrival-entry">
                            <div class="time-column">${entry.time}</div>
                            <div class="description-column">${entry.groupName} dancers arrive with hair & makeup done to do full stretch & warm up</div>
                        </div>
                    `;
                    section.innerHTML += html;
                } else if (entry.type === 'run-thru') {
                    const html = `
                        <div class="entry run-thru-entry">
                            <div class="time-column">${entry.time}</div>
                            <div class="description-column">#${entry.number} ${entry.routine} Run-Through</div>
                        </div>
                    `;
                    section.innerHTML += html;
                } else if (entry.type === 'performance') {
                    if (entry.isGroup) {
                        const html = `
                            <div class="entry group-entry">
                                <span class="performance-time">${entry.time}</span>
                                <span class="routine-number">#${entry.number}</span>
                                <span class="routine-title">${entry.title}</span>
                                <span class="category">${entry.category}</span> - 
                                <span class="group-name">Group</span>
                            </div>
                        `;
                        section.innerHTML += html;
                    } else {
                        const html = `
                            <div class="entry performance-entry">
                                <span class="performance-time">${entry.time}</span>
                                <span class="routine-number">#${entry.number}</span>
                                <span class="routine-title">${entry.title}</span>
                                <span class="category">${entry.category}</span> - 
                                <span class="performer">${entry.performer}</span>
                            </div>
                        `;
                        section.innerHTML += html;
                    }
                } else if (entry.type === 'award') {
                    const html = `
                        <div class="entry award-entry">
                            ${entry.time} - ${entry.title}
                        </div>
                    `;
                    section.innerHTML += html;
                } else if (entry.type === 'rehearsal') {
                    const html = `
                        <div class="entry rehearsal-entry">
                            ${entry.time} - ${entry.title}
                        </div>
                    `;
                    section.innerHTML += html;
                }
            });
        }
    }
    
    // Add back to top link
    const backToTopLink = document.createElement('a');
    backToTopLink.href = '#';
    backToTopLink.className = 'back-to-top';
    backToTopLink.textContent = 'Back to Top';
    section.appendChild(backToTopLink);
}

// Helper function to convert time to minutes for sorting
function convertTimeToMinutes(timeStr) {
    if (!timeStr) return 0;
    
    const [hourMinute, ampm] = timeStr.split(' ');
    let [hour, minute] = hourMinute.split(':').map(num => parseInt(num, 10));
    
    // Convert to 24-hour format
    if (ampm === 'PM' && hour !== 12) {
        hour += 12;
    } else if (ampm === 'AM' && hour === 12) {
        hour = 0;
    }
    
    return hour * 60 + minute;
}

// Calculate time offset with formatting
function calcTimeOffset(timeStr, offsetMinutes) {
    const [hourStr, minuteStr] = timeStr.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    
    // Extract AM/PM
    const ampm = minuteStr.includes('AM') ? 'AM' : 'PM';
    
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