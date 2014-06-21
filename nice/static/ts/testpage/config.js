/// <reference path="../typings/tsd.d.ts" />
require.config({
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});

require(['main']);
