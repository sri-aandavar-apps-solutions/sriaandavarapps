// js/theme.js
const themeToggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// but we handle it here for simplicity.
function applyTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun text-yellow-400"></i>';
    } else {
        html.classList.remove('dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon text-slate-700"></i>';
    }
    localStorage.setItem('theme', theme);
}

// Initial Setup
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (systemPrefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

// Toggle listener
themeToggleBtn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }
});
