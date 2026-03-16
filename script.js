// قاموس الترجمة
const translations = {
    ar: {
        home: 'الرئيسية',
        destinations: 'الوجهات',
        packages: 'الباقات',
        contact: 'اتصل بنا',
        book: 'احجز الآن',
        hero_title: 'اكتشف جمال العالم مع سفاري',
        hero_desc: 'رحلات مخصصة، عروض حصرية، وتجارب لا تُنسى. احجز الآن وانطلق في مغامرتك القادمة.',
        hero_btn: 'استكشف الباقات',
        destinations_title: 'وجهات سياحية مميزة',
        paris_desc: 'مدينة النور والرومانسية',
        bali_desc: 'جنة استوائية ساحرة',
        dubai_desc: 'مدينة المستقبل والتسوق',
        morocco_desc: 'ثقافة وأصالة وتنوع',
        ny_desc: 'المدينة التي لا تنام',
        packages_title: 'باقات سفر مميزة',
        duration_paris: '5 أيام / 4 ليالي',
        duration_bali: '7 أيام / 6 ليالي',
        duration_dubai: '4 أيام / 3 ليالي',
        duration_morocco: '8 أيام / 7 ليالي',
        book_now: 'احجز الآن',
        why_title: 'لماذا تختار سفاري؟',
        why_price: 'أفضل سعر مضمون',
        why_price_desc: 'نضمن لك أقل الأسعار في السوق',
        why_guides: 'مرشدين محترفين',
        why_guides_desc: 'مرشدون محليون بخبرة عالية',
        why_support: 'دعم على مدار الساعة',
        why_support_desc: 'فريق دعم متاح 24/7 لمساعدتك',
        why_secure: 'حجز آمن وموثوق',
        why_secure_desc: 'بياناتك آمنة مع تقنيات التشفير',
        testimonials_title: 'آراء المسافرين',
        testimonial1: '"أفضل وكالة سفر تعاملت معها. الرحلة كانت رائعة والتنظيم ممتاز."',
        testimonial2: '"باقات متنوعة وأسعار منافسة. سأكرر التجربة بالتأكيد."',
        testimonial3: '"الدعم الفوري والمرشدين المحترفين جعلوا الرحلة لا تنسى."',
        gallery_title: 'معرض الصور',
        contact_title: 'اتصل بنا',
        name_placeholder: ' ',
        email_placeholder: ' ',
        message_placeholder: ' ',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال',
        contact_info: 'معلومات التواصل',
        about: 'عن سفاري',
        about_text: 'نحن وكالة سفر رائدة نقدم تجارب سياحية مخصصة بأفضل الأسعار.',
        quick_links: 'روابط سريعة',
        follow_us: 'تابعنا',
        rights: 'جميع الحقوق محفوظة'
    },
    en: {
        home: 'Home',
        destinations: 'Destinations',
        packages: 'Packages',
        contact: 'Contact',
        book: 'Book Now',
        hero_title: 'Discover the Beauty of the World with Safari',
        hero_desc: 'Tailored trips, exclusive offers, and unforgettable experiences. Book now and start your next adventure.',
        hero_btn: 'Explore Packages',
        destinations_title: 'Popular Destinations',
        paris_desc: 'City of Light and Romance',
        bali_desc: 'Enchanting Tropical Paradise',
        dubai_desc: 'City of the Future & Shopping',
        morocco_desc: 'Culture, Authenticity & Diversity',
        ny_desc: 'The City That Never Sleeps',
        packages_title: 'Special Travel Packages',
        duration_paris: '5 days / 4 nights',
        duration_bali: '7 days / 6 nights',
        duration_dubai: '4 days / 3 nights',
        duration_morocco: '8 days / 7 nights',
        book_now: 'Book Now',
        why_title: 'Why Choose Safari?',
        why_price: 'Best Price Guarantee',
        why_price_desc: 'We guarantee the lowest prices',
        why_guides: 'Professional Guides',
        why_guides_desc: 'Experienced local guides',
        why_support: '24/7 Support',
        why_support_desc: 'Support team available 24/7',
        why_secure: 'Secure Booking',
        why_secure_desc: 'Your data is safe with encryption',
        testimonials_title: 'Customer Reviews',
        testimonial1: '"The best travel agency I\'ve dealt with. The trip was amazing and well organized."',
        testimonial2: '"Varied packages and competitive prices. I will definitely repeat."',
        testimonial3: '"Instant support and professional guides made the trip unforgettable."',
        gallery_title: 'Gallery',
        contact_title: 'Contact Us',
        name_placeholder: ' ',
        email_placeholder: ' ',
        message_placeholder: ' ',
        name: 'Name',
        email: 'Email',
        message: 'Your Message',
        send: 'Send',
        contact_info: 'Contact Information',
        about: 'About Safari',
        about_text: 'We are a leading travel agency offering customized travel experiences at the best prices.',
        quick_links: 'Quick Links',
        follow_us: 'Follow Us',
        rights: 'All rights reserved'
    }
};

// ===== إدارة السمات (الوضع الليلي/النهاري) =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// التحقق من السمة المحفوظة أو تعيين الوضع الليلي كافتراضي
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// تحديث أيقونة الزر حسب السمة
function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// تبديل السمة
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// ===== إدارة اللغة =====
let currentLang = localStorage.getItem('lang') || 'ar';
const langToggle = document.getElementById('langToggle');
const body = document.body;

// تطبيق اللغة المحفوظة
setLanguage(currentLang);

function setLanguage(lang) {
    currentLang = lang;
    htmlElement.lang = lang;
    body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
    localStorage.setItem('lang', lang);

    // تحديث جميع العناصر التي تحمل الخاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // تحديث placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// تبديل اللغة عند النقر على الزر
langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// ===== القائمة المتنقلة (Hamburger Menu) =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // تحويل شكل الهامبرغر إلى X
    hamburger.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== التمرير السلس للروابط الداخلية =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== معالجة إرسال نموذج الاتصال =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent!');
    this.reset();
});

// ===== تغيير خلفية الشريط عند التمرير =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', () => {
    // أي تهيئة إضافية إذا لزم الأمر
    console.log('Website loaded successfully with dark mode support!');
});