
//Creacion del modulo principal
var app = (function(window,undefined){
  "use strict"
  var _init = () => console.log("Hola mundo");
  return{
    init: _init
  }
})(window);

$(document).ready(function(){
  app.init();
})
