(function () {
    'use strict';

    const router       = require('router'),
          i18n         = require('i18n');

    router.get('/', function (req, res) {
        res.render('/', { 
            i18n: i18n
         });
    });


}());
