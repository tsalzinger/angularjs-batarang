// Service for highlighting parts of the application
angular.module('panelApp').factory('appHighlight', function (appCss) {

  var styles = {
    scopes: {
      selector: '.ng-scope',
      style: 'outline: red solid 1px'
    },
    bindings: {
      selector: '.ng-binding',
      style: 'outline: blue solid 1px'
    },
    app: {
      selector: '[ng-app]',
      style: 'outline: green solid 1px '
    },
     scopesAndBindings: {
       selector: '.ng-scope.ng-binding',
       style: 'outline: yellow solid 1px'
     }
  };

  var updateStyle = function(style, setting) {
    if (setting) {
      appCss.addCssRule(style);
    } else {
      appCss.removeCssRule(style);
    }
  };

  return function(selected) {
    updateStyle(styles.scopes, !!selected.scopes);
    updateStyle(styles.bindings, !!selected.bindings);
    updateStyle(styles.app, !!selected.app);
    updateStyle(styles.scopesAndBindings, !!selected.scopes && !!selected.bindings);
  };
});
