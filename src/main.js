define(function (require) {

    'use strict';

    const _         = require('underscore'),
          Component = require('Component'),
          template  = require('/template/main');

    return Component.extend({
        
        template   : template,

        filterState: function (state) {
            return _.extend({}, { 
                cookiesDismissed: state.cookiesDismissed,
                text: state.text,
                readMore: state.readMore,
                pageURI: state.pageURI,
                buttonText: state.buttonText
            });
        }
    });

});
