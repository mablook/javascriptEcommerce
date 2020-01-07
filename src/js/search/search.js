/*******************************************************************************
 *
 *      Product           : Mercedes.io
 *      Developer         : Marcelo Bossle
 *      ServiceModulePart : Portal
 *      Object            : search (javascript async call)
 *      Description       : All app search
 *
 ******************************************************************************/

/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : fSearch()
 *      input, ul, li     : HTML elements
 *      searchTextInputValue  : String that holds the data key of each product for the search.
 *      noResult          : Array to count the number of results, used to display the message NO RESULTS FOUND.
 *      Description       : Function that searches the elements contained in the container (listed products)
 *
 ******************************************************************************/

let fSearch = function() {

  let input, filter, ul, li, searchTextInputValue, noResult;

  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("item_list_hold");
  li = ul.getElementsByClassName('li_items');
  noResult = [];

/*******************************************************************************
 *
 *      Loop through all products, and hide those who don't match the search query
 *
 ******************************************************************************/


  for (let i = 0; i < li.length; i++) {
    searchTextInputValue = li[i].getAttribute("data-key");
    if (searchTextInputValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("hide");
      noResult.push("show");
    } else {
      li[i].classList.add("hide");
      noResult.push("hide");
    }
  }

  if(!noResult.includes('show')){
    document.getElementById("item_list").classList.add("no-result");
  }else{
    document.getElementById("item_list").classList.remove("no-result");
  }

/*******************************************************************************
 *
 *      Displays the message No cars with that name were found :( when no products are found
 *
 ******************************************************************************/

    if(noResult === 0){
      ul.classList.add("no-result");
    }else{
      ul.classList.remove("no-result");
    }

}

/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : startSearch()
 *      Description       : Add listener to input SEARCH with function to perform search
 *
 ******************************************************************************/


let startSearch = function(){
    document.getElementById('search').addEventListener('keyup', function(event) {
      fSearch();
  });
}

export {fSearch , startSearch};
