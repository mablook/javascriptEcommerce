/*******************************************************************************
 *
 *      Product           : Mercedes.io
 *      Developer         : Marcelo Bossle
 *      ServiceModulePart : Portal
 *      Object            : basket (javascript basket)
 *      Description       : Shopping basket functions
 *
 ******************************************************************************/

 /*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : buyItem()
 *      eId               : Element ID
 *      p                 : Product price
 *      appStorage        : Purchase information object, stored in local storage
 *      Description       : Function responsible for managing the shopping cart, Uses local storage to store information.
 *
 ******************************************************************************/


let buyItem = function(eId,p){

    let appStorage = JSON.parse(localStorage.getItem("appStorage"));

    let setLayoutItemOnBasket = document.getElementById(eId);
    let setLayoutItemOnBasketDescription = setLayoutItemOnBasket.querySelector('.item_description');
    let setLayoutItemOnBasketButtom = setLayoutItemOnBasket.querySelector('.item_button');

    if(appStorage === null){
      appStorage.push({
        "itemId": "",
        "price": ""
      });
      appStorage = JSON.stringify(appStorage);
    }

    if(!appStorage.some(item => item.itemId === eId)){
      appStorage.push({
        "itemId": eId,
        "price": p
      });
      setLayoutItemOnBasketDescription.classList.add("bg-black");
      setLayoutItemOnBasketButtom.classList.add("item_buttom_buy");
      setLayoutItemOnBasketButtom.textContent = "Remove From Shopping Bag!";

    }else{
      let index = appStorage.findIndex(obj => obj.itemId==eId);
      appStorage.splice(index,1);
      setLayoutItemOnBasketDescription.classList.remove("bg-black");
      setLayoutItemOnBasketButtom.classList.remove("item_buttom_buy");
      setLayoutItemOnBasketButtom.textContent = "Add to Shopping Bag";
    }

    let total = 0;
    for(var i = 0; i < appStorage.length; i++){
        total = Number(Number(total) + Number(parseFloat(appStorage[i].price))).toFixed(2);
    }

      let updatePrice = document.getElementById("cart-total");
      updatePrice.innerHTML = Number(Number(total).toFixed(1)).toLocaleString(appLocale, { style: 'currency', currency: 'EUR' })

    localStorage.setItem("appStorage", JSON.stringify(appStorage));
}


/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : buttomSellInit()
 *      Description       : Function that enables the buttons for purchase, identifies the data stored in the element.
 *                          Includes event listener on click button
 *
 ******************************************************************************/


const buttomSellInit = function () {

  var classBuy = document.getElementsByClassName("item_button");
  for (var i = 0; i < classBuy.length; i++) {
    classBuy[i].addEventListener('click', function(event) {
      var closest = event.currentTarget;
      var elementId = closest.getAttribute("data-id");
      let elementPrice = closest.getAttribute("data-price");
        buyItem(elementId,elementPrice);
      });
  }

}


  export {buttomSellInit , buyItem};
