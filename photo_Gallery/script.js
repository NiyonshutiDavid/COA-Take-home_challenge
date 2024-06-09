// script.js
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const fullImage = document.getElementById('full-image');
        fullImage.src = thumbnail.dataset.full;
        document.querySelector('.full-size-view').style.display = 'flex';
    });
});

document.querySelector('.full-size-view').addEventListener('click', () => {
    document.querySelector('.full-size-view').style.display = 'none';
});

