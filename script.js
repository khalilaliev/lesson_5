const input = document.getElementById('input');
const box = document.getElementById('div');

input.addEventListener('focus', () => {
    box.style.display = 'block';
});

input.addEventListener('blur', () => {
    box.style.display = 'none';
});