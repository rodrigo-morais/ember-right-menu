# ember-right-menu

This component should be use to present a menu in right side of screen. The menu items listed in this component can navigate between routes in of application.

[![Build Status](https://travis-ci.org/rodrigo-morais/ember-right-menu.svg?branch=master)](https://travis-ci.org/rodrigo-morais/ember-right-menu)

## Installation

To install witn NPM:

```sh
$ npm install ember-right-menu --save-dev
$ ember generate ember-right-menu
```

To install witn ember-cli:

```sh
$ ember install:addon ember-right-menu
```

## Example

To use this component is need call it in a template to passing a list of menus with links that should exist as a route in the application. Is possible to pass a title to be presented on top of component, and options of style to change of style of component.

```sh
------- route -------
Ember.Route.extend({
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

------ template ------
{{ember-right-menu title='test' menus=this.model.menus}}
```

The standards styles that are possible inform to change the layout of component are:

To menu:
    - `background-color` - change the background color of the component. The standard color is #F5F5F5.
    - `width` - change the width of component. The standard width is 15%.

To title:
    - `border-bottom` - change the border bottom of title. The standard value is solid 1px #f5da55.
    - `color` - change the color of title. The standard color is #000000.

To menu item:
    - `color` - change the color of menu item. The standard color is #8c8e87.

To selected menu item:
    - `color` - change the color of a selected menu item. The standard color is #000000.
    - `background-color` - change the background color of a DIV around the selected menu item. The standard color is #FFFAF0.
    - `border-left` - change the left border of a selected menu item. The standard value is solid 2px #f5da55.

The value have to be informed like a JSON object like that:

options = {
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

Is possible add new styles to change the layout of component if necessary.