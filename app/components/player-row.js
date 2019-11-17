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
      this.onConfirm();
    },
  }
});
