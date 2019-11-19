import Component from '@ember/component'
import { storageFor } from 'ember-local-storage';

export default Component.extend({
  
  playerStorage: storageFor('players'),

  actions: {
    destroyPlayer(player) {
      console.log("destroy player", player.id);
      this.players.removeObject(player);
    },
    updatePlayer(player) {
      console.log("update player", player.id);
      let old = this.players.findBy ('id', player.id);
      let idx = this.players.indedOf(old);
      this.players.replace(idx, 1, [player]);
    }
  }
});
