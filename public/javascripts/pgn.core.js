if (typeof PGN === 'undefined' || !PGN) {
    var PGN = {};
}

if (typeof PGN === 'undefined' || !PGN) {
    var PGN = {};
}

PGN.core = (function ($) {
    var _self;

    _self = {
        injectRights: function () {
          //$('body').append(_.template(_self.buildRightsTemplate()));
        },

        // TODO
        buildRightsTemplate: function () {
          return '<li>Foo</li>'; 
        }
    };

    return _self;
})(jQuery);
