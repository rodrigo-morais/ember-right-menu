import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {"menus": 
            [
                {
                    "text": "Page 1",
                    "link": "page1",
                    "selected": false
                },
                {
                    "text": "Page 2",
                    "link": "page2",
                    "selected": false
                },
                {
                    "text": "Page 3",
                    "link": "page3",
                    "selected": false
                }
            ]
        };
    }
});