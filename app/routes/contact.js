import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findRecord('Contact', params.contact_id);
  },
});

// export default class ContactRoute extends Route {
//   // model: function() {
//   //   return this.store.find('contact');
//   // }
// }
