import StorageArray from 'ember-local-storage/local/array';

const Storage = StorageArray.extend();

// Storage.reopenClass({
//   initialState() {
//     return [
//       {id: 'player300', name: 'Mary Jo'},
//       {id: 'player301', name: 'Irish'},
//     ]
//   }
// });

export default Storage;