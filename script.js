const translations = {
    ar: {
        // ... باقي الترجمات
        book_now: 'احجز الآن',
        // أضف أي مفاتيح جديدة إذا لزم الأمر
    },
    en: {
        // ... باقي الترجمات
        book_now: 'Book Now',
        // في النسخة الإنجليزية، نترك العملة كما هي (MAD) لكننا سنعرضها بشكل منفصل
    }
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
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // تغيير العملة حسب اللغة
    document.querySelectorAll('.price .currency').forEach(el => {
        el.textContent = lang === 'ar' ? 'درهم' : 'MAD';
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

// زر العودة إلى الأعلى
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// مؤشر القسم النشط في شريط التنقل
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// تهيئة AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});