if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

PGN.map = (function ($) {
  
  var _self;

  _self = {

    getUserLocation: function () {
      // Try W3C Geolocation
      if (navigator.geolocation) { 
        //geolocation supported
        navigator.geolocation.getCurrentPosition(function(position) {

          //save position
          PGN.userLocation = position.coords;

        }, function() { 
          //geolocation denied  
        });
      } else { 
        //geolocation not supported
      }
    },

    

  };

  return _self;

})(jQuery);