import Route from '@ember/routing/route';

export default Route.extend({
  model() {
      return [{
        id: 'pat-conley',
        title: 'Grand Old Mansion',
        name: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
      }, {
        id: 'mary-jo-hausle',
        title: 'Urban Living',
        name: 'Mike TV',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
      }, {
        id: 'claire-conley',
        title: 'Downtown Charm',
        name: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
      }];
    }
});
