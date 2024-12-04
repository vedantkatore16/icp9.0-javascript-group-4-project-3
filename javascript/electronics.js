const images = ["./../images/electronics/disscount.jpg", "./../images/electronics/buds.jpg"];

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




function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "https://m.media-amazon.com/images/I/61FcqvW8+wL._SX679_.jpg";
      }
      else if(num == 2){
        mainImage.src = "https://m.media-amazon.com/images/I/61Egbtl06bL._SX679_.jpg";
      }
      
      else if(num == 4){
        mainImage.src = "https://m.media-amazon.com/images/I/61qjpQPhStL._SX679_.jpg";
      }
      else if(num == 5){
        mainImage.src = "../../images/watch-img/watch-1.webp";
      }
    }

    function MoveImage1(num){
      const mainImage = document.getElementById('main');
        if(num == 1){
          mainImage.src = "../../images/watch-img/watch-2.webp";
        }
        else if(num == 2){
          mainImage.src = "../../images/watch-img/watch-2.0.webp";
        }
        else if(num == 3){
          mainImage.src = "../../images/watch-img/watch-2.1.webp";
        }
        else if(num == 4){
          mainImage.src = "../../images/watch-img/watch-2.2.webp";
        }
        else if(num == 5){
          mainImage.src = "../../images/watch-img/watch-2.3.webp";
        }
      }

    
    const quantElement = document.getElementById('quantity'); 
    
    function incre(){
      let quantity = parseInt(quantElement.innerText);
      quantElement.innerText = ++quantity;
    }
    function dece(){
        let quantity = parseInt(quantElement.innerText);
        if(quantity>1){
            quantElement.innerText = --quantity;
        }
    }

    function order(){
      alert('Your order is confirmed...');
         }


  const stars = document.querySelectorAll(".stars i");
   stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
    
      stars.forEach((star,index2) => {
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      });
    });
   });

   function changeImage(fileName){
    let img = document.querySelector("#bannerImage");
    img.setAttribute("src",fileName)
  }

   function randomImage(fileName){
    let img = document.querySelector("#shoesImage");
    img.setAttribute("src",fileName)
  }

  function sadiImage(fileName){
    let img = document.querySelector("#newSadi");
    img.setAttribute("src",fileName)
  }

  function clickImage(fileName){
    let img = document.querySelector("#rounded");
    img.setAttribute("src",fileName)
  }
   
  
   