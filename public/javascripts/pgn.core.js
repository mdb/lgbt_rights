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

      cleanRight: function(right, value) {
        switch(right) {
          case 'marrage':
            return 'Marriage';
          case 'discrimination':
            return 'Discrimination protection';
          case 'domestic_partnership':
            return 'Domestic-partner registry';
          case 'civil union':
            return 'Civil Union';
          case 'employment':
            return 'Employment discrimination protection';
          case 'adoption':
            return 'Adoption Rights';
          case 'legal_gender_change':
            return 'Legal gender change';
          case 'hate_crimes':
            return 'Hate crimes protection';
          case 'bullying_protection':
            return 'Bullying protection';
          case 'housing':
            return 'Housing discrimination protection';
        }
      },

      buildRightsTemplate: function (data) {
        var list = '';

        $.each(data, function (key, value) {
          if (value) {
            var id = value.id.split(':');
            var name = id[id.length - 1];
            list += '<li class="header">' + name + ' (' + key + ')<ul>';
            $.each(value.rights, function (key, value) {
              list += '<li class="' + !!value +'">' + _self.cleanRight(key) + '</li>';
            });
            list += '</ul></li>';
          }
        });

        return list; //_.template(template, {result: data})
      },

      getData: function (params) {
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
      },

      clear: function () {
        $('h2.user-location').html('');
        $('ul.rights li').remove();
      }
  };

  return _self;
})(jQuery);
