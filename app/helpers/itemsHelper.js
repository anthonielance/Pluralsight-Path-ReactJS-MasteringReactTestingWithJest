let dispatcher = require('./../dispatcher');
let restHelper = require('./restHelper');

module.exports = {
    removeItem(item) {
        dispatcher.dispatch({
            type: 'items:remove',
            item
        });
        restHelper.del(`items/${item.id}`);
    }
}