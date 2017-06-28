let React = require('react/addons');

let CartItemList = require('./components/CartItemList');

let itemStore = require('./stores/itemStore');
let localizationStore = require('./stores/localizationStore');

let LocalizationBox = require('./components/LocalizationBox');
let TotalBox = require('./components/TotalBox');

let CartApp = React.createClass({
    render() {
        return (
            <div>
                <LocalizationBox />
                <h3>Your Car ({this.props.items.length})</h3>
                <CartItemList {...this.props} />
                <TotalBox {...this.props} />
            </div>
        )
    }
});

let items = [];
let locale = {};

itemStore.onChange(() => {
    items = itemStore.getItems();
    render();
});

localizationStore.onChange(() => {
    locale = localizationStore.getLocale();
    render();
});

let render = () => {
    if (typeof window !== 'undefined') {
        React.render(<CartApp items={items} locale={locale} />,
        document.getElementById('mount'));
    }
}

module.exports = CartApp;