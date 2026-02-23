// Typing Effect
let text = "Rushikesh Javare";
let index = 0;

function typeEffect() {
    if(index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

window.onload = typeEffect;

// Scroll Animation
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".section");

    sections.forEach(function(sec) {
        let position = sec.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition) {
            sec.classList.add("show");
        }
    });
});

// Mobile Menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// Modal
function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields!";
    } 
    else if(!email.includes("@")) {
        formMessage.style.color = "red";
        formMessage.innerText = "Enter valid email!";
    } 
    else {
        formMessage.style.color = "green";
        formMessage.innerText = "Form submitted successfully!";
    }
});