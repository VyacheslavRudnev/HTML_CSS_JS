document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const albumsContainer = document.querySelector('.albums_cards_container');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (!carousel || !albumsContainer || !prevBtn || !nextBtn) {
        console.error("Carousel elements doesn't exist");
        return;
    }

    let scrollAmount = 0;
    const scrollStep = 180;

    function updateMaxScroll() {
        return albumsContainer.scrollWidth - carousel.clientWidth;
    }

    //для прокрутки вперед
    nextBtn.addEventListener('click', function () {
        const maxScroll = updateMaxScroll();
        if (scrollAmount < maxScroll) {
            scrollAmount = Math.min(scrollAmount + scrollStep, maxScroll);
            albumsContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    //для прокрутки назад
    prevBtn.addEventListener('click', function () {
        if (scrollAmount > 0) {
            scrollAmount = Math.max(scrollAmount - scrollStep, 0);
            albumsContainer.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});