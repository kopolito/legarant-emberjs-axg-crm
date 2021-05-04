import Route from '@ember/routing/route';

export default class ContractShowRoute extends Route {
  model = function (params) {
    console.log('SHOW CONTRACT', params.contract_id);
    return this.store.findRecord('Contract', params.contract_id);
  };
}
