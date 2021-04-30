'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-crm',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      usingCors: false,
      corsWithCreds: false,
      //apiURL: null,
    },
  };

  if (environment === 'development') {
    ENV.APP.ORG_URL =
      'https://noodles-dary-5577-dev-ed.cs100.my.salesforce.com';
    ENV.APP.BEARER_TOKEN =
      'Bearer 00D1x0000008fy7!AREAQJG3aw71PJT0mkIc3JMH.jUpkySp6o7zeg9EN4.YRCuAHO9RRRQ2rd8S3gJ9Jp5S2zKRFGuLidFeGz3QPL8Zf.YI366_';
    ENV.APP.ACCESS_TOKEN_URL = 'https://test.salesforce.com';
    ENV.APP.ACCESS_USERNAME = 'test-rv3yhvaanakn@example.com';
    ENV.APP.ACCESS_PASSWORD = '#sn&Amg3_Bp5fIrEVV2F2pjkvltrgMX2m5hXqP';
    ENV.APP.ACCESS_CLIENT_ID =
      '3MVG9KlmwBKoC7U2ypiH3CPYCvKPUZabh_nuxCwXPCi7.ZpzEAaY4DRTMi70QILFEUoBAS9ZpW5pc9o6M5AjA';
    ENV.APP.ACCESS_CLIENT_SECRET =
      '5E38F9EEBCC1E13FF9D4708A19E5EB2239729E4FA0501D3F974EEC6CC9B95E60';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
