import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    id: '',
    attributeBindings: ['customId:id'],
    customId: '',
    title: '',
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