import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findAll('game');
    return this.store.findRecord('game', 'game1001', {include: 'players'});

    // return this.store.findRecord('post', params.post_id, {include: 'comments'});
    // return [{
    //   id: 'game001',
    //   title: 'Grand Old Mansion',
    //   name: 'Veruca Salt',
    //   city: 'San Francisco',
    //   category: 'Estate',
    //   bedrooms: 15,
    // }, {
    //   id: 'game002',
    //   title: 'Urban Living',
    //   name: 'Mike TV',
    //   city: 'Seattle',
    //   category: 'Condo',
    //   bedrooms: 1,
    // }, {
    //   id: 'game003',
    //   title: 'Downtown Charm',
    //   name: 'Violet Beauregarde',
    //   city: 'Portland',
    //   category: 'Apartment',
    //   bedrooms: 3,
    // }];
    }
});
