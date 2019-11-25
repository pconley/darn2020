import Controller from '@ember/controller';

function xrange(start, end, incr) {
  if( incr == 0 ) return [start];
  var i;
  let arr = [];
  if( incr > 0  ){
    // increasing range
    for( i=start; i<=end; i=i+incr ){
      arr.push(i);
    }
  } else {
    // decreasing range
    for( i=start; i>=end; i=i+incr ){
      arr.push(i);
    }
  }
  return arr;
}

function getRange(style, pcount) {
  console.log("get range.  style=", style)
  let deck_size = 52;
  let max_hands = Math.floor(deck_size/pcount);
  console.log("max hands",max_hands);

  switch(style) {
    case 'standard':
      // down then back up with a single one card hand
      return xrange(max_hands,1,-1).concat(xrange(2,max_hands,1));
    case 'downer':
      return xrange(max_hands,1,-1);
    case 'random':
      return [4,1,3,2];
    case 'test':
      return [1,2,3];
    default:
      return [0,0,0,0,0];
  }
}

export default Controller.extend({

  isExpanded: false,

  hands: [], 
  rounds: [],
  style: 'random',
  round_index: 0,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
      console.log("toggle");
    },
    selectGame(val){
      console.log("select game style", val)
      this.set("style", val); 
    },
    createGame(val){
      // console.log(this.model)
      // console.log(this.model.players)
      console.log("create game.  style=", this.style)
      this.set("hands", getRange(this.style,this.model.players.length));
    },
  }
  
});
