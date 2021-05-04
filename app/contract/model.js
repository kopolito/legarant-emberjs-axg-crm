import Model, { attr } from '@ember-data/model';

export default class ContractModel extends Model {
  @attr('string') AccountId;
  @attr('number') ContractTerm;
  @attr('date') StartDate;
  @attr('string') Status;
}
