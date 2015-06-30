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