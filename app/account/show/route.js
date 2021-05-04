import Route from '@ember/routing/route';

export default class AccountShowRoute extends Route {
  model = function (params) {
    console.log('SHOW ACCOUNT', params.account_id);
    return this.store.findRecord('Account', params.account_id);
  };
}
