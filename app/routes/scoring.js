// import Route from '@ember/routing/route';
import Route from '@ember/routing/route';

import { storageFor } from 'ember-local-storage';

export default Route.extend({

  players: storageFor('players'),

  model() {
    return {
      id: "game100",
      players: this.get('players'),
      // hands: [9,8,7,2,1],
      // style: 'test',
      // rounds: []
    }
  }
});
