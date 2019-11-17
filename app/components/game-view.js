import Component from '@ember/component';
import faker from 'faker';
 
// export default DS.Model.extend({
//   firstName: DS.attr('string', {
//     defaultValue: function() {
//       return faker.name.firstName();
//     }
//   })
// });

export default Component.extend({

  actions: {
    addPlayer() {
      console.log("game-view component: add player");

      let players = this.get('game.players');
      let nextPlayerNum = this.get('game.nextPlayerNum');
      players.addObject({id: "player"+nextPlayerNum, name: faker.name.firstName()});
      this.set('game.nextPlayerNum',nextPlayerNum+1);
      console.log(players);
      console.log(nextPlayerNum);
    }
  }
});
