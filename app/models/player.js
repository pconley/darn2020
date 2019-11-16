import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  admin: DS.attr('boolean'),
});
