// إضافة مكتبة الـ Confetti وتزويد كمية الفرقعة عند فتح الموقع
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
confettiScript.onload = () => {
    // تشغيل فرقعة قوية وكثيفة تغطي الشاشة
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

// تفعيل الوضع الداكن افتراضياً إذا لم يكن هناك اختيار مخزن مسبقاً
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

// دالة تقليل الرقم عند الضغط على الكارت
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

// دالة إعادة تعيين العداد عند الضغط على زر إعادة
function resetCount(event, btnElement) {
    event.stopPropagation(); // لمنع تفعيل الضغط على الكارت نفسه
    const cardElement = btnElement.closest('.card');
    const counterSpan = cardElement.querySelector('.counter');
    const counterB = counterSpan.querySelector('b');
    
    const originalCount = counterSpan.getAttribute('data-count');
    counterB.textContent = originalCount;
    cardElement.classList.remove('completed');
}
