// 1. Quick Note Persistence Logic
const noteArea = document.getElementById('quick-note');

// Load saved note on startup
browser.storage.local.get('quickNote').then((res) => {
    if (res.quickNote) {
        noteArea.value = res.quickNote;
    }
});

// Save note automatically on typing
noteArea.addEventListener('input', () => {
    browser.storage.local.set({ quickNote: noteArea.value });
});

// 2. Counter Widget Logic
const counterValueSpan = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');

let currentCount = 0;

// Load saved counter on startup
browser.storage.local.get('counterCount').then((res) => {
    if (res.counterCount !== undefined) {
        currentCount = res.counterCount;
        counterValueSpan.textContent = currentCount;
    }
});

incrementBtn.addEventListener('click', () => {
    currentCount++;
    counterValueSpan.textContent = currentCount;
    browser.storage.local.set({ counterCount: currentCount });
});