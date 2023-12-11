// Get all navigation links
const links = document.querySelectorAll('.navbar a');

// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the "selected" class from all links
        links.forEach(navLink => {
            navLink.classList.remove('selected');
        });

        // Add the "selected" class to the clicked link
        link.classList.add('selected');
    });
});
 