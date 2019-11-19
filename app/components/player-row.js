import Component from '@ember/component';

export default Component.extend({
  
  actions: {

    removePlayer() {
      console.log("remove player")
      this.onRemove();
    },
    updatePlayer() {
      console.log("update player")
      this.onUpdate();
      // TODO: move focus to the next field
      // something like this (does not work)
      this.$().next('.inputs').focus();
    },
  }
});
