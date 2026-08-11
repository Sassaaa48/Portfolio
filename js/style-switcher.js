// --- ACCENT THEME STYLE SWITCHER ---
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
            // Store choice in local storage
            localStorage.setItem('accentColor', color);
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}

// Persist user's choice on page load
window.addEventListener('load', () => {
    const savedAccent = localStorage.getItem('accentColor');
    if (savedAccent) {
        setActiveStyle(savedAccent);
    }
});
