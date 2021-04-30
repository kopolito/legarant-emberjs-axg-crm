import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Ember.Route.extend({
  model: function () {
    return hash({
      contacts: this.store.findAll('contact'),
    });
  },
});

// export default class ContactRoute extends Route {
//   // model: function() {
//   //   return this.store.find('contact');
//   // }
// }
