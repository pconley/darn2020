import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

// import { on } from '@ember/object/evented';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// App.FocusInputComponent = Ember.TextField.extend({
//   becomeFocused: on('didInsertElement',function() {
//     this.$().focus();
//   })
// });

export default App;
