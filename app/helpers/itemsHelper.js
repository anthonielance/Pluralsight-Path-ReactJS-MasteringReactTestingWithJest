let dispatcher = require('./../dispatcher');
let restHelper = require('./../helpers/restHelper');

module.exports = {
    removeItem(item) {
        dispatcher.dispatch({
            type:'items:remove',
            item
        });
        restHelper.del(`items/${item.id}`);
    }
}