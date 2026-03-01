JS
Copy

// Typewriter effect function
function typeWriter(text, elementId, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = ''; // Clear any existing text
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing when page loads
window.onload = function() {
    typeWriter("hello this is yousef.", "typewriter", 100);
};