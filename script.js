const themeToggleBtn = document.getElementById('theme-toggle');

// تفعيل الوضع الداكن المحفوظ
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️';
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