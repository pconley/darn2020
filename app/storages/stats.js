
// simple stats example that keeps the counter in local storage
// using the addon: ember-local-storage

import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return { counter: 0 };
  }
});

export default Storage;