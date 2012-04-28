if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

PGN.core = (function ($) {
  var _self;

  _self = {
      injectRights: function (data) {
        $('.content').append(_self.buildRightsTemplate(data));
      },

      buildRightsTemplate: function (data) {
        var template = '\
          <h3><%= rights.city.name %></h3>\
          <ul>\
            <li>TODO</li>\
          </ul>\
          <h3><%= rights.county.name %></h3>\
          <ul>\
            <li>TODO</li>\
          </ul>\
          <h3>National</h3>\
          <ul>\
            <li>TODO</li>\
          </ul>\
          <h3>States</h3>\
          <ul>\
            <li>TODO</li>\
            <li>Foo</li>\
          </ul>\
        '; 

        return _.template(template, {rights: data})
      },

      getData: function () {
        $.ajax({
          url: '/mock_data/data.json',
          dataType: 'json',
          success: function (data) {
            console.log(data);
            _self.injectRights(data);
          },
          error: function (data) {
            console.log(data);
          }
        });
      }
  };

  return _self;
})(jQuery);
