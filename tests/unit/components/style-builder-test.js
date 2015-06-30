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

test('verify if return styles from default when options are empty', (assert) =>{
    var builder = StyleBuilder.create(),
        options = {},
        optionsDefault = {
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
        styles = '';
    
    styles = builder.build(optionsDefault, options);
    
    assert.equal(styles['menu'], 'background-color:#F5F5F5; width:15%');
    assert.equal(styles['title'], 'border-bottom:solid 1px #f5da55; color:#000000');
    assert.equal(styles['menuItem'], 'color:#8c8e87');
    assert.equal(styles['menuItemSelected'], 'color:#000000; background-color:#FFFAF0; border-left:solid 2px #f5da55');
});

test('verify if return styles from options when options are informed', (assert) =>{
    var builder = StyleBuilder.create(),
        options = {
            'menu': {
                'background-color': '#FFFFFF',
                'width': '40%'
            },
            'title': {
                'border-bottom': 'solid 3px #000000',
                'color': '#f5FF00'
            },
            'menuItem':{
                'color': '#8c8e87'
            },
            'menuItemSelected':{
                'color': '#000000',
                'background-color': '#FFFAF0',
                'border': 'solid 12px #FFda55'
            }
        },
        optionsDefault = {
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
        styles = '';
    
    styles = builder.build(optionsDefault, options);
    
    assert.equal(styles['menu'], 'background-color:#FFFFFF; width:40%');
    assert.equal(styles['title'], 'border-bottom:solid 3px #000000; color:#f5FF00');
    assert.equal(styles['menuItem'], 'color:#8c8e87');
    assert.equal(styles['menuItemSelected'], 'color:#000000; background-color:#FFFAF0; border:solid 12px #FFda55');
});