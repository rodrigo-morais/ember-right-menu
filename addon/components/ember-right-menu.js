import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    optionsDefault: {
        'background-color': '#000000'
    },
    title: '',
    style: 'background-color: #F5F5F5',
    items: Ember.computed('menus', function() {
        let _menus = this.get('menus'),
            _items = Ember.Set.create();

        _menus.forEach((_menu) => {
            _items.add(_menu);
        });


        return _items.toArray();
    }),
    actions: {
    }
});