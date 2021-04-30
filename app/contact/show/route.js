import Route from '@ember/routing/route';

export default class ContactShowRoute extends Route {
  model = function (params) {
    console.log('SHOW CONTACT', params.contact_id);
    return this.store.findRecord('Contact', params.contact_id);
  };
}
