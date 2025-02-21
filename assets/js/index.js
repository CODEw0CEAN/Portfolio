
// Get all navigation links
const navLinks = document.querySelectorAll(".topnav a");

// Get the current page URL
const currentURL = window.location.href;

// Loop through links and check if href matches current URL
navLinks.forEach(link => {
    if (link.href === currentURL) {
        link.classList.add("topnav");
    }
});

