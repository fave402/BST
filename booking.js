// COMPLETE DROPDOWN CONTROLLER FOR ALL DROPDOWNS
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOCATION DROPDOWNS CONTROLLER =====
    // These are the 2-column grid dropdowns for airport selection
    const locationDropdownBtns = document.querySelectorAll('.dropdown-btn');
    const locationDropdownContents = document.querySelectorAll('.dropdown-content');

    console.log('Location dropdowns found:', locationDropdownContents.length);

    // Handle location dropdown button clicks
    locationDropdownBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            console.log('Location dropdown button clicked:', index);
            
            // Close all other location dropdowns
            locationDropdownContents.forEach((content, contentIndex) => {
                if (contentIndex !== index) {
                    content.classList.remove('show');
                }
            });
            
            // Close all mini dropdowns when location dropdown opens
            miniDropdownContents.forEach(content => {
                content.classList.remove('show');
            });
            
            // Toggle current location dropdown
            const currentDropdown = locationDropdownContents[index];
            currentDropdown.classList.toggle('show');
            
            console.log('Location dropdown show state:', currentDropdown.classList.contains('show'));
        });
    });

    // Handle location option selection (airport codes)
    document.querySelectorAll('.location-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const abbr = this.querySelector('.abbr').textContent;
            const full = this.querySelector('.full').textContent;
            
            console.log('Location selected:', abbr, full);
            
            // Find the parent dropdown and update the button
            const dropdown = this.closest('.dropdown-content');
            const container = dropdown.closest('.dropdown-container');
            const button = container.querySelector('.dropdown-btn');
            
            // Update button text
            const buttonAbbr = button.querySelector('.abbr');
            const buttonFull = button.querySelector('.full');
            
            if (buttonAbbr && buttonFull) {
                buttonAbbr.textContent = abbr + ' ▼';
                buttonFull.textContent = full;
            }
            
            // Close dropdown
            dropdown.classList.remove('show');
        });
    });

    // ===== MINI DROPDOWNS CONTROLLER =====
    // These are the small dropdowns (Flight Type, Passengers, Hotel Booking)
    const miniDropdownBtns = document.querySelectorAll('.mini-dropdown-btn');
    const miniDropdownContents = document.querySelectorAll('.mini-dropdown-btn-contents');

    console.log('Mini dropdowns found:', miniDropdownContents.length);

    // Handle mini dropdown button clicks
    miniDropdownBtns.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            console.log('Mini dropdown button clicked:', index);
            
            // Close all other mini dropdowns
            miniDropdownContents.forEach((content, contentIndex) => {
                if (contentIndex !== index) {
                    content.classList.remove('show');
                }
            });
            
            // Close all location dropdowns when mini dropdown opens
            locationDropdownContents.forEach(content => {
                content.classList.remove('show');
            });
            
            // Toggle current mini dropdown
            const currentMiniDropdown = miniDropdownContents[index];
            currentMiniDropdown.classList.toggle('show');
            
            console.log('Mini dropdown show state:', currentMiniDropdown.classList.contains('show'));
        });
    });

    // Handle mini dropdown option selection
    document.querySelectorAll('.mini-dropdown-btn-contents li').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const selectedText = this.textContent;
            
            console.log('Mini option selected:', selectedText);
            
            // Find the parent dropdown and update the button
            const dropdown = this.closest('.mini-dropdown-btn-contents');
            const container = dropdown.closest('.mini-dropdown-container');
            const button = container.querySelector('.mini-dropdown-btn .mini');
            
            if (button) {
                // Update button text (keep the dropdown arrow)
                button.textContent = selectedText + ' ▼';
            }
            
            // Close dropdown
            dropdown.classList.remove('show');
        });
    });

    // ===== GLOBAL CLICK HANDLERS =====
    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        // Don't close if clicking on a dropdown button or content
        if (!e.target.closest('.dropdown-btn') && 
            !e.target.closest('.dropdown-content') &&
            !e.target.closest('.mini-dropdown-btn') && 
            !e.target.closest('.mini-dropdown-btn-contents')) {
            
            // Close all location dropdowns
            locationDropdownContents.forEach(content => {
                content.classList.remove('show');
            });
            
            // Close all mini dropdowns
            miniDropdownContents.forEach(content => {
                content.classList.remove('show');
            });
        }
    });

    // Prevent dropdowns from closing when clicking inside them
    locationDropdownContents.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Only stop propagation if not clicking on an option
            if (!e.target.closest('.location-option')) {
                e.stopPropagation();
            }
        });
    });

    miniDropdownContents.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Only stop propagation if not clicking on an option
            if (!e.target.closest('li')) {
                e.stopPropagation();
            }
        });
    });

    // ===== CLOSE BUTTON HANDLERS =====
    // Handle close button clicks for location dropdowns (the × button)
    locationDropdownContents.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Check if clicked in the close button area (top-right corner)
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // If click is in top-right 30px area, close dropdown
            if (clickX > rect.width - 30 && clickY < 30) {
                this.classList.remove('show');
                e.stopPropagation();
            }
        });
    });

    // ===== DEBUG INFO =====
    console.log('Dropdown controller initialized');
    console.log('Location dropdowns:', locationDropdownContents.length);
    console.log('Mini dropdowns:', miniDropdownContents.length);
});