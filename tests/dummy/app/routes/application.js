import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {"menus": 
            [
                {
                    "text": "menu 1",
                    "link": "menu1",
                    "selected": true
                },
                {
                    "text": "menu 2",
                    "link": "menu2",
                    "selected": false
                },
                {
                    "text": "menu 3",
                    "link": "menu3",
                    "selected": false
                }
            ]
        };
    }
});