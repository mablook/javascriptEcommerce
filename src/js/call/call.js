/*******************************************************************************
 *
 *      Product           : Mercedes.io
 *      Developer         : Marcelo Bossle
 *      ServiceModulePart : Portal
 *      Object            : call (javascript async call)
 *      Description       : All app calls
 *
 ******************************************************************************/

/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : getJSON()
 *      url               : address for call
 *      Description       : Responsible for calls, check the status of the LIVE or TEST application. Inserts a random delay on the test-only call
 *                        : IMPORTANT
 *                        : Using Promise in Async function
 *
 ******************************************************************************/

const getJSON = (url) => {

  return new Promise ( (resolve,reject) => {
        let response = fetch(url)
        .then(
          response =>
              response.json()
          )
          .catch(
            error => {return error = "Response error = " + url;}
          );

/*******************************************************************************
 *
 *                Hold window.
 *                Returns the resolve with random timeout
 *
 ******************************************************************************/

          window.setTimeout(
            function() {
              resolve(response);
            }, Math.random() * 1500 + 500);

  });

}


/*******************************************************************************
 *
 *      Setings
 *      No setings
 *
 *      Function          : appGetList()
 *      urlToCall         : address for call
 *      Description       : Responsible for calls, check the status of the LIVE or TEST application. Inserts a random delay on the test-only call
 *                        : IMPORTANT
 *                        : Using Promise in Async function
 *
 ******************************************************************************/


const appGetList = function(){

  let appStorage = [];
  const LIST = require("../list/list");
  const BASKET = require("../basket/basket");
  const markers = getJSON(urlToCall);

        let conteiner = document.getElementById("container");
        conteiner.classList.add("on-search");
        markers
        .then(response => {
          LIST.createList(response);
        })
        .then( _ => {

          localStorage.setItem("appStorage", JSON.stringify(appStorage));
          BASKET.buttomSellInit();
          conteiner.classList.remove("on-search");
        })
        .catch(error => {
         console.error("ups!", error);
        });

  }

  export { getJSON , appGetList };
