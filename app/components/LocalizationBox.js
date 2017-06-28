let React = require('react/addons');
let dispatcher = require('./../dispatcher');

let LocalizationBox = React.createClass({
    handleCountryChange({target:{value}}) {
        dispatcher.dispatch({
            type: 'locale:change',
            country: value
        });
    },
    getInitialState() {
        return {
            country: this.props.country || 'USA',
        }
    },
    render() {
        return (
            <form role='Language and Currency Preferences' className='local-form'>
                <h4>Select Country</h4>
                <select name='country' id='countrySelect' onChange={this.handleCountryChange}>
                    <option value='USA'>United States</option>
                    <option value='GB'>Great Britain</option>
                    <option value='CAN'>Canada</option>
                </select>
            </form>
        )
    }
});

module.exports = LocalizationBox;