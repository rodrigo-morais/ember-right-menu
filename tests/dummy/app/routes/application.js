import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        let _menus = Ember.Set.create();

        _menus
            .add(
                {
                    "text": "menu 1",
                    "link": "menu1"
                }
            )
            .add(
                {
                    "text": "menu 2",
                    "link": "menu2"
                }
            )
            .add(
                {
                    "text": "menu 3",
                    "link": "menu3"
                }
            );

        return {"menus": _menus.toArray()};
    }
});