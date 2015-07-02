import Ember from "ember";
import {test, moduleForComponent} from "ember-qunit";

moduleForComponent('ember-right-menu',
                    'component to present a right menu with links to navigate between routes',
    {
        needs: []
    }
);

test('verify if tag name is blank', function(assert){
    var component = this.subject(),
        menus;
    
    Ember.run(() => {
        menus = [
            {
                'text': 'Page 1',
                'link': 'page1',
                'selected': false
            },
            {
                'text': 'Page 2',
                'link': 'page2',
                'selected': false
            }
        ];
        component
            .set(
                'menus',
                menus
            );
    });
    
    assert.equal(this.$().context.tagName, 'DIV');
});

test('verify if default options are correct', function(assert){
    var component = this.subject(),
        menus = [],
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
        };
    
    Ember.run(() => {
        component
            .set(
                'menus',
                menus
            );
    });

    assert
        .equal(
            JSON.stringify(component.optionsDefault),
            JSON.stringify(optionsDefault)
        );
});

test("verify if options are empty when it isn't informed", function(assert){
    var component = this.subject(),
        menus = [],
        options = {};
    
    Ember.run(() => {
        component
            .set(
                'menus',
                menus
            );
    });
    
    assert
        .equal(
            JSON.stringify(component.options),
            JSON.stringify(options)
        );
});

test('verify if style is correctly built when options are informed', function(assert){
    var component = this.subject(),
        menus = [],
        options = {
            'menu': {
                'background-color': '#FFFFFF',
                'width': '45%'
            },
            'title': {
                'border-bottom': 'solid 1px #f5da55',
                'color': '#FFFFFF'
            },
            'menuItem':{
                'color': '#8c8e87'
            },
            'menuItemSelected':{
                'color': '#000000',
                'background-color': '#000000',
                'border-left': 'solid 12px #f5da55'
            }
        },
        styles;
    
    Ember.run(() => {
        component
            .set(
                'options',
                options
            )
            .set(
                'menus',
                menus
            );

            styles = component.get('styles');
    });

    assert.equal(JSON.stringify(styles.menu), '"background-color:#FFFFFF; width:45%"');
    assert.equal(JSON.stringify(styles.title), '"border-bottom:solid 1px #f5da55; color:#FFFFFF"');
    assert.equal(JSON.stringify(styles.menuItem), '"color:#8c8e87"');
    assert.equal(JSON.stringify(styles.menuItemSelected), '"color:#000000; background-color:#000000; border-left:solid 12px #f5da55"');
});

test("verify if items are empty when it isn't informed", function(assert){
    var component = this.subject(),
        items;
    
    Ember.run(() => {
        items = component
                    .get(
                        'items'
                    );
    });

    assert.equal(items.length, 0);
});

test("verify if items are empty when menu is informed with an empty array", function(assert){
    var component = this.subject(),
        menus = [],
        items;
    
    Ember.run(() => {
        component
            .set(
                'menus',
                menus
            );

        items = component
                    .get(
                        'items'
                    );
    });

    assert.equal(items.length, 0);
});

test("verify if items are the same number of menus than the menus was informed to component", function(assert){
    var component = this.subject(),
        qty = Math.round(Math.random() * (100 - 1) + 1, 0),
        menus = [],
        items;

    for(let counter = 0; counter < qty; counter = counter + 1){
        let menu = {
            'text': 'Page ' + counter,
            'link': 'page' + counter,
            'selected': false
        };
        menus.push(menu);
    }
    
    Ember.run(() => {
        component
            .set(
                'menus',
                menus
            );

        items = component
                    .get(
                        'items'
                    );
    });

    assert.equal(items.length, qty);
});