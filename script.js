// Function to handle tab switching
function openTab(event, tabName) {
    let tabLinks = document.getElementsByClassName("tab-links");
    let tabContents = document.getElementsByClassName("tab-content");

    for (let link of tabLinks) {
        link.classList.remove("active-link");
    }
    for (let content of tabContents) {
        content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// ---------------- FORM VALIDATION (Client-side) ----------------
// This client-side validation gives instant feedback but the PHP script is the final authority.
document.querySelector("form").addEventListener("submit", function(e) {
    let name = document.querySelector("input[name='Name']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();
    let msg = document.querySelector("textarea[name='Message']").value.trim();

    if (name === "" || email === "" || msg === "") {
        alert("All fields are required!");
        e.preventDefault();
        return;
    } 
    // Checks if the email is a non-empty string and ends with "@gmail.com"
    else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
        alert("Only Gmail addresses allowed!");
        e.preventDefault();
        return;
    }
});

// ---------------- DOM EVENTS (Social Icons Hover) ----------------
let icons = document.querySelectorAll(".social-icons a i");

icons.forEach(icon => {
    icon.addEventListener("mouseover", function() {
        this.style.color = "aqua";
        this.style.transform = "translateY(-5px)";
    });

    icon.addEventListener("mouseout", function() {
        // Resets to CSS defaults
        this.style.color = ""; 
        this.style.transform = ""; 
    });
});

// ---------------- DYNAMIC SECTIONS (Project List Click) ----------------
let boxes = document.querySelectorAll(".project-list div");

boxes.forEach(box => {
    box.addEventListener("click", function() {
        this.classList.toggle("open");
    });
});

// ---------------- PHP Response Handling ----------------
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('msg');
    const statusDiv = document.getElementById('message-status');

    if (status && message && statusDiv) {
        statusDiv.textContent = decodeURIComponent(message);
        
        if (status === 'success') {
            statusDiv.className = 'message-success';
        } else if (status === 'error') {
            statusDiv.className = 'message-error';
        }
        
        // Remove the parameters from the URL after displaying the message (optional)
        // history.replaceState({}, document.title, window.location.pathname);
    }
});