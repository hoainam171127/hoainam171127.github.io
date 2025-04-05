document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let scrollAmount = 0;
    const itemWidth = document.querySelector(".product").offsetWidth + 20; // 20px là khoảng cách giữa các ảnh
    const maxScroll = (carousel.children.length - 3) * itemWidth;

    nextBtn.addEventListener("click", function() {
        if (scrollAmount < maxScroll) {
            scrollAmount += itemWidth * 3; // Di chuyển 3 ảnh mỗi lần
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    prevBtn.addEventListener("click", function() {
        if (scrollAmount > 0) {
            scrollAmount -= itemWidth * 3;
            carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });
});
