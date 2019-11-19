import Component from '@ember/component';
import faker from 'faker';

export default Component.extend({

  actions: {
    addPlayer() {
      let players = this.get('game.players');
      let nextPlayerNum = this.get('game.nextPlayerNum');
      players.addObject({id: "player"+nextPlayerNum, name: faker.name.firstName()});
      this.set('game.nextPlayerNum',nextPlayerNum+1);
    },
  }
});
