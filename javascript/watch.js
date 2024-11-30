const images = ["./../images/watch-img/banner-img.webp", "./../images/watch-img/banner-img2.webp", "./../images/watch-img/banner-img3.webp", "./../images/watch-img/banner-img4.webp"];
let index = 0;
const slide = document.getElementById('slider');


function forward() {
    if (index < images.length - 1) {
        index++;
    }
    else {
        index = 0;
    }

    slide.src = images[index]
}

function backward() {
    if (index > 0) {
        index--;
    }
    else {
        index = images.length - 1;
    }
    slide.src = images[index]
}