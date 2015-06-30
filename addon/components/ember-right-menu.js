import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    optionsDefault: {
        'menu': {
            'background-color': '#F5F5F5',
            'width': '15%'
        },
        'title': {
            'border-bottom': 'solid 1px #f5da55',
            'color': '#000000'
        },
        'menuItem':{
            'color': '#8c8e87'
        },
        'menuItemSelected':{
            'color': '#000000',
            'background-color': '#FFFAF0',
            'border-left': 'solid 2px #f5da55'
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
                menuStyle = menuStyle + '; ' + _option + ':' + _options.menu[_option];
            }
        });
        this.set('menuStyle', menuStyle);

        let titleStyle = '';
        Object.keys(_options.title).forEach((_option) =>{
            if(titleStyle === ''){
                titleStyle = _option + ':' + _options.title[_option];
            }
            else{
                titleStyle = titleStyle + '; ' + _option + ':' + _options.title[_option];
            }
        });
        this.set('titleStyle', titleStyle);

        let menuItemStyle = '';
        Object.keys(_options.menuItem).forEach((_option) =>{
            if(menuItemStyle === ''){
                menuItemStyle = _option + ':' + _options.menuItem[_option];
            }
            else{
                menuItemStyle = titleStyle + '; ' + _option + ':' + _options.menuItem[_option];
            }
        });
        this.set('menuItemStyle', menuItemStyle);

        let menuItemSelectedStyle = '';
        Object.keys(_options.menuItemSelected).forEach((_option) =>{
            if(menuItemSelectedStyle === ''){
                menuItemSelectedStyle = _option + ':' + _options.menuItemSelected[_option];
            }
            else{
                menuItemSelectedStyle = menuItemSelectedStyle + '; ' + _option + ':' + _options.menuItemSelected[_option];
            }
        });
        this.set('menuItemSelectedStyle', menuItemSelectedStyle);

        _menus.forEach((_menu) => {
            _items.add(_menu);
        });


        return _items.toArray();
    }),
    actions: {
    }
});