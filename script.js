// Example: Light/Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement('button');
    toggle.textContent = "Toggle Dark Mode";
    toggle.style.margin = "10px";

    document.body.insertBefore(toggle, document.body.firstChild);

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

/* Add this in your CSS for dark mode styling */
body.dark-mode {
    background-color: #333;
    color: #f4f4f9;
}
