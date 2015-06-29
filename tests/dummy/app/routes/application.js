import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {"menus": 
            [
                {
                    "text": "menu 1",
                    "link": "menu1"
                },
                {
                    "text": "menu 2",
                    "link": "menu2"
                },
                {
                    "text": "menu 3",
                    "link": "menu3"
                }
            ]
        };
    }
});