import Ember from "ember";
import {test, moduleForComponent} from "ember-qunit";
import StyleBuilder from 'ember-right-menu/components/style-builder';

test('verify if return styles blank when options are empty', (assert) =>{
    var builder = StyleBuilder.create(),
        options = {},
        styles = '';
    
    styles = builder.build(options, options);
    
    Object.keys(styles).forEach((_key) =>{
        assert.equal(styles[_key], '');
    });
});