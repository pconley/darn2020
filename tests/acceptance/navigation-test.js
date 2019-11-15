import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | navigation', function(hooks) {
  setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
      await visit('/');
      assert.equal(currentURL(), '/scoring');
    });

    test('should link to information about the company', async function(assert) {
      await visit('/');
      await click(".menu-about");
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
      
    test('should link to contact information', async function(assert) {
      await visit('/');
      await click(".menu-contact");
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });

    test('should list available players.', async function(assert) {
      await visit('/'); 
      assert.equal(this.element.querySelectorAll('h3').length, 3, 'should display 3 players');
    });

});
