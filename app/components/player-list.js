import Component from '@ember/component'

export default Component.extend({
  
  actions: {
    destroyPlayer(player) {
      console.log("destroy player", player.id);
      this.players.removeObject(player);
    },
    updatePlayer(player) {
      console.log("update player", player.id);
      let old = this.players.findBy ('id', player.id);
      let idx = this.players.indexOf(old);
      this.players.replace(idx, 1, [player]);
    }
  }
});
