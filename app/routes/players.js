import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';

export default Route.extend({

  players: storageFor('players'),

  model() {
    return this.get('players');
  }

});
