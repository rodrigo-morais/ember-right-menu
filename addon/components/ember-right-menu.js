import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    optionsDefault: {
        'menu': {
            'background-color': '#F5F5F5'
        }
    },
    options: {},
    title: '',
    items: Ember.computed('menus', function() {
        let _menus = this.get('menus'),
            _items = Ember.Set.create(),
            _options = {};

        if(this.options){
            if(typeof this.options === 'object'){
                _options = Ember.$.extend({}, this.optionsDefault, this.options);
            }
            else{
                _options = Ember.$.extend({}, this.optionsDefault, JSON.parse(this.options));
            }
        }
        else{
            _options = this.optionsDefault;
        }

        this.set('options', _options);

        let menuStyle = '';
        Object.keys(_options.menu).forEach((_option) =>{
            if(menuStyle === ''){
                menuStyle = _option + ':' + _options.menu[_option];
            }
            else{
                menuStyle = menuStyle + ', ' + _option + ':' + _options.menu[_option];
            }
        });

        this.set('menuStyle', menuStyle);

        _menus.forEach((_menu) => {
            _items.add(_menu);
        });


        return _items.toArray();
    }),
    actions: {
    }
});