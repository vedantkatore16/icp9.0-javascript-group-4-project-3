
function MoveImage(num){
    const mainImage = document.getElementById('main');
      if(num == 1){
        mainImage.src = "../images/gents-page/kurta 1.png";
      }
      else if(num == 2){
        mainImage.src = "../images/gents-page/kurta 2.png";
      }
      else if(num == 3){
        mainImage.src = "../images/gents-page/kurta 3.png";
      }
      else if(num == 4){
        mainImage.src = "../images/gents-page/kurta 4.png";
      }
      else if(num == 5){
        mainImage.src = "../images/gents-page/kurta 5.png";
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