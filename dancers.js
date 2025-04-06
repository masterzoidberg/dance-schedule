// Function to extract and process dancer names
function processDancerNames() {
    const dancerSet = new Set();
    
    // Extract all dancer names from schedule data
    scheduleData.forEach(item => {
        if (item['Dancer Names']) {
            // Split names by comma and trim whitespace
            const names = item['Dancer Names'].split(',').map(name => name.trim());
            names.forEach(name => dancerSet.add(name));
        }
    });

    // Convert to array and sort alphabetically
    const uniqueDancers = Array.from(dancerSet).sort((a, b) => a.localeCompare(b));

    // Get the dropdown element
    const dropdown = document.getElementById('dancer-filter');
    
    // Clear existing options (keeping "All Dancers")
    while (dropdown.options.length > 1) {
        dropdown.remove(1);
    }

    // Add each dancer as an option
    uniqueDancers.forEach(dancer => {
        const option = document.createElement('option');
        option.value = dancer;
        option.textContent = dancer;
        dropdown.appendChild(option);
    });
    
    // Update status message with count
    document.getElementById('status-message').textContent = 
        `Schedule data loaded successfully! Showing ${scheduleData.length} routines with ${uniqueDancers.length} dancers.`;
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', processDancerNames);