import Route from '@ember/routing/route';

export default class AccountIndexRoute extends Route {
  model = function () {
    console.log('LISTE DES COMPTES');
    return this.store.findAll('account');
  };
}
