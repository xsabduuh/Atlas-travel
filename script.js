const translations = {
    ar: { /* نفس الترجمات السابقة - يمكنك نسخها من الرد السابق */ },
    en: { /* نفس الترجمات السابقة */ }
};

// الوضع الليلي
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
let theme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', theme);
themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
themeToggle.addEventListener('click', () => {
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// الترجمة
let currentLang = localStorage.getItem('lang') || 'ar';
const langToggle = document.getElementById('langToggle');
const setLanguage = (lang) => {
    currentLang = lang;
    html.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
};
setLanguage(currentLang);
langToggle.addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));

// قائمة الهاتف
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

// إرسال النموذج
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message sent!');
});