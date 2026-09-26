// مكتبة الـ Confetti
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
confettiScript.onload = () => {
    var duration = 2.5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
};
document.head.appendChild(confettiScript);

const themeToggleBtn = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️';
    }
});

// دالة التبديل بين أذكار الصباح وأذكار المساء
let currentMode = 'sabah';
function toggleAzkarMode() {
    const sabahSection = document.getElementById('sabah-section');
    const masaSection = document.getElementById('masa-section');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const switchBtn = document.getElementById('switch-mode-btn');

    if (currentMode === 'sabah') {
        sabahSection.style.display = 'none';
        masaSection.style.display = 'flex';
        pageTitle.textContent = 'أذكار المساء';
        pageSubtitle.textContent = '❀ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ ❀';
        switchBtn.textContent = '☀️ أذكار الصباح';
        currentMode = 'masa';
    } else {
        masaSection.style.display = 'none';
        sabahSection.style.display = 'flex';
        pageTitle.textContent = 'أذكار الصباح';
        pageSubtitle.textContent = '❀ اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِينَا مُحَمَّدٍ ❀';
        switchBtn.textContent = '🌙 أذكار المساء';
        currentMode = 'sabah';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// دالة تقليل العداد
function decreaseCount(cardElement) {
    const counterB = cardElement.querySelector('.counter b');
    let currentCount = parseInt(counterB.textContent);

    if (currentCount > 0) {
        currentCount--;
        counterB.textContent = currentCount;

        if (currentCount === 0) {
            cardElement.classList.add('completed');
        }
    }
}

// دالة إعادة تعيين العداد
function resetCount(event, btnElement) {
    event.stopPropagation();
    const cardElement = btnElement.closest('.card');
    const counterSpan = cardElement.querySelector('.counter');
    const counterB = counterSpan.querySelector('b');
    
    const originalCount = counterSpan.getAttribute('data-count');
    counterB.textContent = originalCount;
    cardElement.classList.remove('completed');
}
