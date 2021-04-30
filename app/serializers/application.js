import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('########################################');
    //console.log('PAYLOAD', JSON.stringify(payload));

    //console.log("PAYLOAD SUITE", JSON.stringify(payload));
    if (!Array.isArray(payload)) {
      console.log('SINGLE');
      payload['data'] = { id: null, type: 'requestType', attributes: {} };
      for (var i in payload) {
        //console.log(i, payload[i]);
        if (i == 'attributes') {
          //payload.data.id = payload[i].Id;
          payload.data.type = payload[i].type + 's';
          delete payload[i];
        } else if (i != 'data') {
          if (i == 'Id') {
            payload.data.id = payload[i];
          }
          payload.data.attributes[i] = payload[i];
          delete payload[i];
        }
      }
    } else {
      console.log('ARRAY');
      let result = { data: [] };
      for (let p = 0; p < payload.length; p++) {
        //console.log("ELEM ", p);
        result.data[p] = { id: null, type: requestType, attributes: {} };
        let item = payload[p];
        for (var i in item) {
          //console.log("i ", i);
          if (i == 'attributes') {
            result.data[p].id = item[i].Id;
            result.data[p].type = item[i].type;
            delete item[i];
          } else if (i != 'data') {
            result.data[p].attributes[i] = item[i];
            if (i == 'Id') {
              result.data[p].id = item[i];
            }
            result.data[p].attributes[i] = item[i];
            delete item[i];
          }
        }
      }
      console.log('RESULT AFTER', JSON.stringify(result));
      payload = result;
    }
    console.log('PAYLOAD AFTER', JSON.stringify(payload));
    //

    // payload.data.attributes.amount = payload.data.attributes.cost.amount;
    // payload.data.attributes.currency = payload.data.attributes.cost.currency;

    // delete payload.data.attributes.cost;

    //return super.normalizeResponse(...arguments);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
  serialize(snapshot, options) {
    let json = super.serialize(...arguments);
    let result = {};
    for (let i in json.data.attributes) {
      result[i] = json.data.attributes[i];
    }
    return result;
  }
}
