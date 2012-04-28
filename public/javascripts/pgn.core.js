if (typeof PGN === 'undefined' || !PGN) {
  var PGN = {};
}

if (typeof PGN.core === 'undefined' || !PGN.core) {
  PGN.core = {};
}

PGN.core = (function ($) {
  var _self;

  _self = {
      injectRights: function (data) {
        $('.content ul.rights').append(_self.buildRightsTemplate(data));
      },

      buildRightsTemplate: function (data) {
        var list = '';

        $.each(data, function (key, value) {
          list += '<li class="header">' + value.name + ' (' + key + ')<ul>';
          $.each(value.rights, function (key, value) {
            list += '<li class="' + !!value +'">' + key + '</li>';
          });
          list += '</ul></li>';
        });

        return list; //_.template(template, {result: data})
      },

      getData: function () {
        $.ajax({
          url: '/rights?state=' + params.state + '&city=' + params.city + '&county=' + params.county,
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
