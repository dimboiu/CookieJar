'use strict';

var CookieJar = (function(){
  var save = function(name, value, expiration){
    var d = new Date();
    d.setTime(d.getTime() + (expiration*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
    console.log('cookie set - ' + name + ':' + value);
  };
  return {
    put: function(name, value, expiration){
      save(name, value, expiration);
    },
    get: function(name){
      var r = new RegExp(name + '=([^(;)]+)');
      var result = r.exec(document.cookie);
      return (result) ? result[1] : undefined;
    },
    remove: function(name){
      save(name, null, -10000)
    }
  }
})();