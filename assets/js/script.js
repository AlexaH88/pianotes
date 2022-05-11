// hamburger menu
// This code was taken from W3 Schools and adapted - see details in the README
function hamburgerButton() {
    let navLinks = document.getElementById('nav-links');
    let mainPageContainer = document.getElementById('main-page-container');

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        mainPageContainer.style.marginTop = "150px";
    } else {
        navLinks.style.display = "block";
        mainPageContainer.style.marginTop = "400px";
    }
};