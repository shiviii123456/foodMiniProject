$(document).ready(function () {
    $(".food-slider").slick({
        //automatically play hone ke liye
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
    });
})

let x = [1, 2, 3, -6, -7];
let y = 0;
const z = x.map(c => {
    if (c > 0)
        y = y + 1
});
console.log(y);