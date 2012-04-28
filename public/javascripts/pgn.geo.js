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

    parseResp: function(resp) {
      var city, 
        county,
        state,
        country;

      _.each(resp.address_components, function(i){
        if (i.types[0] === 'locality') { 
          city = i.long_name;
        }
        if (i.types[0] === 'administrative_area_level_2') { 
          county = i.long_name;
        }
        if (i.types[0] === 'administrative_area_level_1') { 
          state = i.short_name;
        }
        if (i.types[0] === 'country') { 
          country = i.short_name;
        }
      });

      return {'city': city, 'county': county, 'state': state, 'country': country};
    }
  };

  return _self;

})(jQuery);