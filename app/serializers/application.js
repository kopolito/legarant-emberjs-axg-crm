import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('PAYLOAD', JSON.stringify(payload));
    payload['data'] = { id: null, type: 'requestType', attributes: {} };
    console.log('PAYLOAD SUITE', JSON.stringify(payload));
    for (var i in payload) {
      console.log(i, payload[i]);
      if (i == 'attributes') {
        payload.data.id = payload[i].Id;
        payload.data.type = payload[i].type;
        delete payload[i];
      } else if (i != 'data') {
        if (i == 'Id') {
          payload.data.id = payload[i];
        } else {
          payload.data.attributes[i] = payload[i];
        }

        delete payload[i];
      }
      //
    }
    console.log('PAYLOAD AFTER', JSON.stringify(payload));
    //

    // payload.data.attributes.amount = payload.data.attributes.cost.amount;
    // payload.data.attributes.currency = payload.data.attributes.cost.currency;

    // delete payload.data.attributes.cost;

    return super.normalizeResponse(...arguments);
  }
}

// {
//   "data": {
//     "id": "1",
//     "type": "product",
//     "attributes": {
//       "name": "My Product",
//       "amount": 100,
//       "currency": "SEK"
//     }
//   }
// }

// {
//   "attributes": {
//       "type": "Contact",
//       "url": "/services/data/v51.0/sobjects/Contact/0031x000016gsgrAAA"
//   },
//   "Id": "0031x000016gsgrAAA",
//   "IsDeleted": false,
//   "LastName": "dgfjgfvhdfh",
//   "FirstName": "dgfsscdfgdf",
//   "Name": "dgfsscdfgdf dgfjgfvhdfh",
//   "OtherAddress": null,
//   "MailingAddress": null,
//   "Phone": "01789456124",
//   "MobilePhone": "0678945615",
//   "Email": "xvghfvcfyghdv@domaine.com",
//   "OwnerId": "0051x000006SeBhAAK",
//   "HasOptedOutOfEmail": false,
//   "HasOptedOutOfFax": false,
//   "DoNotCall": false,
//   "CreatedDate": "2021-04-30T07:03:49.000+0000",
//   "CreatedById": "0051x000006SeBhAAK",
//   "LastModifiedDate": "2021-04-30T07:03:49.000+0000",
//   "LastModifiedById": "0051x000006SeBhAAK",
//   "SystemModstamp": "2021-04-30T07:03:49.000+0000",
//   "LastViewedDate": "2021-04-30T07:03:49.000+0000",
//   "LastReferencedDate": "2021-04-30T07:03:49.000+0000",
//   "IsEmailBounced": false,
//   "PhotoUrl": "/services/images/photo/0031x000016gsgrAAA",
//   "CleanStatus": "Pending",
//   "Active__c": true,
//   "ExtId__c": "xvghfvcfyghdv@domaine.com"
// }
