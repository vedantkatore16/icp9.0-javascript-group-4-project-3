
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

