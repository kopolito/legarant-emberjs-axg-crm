import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('contact');
  },
});

// export default class ContactRoute extends Route {
//   // model: function() {
//   //   return this.store.find('contact');
//   // }
// }
