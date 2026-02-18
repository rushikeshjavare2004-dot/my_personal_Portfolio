function showMessage() {
    alert("Welcome to My Portfolio Website!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields!";
    } else {
        formMessage.style.color = "green";
        formMessage.innerText = "Form submitted successfully!";
    }
});
