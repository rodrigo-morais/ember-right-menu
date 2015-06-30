import Ember from 'ember';

export default Ember.Object.extend({
    build: function(optionsDefault, options){
        let _options = {},
            _styles = {
                'menu': '',
                'title': '',
                'menuItem': '',
                'menuItemSelected': ''
            };

        if(options){
            if(typeof options === 'object'){
                _options = Ember.$.extend({}, optionsDefault, options);
            }
            else{
                _options = Ember.$.extend({}, optionsDefault, JSON.parse(options));
            }
        }
        else{
            _options = this.optionsDefault;
        }

        Object.keys(_styles).forEach((_key) =>{
            let _style = '';
            Object.keys(_options[_key]).forEach((_option) =>{
                if(_style === ''){
                    _style = _option + ':' + _options[_key][_option];
                }
                else{
                    _style = _style + '; ' + _option + ':' + _options[_key][_option];
                }
            });
            _styles[_key] = _style;
        });

        return _styles;
    }
});