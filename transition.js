document.addEventListener('DOMContentLoaded', () => {
    // Find all link tags on the page
    const transitionLinks = document.querySelectorAll('a');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            
            // Ignore links that open in a new tab or are just anchor links (#)
            if (this.target === '_blank' || this.getAttribute('href').startsWith('#')) return;

            e.preventDefault(); // Stop the browser from instantly jumping
            
            const targetUrl = this.href;
            
            // Trigger the CSS fade out
            document.body.classList.add('fade-out');
            
            // Wait for 500ms (matching our CSS animation time), then load new page
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); 
        });
    });
});

// Fix for the "Back" button: 
// Browsers sometimes cache the page state (including our hidden fade-out class). 
// This removes the class if the user clicks the browser's back button.
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('fade-out');
    }
});