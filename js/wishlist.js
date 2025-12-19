function removeItemfromCart() {
    let remove = document.querySelector(".shoppingDiv1");
    remove.style.display = "none";
    let price = document.querySelector(".shoppingDivOrder");
    price.textContent = "$0";
  }