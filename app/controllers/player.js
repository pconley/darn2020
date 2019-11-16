import Controller from '@ember/controller';

export default Controller.extend({
  // friends: function() {
  //   return this.get('model').get('players');
  // }.property('model.players'),
});


// App.PersonController = Ember.ObjectController.extend
// (
//   {
//     friends: function() 
//     {
//       return this.get('model').get('friends');
//     }.property('model.friends'),
//   }
// );


// import Controller from '@ember/controller';

// export default Controller.extend({
//   actions: {
//     filterByCity(param) {
//       if (param !== '') {
//         return this.store.query('rental', { city: param });
//       } else {
//         return this.store.findAll('rental');
//       }
//     }
//   }
// });