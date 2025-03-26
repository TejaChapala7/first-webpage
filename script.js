document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("response").innerText = "Thank you for reaching out!";
    } else {
        document.getElementById("response").innerText = "Please fill all fields.";
    }
});
