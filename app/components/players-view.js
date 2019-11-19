import Component from '@ember/component';
import faker from 'faker';
 
export default Component.extend({

  actions: {
    addPlayer() {
      let players = this.get('players');
      let number = Math.floor(Math.random() * 10000)
      players.addObject({id: "player"+number, name: faker.name.firstName()});
    },
  }
});