import Controller from '@ember/controller';

export default Controller.extend({

  isExpanded: false,

  // just making and alias the data is still not there
  players: Ember.computed.alias('model.players'),


  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
      console.log("toggle");
    }
  }
  
});

// export default Ember.Controller.extend({
//   comments: Ember.computed.alias('model.comments')
// })

