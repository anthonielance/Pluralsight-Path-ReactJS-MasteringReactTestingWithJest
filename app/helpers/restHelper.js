'use strict';

let $ = require('jquery');

module.exports = {
    get(url) {
        return new Promise(function(success, error) {
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                success: success,
                error: error
            });
        });
    },
    del(url) {
        return new Promise(function(success, error) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: success,
                error: error
            });
        });
    }
}