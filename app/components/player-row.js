import Component from '@ember/component';

export default Component.extend({

  isDisabled: true,

  actions: {
    toggleDisable() {
      this.toggleProperty('isDisabled');
      if( !this.isDisabled ){
        console.log("start editing")
      }
    },
    removePlayer() {
      console.log("remove player")
      this.onRemove();
    },
    updatePlayer() {
      console.log("update player")
      this.toggleProperty('isDisabled');
      this.onUpdate();
    },
    // storePlayer() {
    //   console.log("store player")
    //   this.onStore();
    // },
  }
});
