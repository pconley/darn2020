import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  admin: DS.attr('boolean'),
  rounds: DS.hasMany('round'),
  players: DS.hasMany('player', { inverse: null }),
  hands: DS.hasMany('number'), // card count in each round
  finished: DS.attr('boolean', { defaultValue: false }),
  createdAt: DS.attr('date', {defaultValue() { return new Date(); }})
});
