// ui.js - Простая рабочая версия

function toggleFaq(item) {
    const body = item.querySelector('.faq-body');
    const icon = item.querySelector('.faq-icon');
    
    if (!body || !icon) return;

    const isOpen = item.classList.contains('open');
    
    item.classList.toggle('open');
    
    if (isOpen) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-plus');
        body.style.display = 'none';
    } else {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-xmark');
        body.style.display = 'block';
    }
}

function setFaqTab(el) {
    document.querySelectorAll('.faq-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    el.classList.add('active');
}

// Для миниатюр (чтобы тоже работало)
function setThumb(el, idx) {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

console.log('✅ ui.js загружен');