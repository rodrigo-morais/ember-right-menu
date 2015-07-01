import Ember from 'ember';
import StyleBuilder from 'ember-right-menu/components/style-builder';

export default Ember.Component.extend({
    tagName: 'div',
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
    titleStyle: '',
    title: '',
    items: Ember.computed('menus', function() {
        let _menus = this.get('menus'),
            _items = Ember.Set.create(),
            builder = StyleBuilder.create();

        this.set('styles', builder.build(this.optionsDefault, this.options));

        _menus.forEach((_menu) => {
            _items.add(_menu);
        });


        return _items.toArray();
    }),
    styles: Ember.computed('options', function(){
        let _styles = {},
            builder = StyleBuilder.create();

        _styles = builder.build(this.optionsDefault, this.options);
        
        return _styles;
    }),
    actions: {
        select: function(index){
            let _menus = this.get('menus'),
                _newMenu = [];

            _menus.forEach(function(_menu, _index){
                _newMenu.push({
                    'text': _menu.text,
                    'link': _menu.link,
                    'selected': index === _index
                });
            });

            this.set('menus', _newMenu);

        }
    }
});