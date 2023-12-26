let images = document.querySelectorAll('.image');
images.forEach(image => {
    image.addEventListener('click', (e) => {
        removeActive();
        e.target.classList.add('active');
    });
});

function removeActive() {
    images.forEach(image => {
        image.classList.remove('active');
    });
}