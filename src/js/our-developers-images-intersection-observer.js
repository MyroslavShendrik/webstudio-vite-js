const images = document.querySelectorAll('.our-developers-list__img');

const loadImage = (img) => {
    img.src = img.dataset.src;

    const picture = img.parentElement;
    const sources = picture.querySelectorAll('source');

    sources.forEach(source => {
        source.srcset = source.dataset.srcset;
    });
};

const observerImg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observerImg.unobserve(entry.target);
            console.log(`Завантажено: ${entry.target.alt}`);
        }
    });
}, {
    threshold: 0.5
});

images.forEach(img => observerImg.observe(img));
