import Controller from '@ember/controller';
// import { alias } from '@ember/object/computed';

export default Controller.extend({

  isExpanded: false,

  // players: alias('model.players'),

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
      console.log("toggle");
    },
    // editPlayer() {
    //   console.log("edit");
    // },
  }
  
});
