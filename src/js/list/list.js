/*******************************************************************************
 *
 *      Product           : Mercedes.io
 *      Developer         : Marcelo Bossle
 *      ServiceModulePart : Portal
 *      Object            : list (javascript list)
 *      Description       : Create and prepare product list
 *
 ******************************************************************************/

/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : createItemList()
 *      Description       : Create elements to insert into HTML (DOM)
 *      populate          : Array with the information to insert into the element
 *
 *       <li class="li_items" id="{{itemId}}" data-key="{{itemKey}}">
 *          <div class="item"><h2 class="item_heading">{{itemTitle}}</h2>
 *          <div class="item_image"><img src="{{itemImage}}"></div>
 *          <div class="item_content">
 *              <p class="item_description">{{itemPrice}}</p>
 *              <a class="item_button" data-id="{{itemId}}" data-price="{{itemPrice}}">{{itemButton}}</a>
 *          </div>
 *          </div>
 *       </li>
 *
 ******************************************************************************/




const createItemList = function (populate){

         var newItemList = document.createElement('li');
         newItemList.classList.add("li_items");
         newItemList.setAttribute("id", populate.id);
         newItemList.setAttribute("data-key", populate.key);
         var newItem = document.createElement('div');
         newItem.classList.add("item");
         var newItemTitle = document.createElement('h2');
         newItemTitle.classList.add("item_heading");
         newItemTitle.innerHTML = populate.title;
         newItem.append(newItemTitle);
         var newItemImage = document.createElement('div');
         newItemImage.classList.add("item_image");
         var imageSrc = document.createElement('img');
         imageSrc.setAttribute("src", populate.image);
         newItemImage.append(imageSrc);
         newItem.append(newItemImage);
         var newItemContent = document.createElement('div');
         newItemContent.classList.add("item_content");
         var newItemDescription = document.createElement('p');
         newItemDescription.classList.add("item_description");
         newItemDescription.innerHTML = populate.price;
         var newItemButton = document.createElement('a');
         newItemButton.classList.add("item_button");
         newItemButton.setAttribute("data-id", populate.id);
         newItemButton.setAttribute("data-price", populate.priceNumber);
         newItemButton.innerHTML = "Add to Shopping Bag";
         newItemContent.appendChild(newItemDescription);
         newItemContent.appendChild(newItemButton);
         newItem.appendChild(newItemContent);
         newItemList.appendChild(newItem);
      return newItemList;

 }

 /*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : createList()
 *      Description       : Get json 'data' and prepare populate object correctly for elements to be created
 *      data              : JSON data
 *
 *                         populate.push({
 *                          "id": item ID,
 *                          "key": key texto use in search,
 *                          "title": title,
 *                          "image": image,
 *                          "priceNumber": price,
 *                          "price": price formated,
 *                        })
 *
 ******************************************************************************/


const createList = function (data){

    let populate = [];

    for (let x in data) {
      let price = parseFloat(data[x].price.amount);
      price = Number((price).toFixed(1)).toLocaleString(data[x].price.locale, { style: 'currency', currency: 'EUR' });
      populate.push({
        "id": 'mercedes_' + x,
        "key": data[x].modelClass + ' ' + data[x].version + ' ' + data[x].price.amount,
        "title": data[x].modelClass + ' ' + data[x].version,
        "image": data[x].imagePath,
        "priceNumber": data[x].price.amount,
        "price": price,
      })
    }

    let UL = document.getElementById("item_list_hold");

    for (let x in populate) {
      console.log(x,populate[x].title);
      let elementLi = createItemList(populate[x]);
      UL.appendChild(elementLi);
    }

}


export {createItemList , createList};
