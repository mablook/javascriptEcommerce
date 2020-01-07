/*******************************************************************************
 *
 *      Product           : Mercedes.io
 *      Developer         : Marcelo Bossle
 *      ServiceModulePart : Portal
 *      Object            : app (javascript class setup)
 *      Description       : App config file
 *
 ******************************************************************************/

/*******************************************************************************
 *
 *      Setings
 *      appName           : Name App
 *      appState          : State of App test(this test url) live(Mercedes Developer)
 *      appLocate         : Locate started in app, changes with call information
 *      appApikey         : Api Key from Mercedes Developer
 *      urlJSON           : Url with call list
 *        testUrl         : test
 *        liveUrl         : live Mercedes Developer
 *
 *      Object            : appinit()
 *      Description       : Init app settings, check situation
 *                          Initialize input
 *
 ******************************************************************************/

  let APP = {
    'appName': "Mercedes.io",
   'appState': "test",
  'appLocale': "de-DE",
  'appApiKey': "ac45968e-a693-48e5-b684-xxxxxxxxxxxx",
    'urlJSON': [{
      'testUrl' : "mocks/listHero.json",
      'liveUrl' : "https://api.mercedes-benz.com/configurator/v1/markets?language=en&apikey="
    }
  ],
    start : function (){

      const SEARCH = require("../search/search.js");
      let searchInput = document.getElementById("search");

      searchInput.placeholder = "Type to filter";

        window.appLocale = this.appLocale;
        if(this.appState === "test"){
          window.appState = "test";
          window.urlToCall = this.urlJSON[0].testUrl;
        }else if(this.appState === "live"){
          window.appState = "live";
          window.urlToCall = this.urlJSON[0].liveUrl + this.appApiKey;
        }

        SEARCH.startSearch();

      console.log("Name:", this.appName, "Live:" , this.urlJSON[0].liveUrl + this.appApiKey);

    },


  };



export {APP};

