import EmberRouter from '@ember/routing/router';
import config from 'ember-crm/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contacts', { path: '/contacts' });
  this.route('contact', { path: '/contact/:contact_id' });
});
