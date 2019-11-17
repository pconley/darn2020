import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findRecord('game', 'game1001', {include: 'players'});

    return {
      id: 'game001',
      // title: 'Grand Old Mansion',
      // name: 'Veruca Salt',
      // city: 'San Francisco',
      // category: 'Estate',
      nextPlayerNum: 402,
      players: [
        {id: 'player400', name: 'Mary Jo'},
        {id: 'player401', name: 'Pat'},
      ]
    };
  }
});
