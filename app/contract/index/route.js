import Route from '@ember/routing/route';

export default class ContractIndexRoute extends Route {
  model = function () {
    console.log('LISTE DES CONTRATS');
    return this.store.findAll('contract');
  };
}
