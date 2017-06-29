var exports = jest.genMockFromModule('./../restHelper');
var value = 0;

exports.__setValue = function(a) { value = a; };

exports.get.mockImplementation(function(a) {
    var success = new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value);
        },1);
    });

    jest.runAllTimers();

    return success;
});

module.exports = exports;