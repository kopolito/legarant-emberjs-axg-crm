import ENV from 'ember-crm/config/environment';
import RESTAdapter from '@ember-data/adapter/rest';
import { computed } from '@ember/object';
import { eachDayOfInterval } from 'date-fns';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.APP.ORG_URL;
  namespace = 'services/apexrest';
  headers = {
    Authorization: ENV.APP.BEARER_TOKEN,
  };
}
