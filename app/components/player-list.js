import Component from '@ember/component';

export default Component.extend({

  actions: {
    destroyPlayer(player) {
      this.players.removeObject(player)
    }
  }
});
