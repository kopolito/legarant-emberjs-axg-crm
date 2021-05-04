import Route from '@ember/routing/route';

export default class ContactEditRoute extends Route {
  model = function (params) {
    console.log('SHOW CONTACT', params.contact_id);
    return this.store.findRecord('Contact', params.contact_id);
  };
  actions = {
    edit: function (contact) {
      console.log('edit');
      console.log('contact', contact);
      let _this = this;
      function transitionToContact(contact) {
        _this.transitionTo('contact.show', contact);
      }
      function failure(reason) {
        console.log('error', reason);
      }
      contact.save().then(transitionToContact).catch(failure);
    },
  };
}
