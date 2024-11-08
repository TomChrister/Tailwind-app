const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const dotsContainer = slider.nextElementSibling;
    const dots = dotsContainer.querySelectorAll('.dot');
    const numberOfSlides = dots.length;

    const updateActiveDot = (activeIndex) => {
        dots.forEach((dot, idx) => {
            dot.classList.toggle('bg-gray-800', idx === activeIndex);
            dot.classList.toggle('bg-gray-400', idx !== activeIndex);
        });
    };
    updateActiveDot(0);

    slider.addEventListener('scroll', () => {
        const slideWidth = slider.scrollWidth / numberOfSlides;
        const activeIndex = Math.round(slider.scrollLeft / slideWidth);
        updateActiveDot(activeIndex);
    });
});
