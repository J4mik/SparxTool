document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.querySelector('.theme-selector');

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle on click
    themeSelector.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeSelector.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        console.log(`${theme.charAt(0).toUpperCase() + theme.slice(1)} mode enabled`);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const userAgent = navigator.userAgent.toLowerCase();

    const chromeBtn = document.getElementById('download-chrome');
    const firefoxBtn = document.getElementById('download-firefox');
    const otherBtn = document.getElementById('download-other');

    // Hide all buttons initially
    chromeBtn.style.display = 'none';
    firefoxBtn.style.display = 'none';
    otherBtn.style.display = 'none';

    if (userAgent.includes('chrome') && !userAgent.includes('edg') && !userAgent.includes('opr')) {

        chromeBtn.style.display = 'inline-block';
    } else if (userAgent.includes('firefox')) {
        firefoxBtn.style.display = 'inline-block';
    } else {
        otherBtn.style.display = 'inline-block';
    }
});

// Apply saved theme setting
if (document.documentElement.getAttribute('data-theme') === 'dark' || localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    checkbox.checked = false;
}