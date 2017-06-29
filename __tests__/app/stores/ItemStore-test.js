jest.dontMock('jquery');
describe('The Item Store', function() {
    it('should make a request to the restHelper', function() {
        let itemStore = require.requireActual('../../../app/stores/itemStore');
        let restHelper = require('../../../app/helpers/restHelper');

        expect(restHelper.get).toBeCalledWith('items');
    });

    it('should return the correct items', function() {
        let restHelper = require('../../../app/helpers/restHelper');
        let value = [1,2,3];
        
        restHelper.__setValue(value);

        let itemStore = require.requireActual('../../../app/stores/itemStore');

        waitsFor(function() {
            return itemStore.getItems().length > 0;
        }, 'Items from the server', 1000);

        runs(function() {
            expect(itemStore.getItems()).toEqual(value);
        });
    });
});