
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


// Get data from form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// validates the form info
function validateForm() {

    clearMessage();

    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (nameInput.value.length < 1) {
        errorNodes[2].innerText = "Please enter message!";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "You message has been sent. Thank You!";
    }
}

// clear error
function clearMessage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }

    success.innerText = "";

    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

// check if email is valid
function emailIsValid(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
