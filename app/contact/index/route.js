import Route from '@ember/routing/route';

export default class ContactIndexRoute extends Route {
  model = function () {
    console.log('LISTE DES CONTACTS');
    return this.store.findAll('contact');
  };
}
