function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "../../images/fashion-page/saree1.png";
      }
      else if(num == 2){
        mainImage.src = "../../images/fashion-page/saree2.png";
      }
      else if(num == 3){
        mainImage.src = "../../images/fashion-page/sarree3.png";
      }
      else if(num == 4){
        mainImage.src = "../../images/fashion-page/saree1.png";
      }
      else if(num == 5){
        mainImage.src = "../../images/fashion-page/sarree5.png";
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
   