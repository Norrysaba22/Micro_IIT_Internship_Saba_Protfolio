document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(0);
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form validation and alert
    document.getElementById("contact-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        this.reset();
    });

});

// Smooth fade-in effect for hero section
// const heroContent = document.querySelector(".hero-content");
// heroContent.style.opacity = 0;
// heroContent.style.transform = "translateY(30px)";
// setTimeout(() => {
//     heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out";
//     heroContent.style.opacity = 1;
//     heroContent.style.transform = "translateY(0)";
// }, 500);

//     // Navbar background change on scroll
//     window.addEventListener("scroll", function () {
//         const header = document.querySelector("header");
//         if (window.scrollY > 50) {
//             header.style.background = "rgba(0, 0, 0, 0.9)";
//         } else {
//             header.style.background = "rgba(0, 0, 0, 0.8)";
//         }
//     });
// });
