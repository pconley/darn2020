import Controller from '@ember/controller';

export default Controller.extend({

  isExpanded: false,

  hands: [1,2,3,4,5], // default

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
      console.log("toggle");
    },
    createGame(val){
      console.log("create game", val)
      let players = this.get('game.players');
      console.log(players)
      switch(val) {
        case 'standard':
          this.set("hands", [5,4,3,2,1,2,3,4,5]);
          break;
        case 'downer':
            this.set("hands", [5,4,3,2,1]);
          break;
        case 'random':
            this.set("hands", [3,4,2,5,1,5,3,5]);
            break;
        default:
            this.set("hands", [0,0,0,0,0]);
      }

    }
  }
  
});
