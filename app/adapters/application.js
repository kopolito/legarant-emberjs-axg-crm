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
  // ajax(url, method, hash) {
  //   if (ENV.APP.usingCors) {
  //     if (hash === undefined) {
  //       hash = {};
  //     }
  //     hash.crossDomain = true;
  //     if (ENV.APP.corsWithCreds) {
  //       hash.xhrFields = { withCredentials: true };
  //     }
  //   }
  //   return this._super(url, method, hash);
  // }

  // ajax = function (url, method, hash) {
  //   hash.crossDomain = true;
  //   hash.xhrFields = { withCredentials: true };
  //   console.log('_super', this._super(url, method, hash));
  //   return this._super(url, method, hash);
  // };
  // findAll = function (store, type, id) {
  //   console.log('findAll', store);
  //   console.log('type', type);
  //   console.log('ajax', this.ajax);
  //   return this.ajax(
  //     'https://noodles-dary-5577-dev-ed.cs100.my.salesforce.com/services/apexrest/Contact/',
  //     'GET',
  //     {
  //       // CORS
  //       crossDomain: true,
  //       xhrFields: { withCredentials: true },
  //     }
  //   ).then(function (json) {
  //     console.log('JSON', json);
  //     // Massage this demo API endpoint to look like RESTAdapter expects.
  //     return { things: [json] };
  //   });
  // };
}
