(function () {
    'use strict';

    const appData      = require('appData'),
          router       = require('router');

    router.get('/', function (req, res) {

        var cookiesDismissed = false,
            editmode         = !(require('VersionUtil').getCurrentVersion()),
            cookies          = req.cookies.cookiesDismissed,
            text             = appData.get('text'),
            readMore         = appData.get('readMore'),
            pageURI          = appData.get('page', 'URI'),
            buttonText       = appData.get('buttonText');

        if (editmode || cookies === 'dismissed') {
            cookiesDismissed = true;
            return;
        }

        res.render('/', { 
            cookiesDismissed: cookiesDismissed,
            text: text,
            readMore: readMore,
            pageURI: pageURI,
            buttonText: buttonText
         });
    });

}());
