function toggleStack(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    const isActive = wrapper.classList.contains('active-stack');
    
    // Close all other projects and reset their scroll positions to the top
    const allProjects = document.querySelectorAll('.project-wrapper');
    allProjects.forEach(proj => {
        proj.classList.remove('active-stack');
        proj.scrollTop = 0; // Scroll back to main image when closed
    });

    // If the clicked project wasn't already open, open it
    if (!isActive) {
        wrapper.classList.add('active-stack');
    }
}