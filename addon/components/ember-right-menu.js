import Ember from 'ember';
import StyleBuilder from 'ember-right-menu/components/style-builder';
import LinkView from 'ember-right-menu/components/link-view';

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
            _styles = {},
            builder = StyleBuilder.create();

        _styles = builder.build(this.optionsDefault, this.options);
        Object.keys(_styles).forEach((_key) =>{
            this.set(_key + 'Style', _styles[_key]);
        });

        _menus.forEach((_menu) => {
            _items.add(_menu);
        });


        return _items.toArray();
    }),
    actions: {
    }
});