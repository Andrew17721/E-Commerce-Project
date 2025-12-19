function removeItemfromCart() {
    let remove = document.querySelector(".shoppingDiv1");
    remove.style.display = "none";
    let price = document.querySelector(".shoppingDivOrder");
    price.textContent = "$0";
  }
  

function addToCardHandler() {
    let cartItemElement = document.querySelector(".shoppingDiv1");
    cartItemElement.style.display = "block";
    let price = document.querySelector(".shoppingDivOrder");
    price.textContent = "$2000";
}  