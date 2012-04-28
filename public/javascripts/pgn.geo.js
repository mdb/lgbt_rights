if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

PGN.geo = (function ($) {
  
  var _self,
    geocoder = new google.maps.Geocoder();

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

    reverseGeocode: function(location, callback) {
      var latLng = new google.maps.LatLng(location.latitude, location.longitude)
      geocoder.geocode({
        'latLng' : latLng
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (typeof callback === "function" && callback) { callback(results); }
        } else {
          if (typeof callback === "function" && callback) { callback(status); }
        }
      });
    },

    geocode: function(location, callback) {
      geocoder.geocode({
        'address' : location
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (typeof callback === "function" && callback) { callback(results); }
        } else {
          if (typeof callback === "function" && callback) { callback(status); }
        }
      });
    },

  };

  return _self;

})(jQuery);