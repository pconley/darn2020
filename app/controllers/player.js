import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addPlayer() {
      console.log("addPlayer")
      let players = this.get('game.players');
      let nextPlayerNum = this.get('game.nextPlayerNum');
      players.addObject({id: "player"+nextPlayerNum, name: faker.name.firstName()});
      this.set('game.nextPlayerNum',nextPlayerNum+1);
    },
  }
});