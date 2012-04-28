if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

PGN.map = (function ($) {
  
  var _self;

  _self = {

    getUserLocation: function (callback) {
      // Try W3C Geolocation
      if (navigator.geolocation) { 
        //geolocation supported
        navigator.geolocation.getCurrentPosition(function(position) {

          //save position
          PGN.userLocation = position.coords;

          if (typeof callback === "function" && callback) { callback(); }

        }, function() { 
          //geolocation denied  
        });
      } else { 
        //geolocation not supported
      }
    },

    reverseGeocode: function(location) {
      geocoder.geocode({
        'latlng' : location.lat + ',' + location.lng 
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results)
        } else {
          console.log("Error" + status);
        }
      });
    },

    }

  };

  return _self;

})(jQuery);