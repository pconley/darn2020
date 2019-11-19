import Controller from '@ember/controller';
import { storageFor } from 'ember-local-storage';

export default Controller.extend({
  stats: storageFor('stats'),
  players: storageFor('players'),

  actions: {
    countUp() {
      this.incrementProperty('stats.counter');
    },
    resetCounter() {
      // this.get('stats').clear();
      // or
      // this.get('stats').reset();
      this.set('stats.counter', 0);
    },
    clearPlayers() {
      console.log("clear players")
      this.get('players').clear();
      //this.set('players', []);
    },
  }
});
