import * as APP from './app/app'; // app init
import * as CALL from './call/call'; // call functions
import * as LIST from './list/list'; // list functions
import * as SEARCH from './search/search'; // search functions
import * as BASKET from './basket/basket'; // basket list functions

  window.addEventListener('load',
  function() {

      APP.APP.start();
      CALL.appGetList();

  }, false);



