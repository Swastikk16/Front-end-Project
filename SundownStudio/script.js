const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var e = document.querySelector("#elem1")
// e.addEventListener("mouseenter" , function () {
//     var image = e.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`;

// })

function page4animation() {
    var x = document.querySelector("#element-container");
    var fixed = document.querySelector("#fixed-img");
    x.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    })

    x.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })


    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}

swiperAnimation();
page4animation();
