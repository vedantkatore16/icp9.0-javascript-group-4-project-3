const images = ["./../images/toys-page-img/banner-2.png", "./../images/toys-page-img/banner-3.jpg"];
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
}ute("src",fileName)
  
   