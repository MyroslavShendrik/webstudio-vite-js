const images = document.querySelectorAll('.our-developers-list__img');

const loadImage = (img) => {
    img.src = img.dataset.src;
};

const observerImg = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observerImg.unobserve(entry.target);
                console.log(`Елемент ${entry.target.alt} видно!`);
            }
        });
    },
    {
        threshold: 0.9,
    }
);

images.forEach(img => observerImg.observe(img));