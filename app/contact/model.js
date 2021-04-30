import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @attr('string') FirstName;
  @attr('string') LastName;
  @attr('string') Email;
  @attr('string') Phone;
  @attr('string') MobilePhone;
}
