import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    id: '',
    attributeBindings: ['customId:id'],
    customId: '',
    title: '',
    actions: {
    }
});