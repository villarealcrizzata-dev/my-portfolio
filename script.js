// Welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to Christa's Portfolio! 💗");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Button click message
const aboutButton = document.querySelector(".btn");

aboutButton.addEventListener("click", function () {
    console.log("Opening About Me section...");
});

// Project hover message
const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {

    project.addEventListener("mouseenter", function () {
        project.style.cursor = "pointer";
    });

});

// Display current year automatically
const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    © ${currentYear} Christa Villareal | My Pink Portfolio 💗;
