var restHeler = require('./../helpers/restHelper');

var conversions = {};
var changeListeners = [];
class RatesStore {
    constructor() {
        restHeler.get('rates')
            .then((conversionRates) => {
                conversions = conversionRates;
                this.triggerListeners();
            }, (e) => {throw e});
    }

    getRates() {
        return conversions;
    }

    triggerListeners() {
        changeListeners.forEach(function(listener) {
            listener();
        })
    }

    onChange(listener) {
        changeListeners.push(listener);
    }
}

module.exports = new RatesStore();