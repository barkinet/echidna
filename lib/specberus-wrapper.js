'use strict';

var Promise = require('promise');
var List = require('immutable').List;
var Map = require('immutable').Map;
var Specberus = require('specberus/lib/validator').Specberus;

require('../config.js');

var SpecberusWrapper = {};

SpecberusWrapper.validate = function (url) {
  return new Promise(function (resolve, reject) {
    function Sink() {}

    require('util').inherits(Sink, require('events').EventEmitter);

    var sink = new Sink();
    var errors = new List();
    var metadata = new Map();

    sink.on('end-all', function () {
      resolve({ errors: errors, metadata: metadata });
    });

    sink.on('metadata', function (key, value) {
      metadata = metadata.set(key, value);
    });

    sink.on('err', function (type, data) {
      data.type = type;
      errors = errors.push(data);
    });

    sink.on('exception', function (exception) {
      reject(new Error(exception.message));
    });

    var options = {
      url: url,
      profile: require('specberus/lib/profiles/WD-Echidna'),
      events: sink,
      validation: 'simple-validation',
      noRecTrack: false,
      informativeOnly: false,
      processDocument: '2014'
    };

    if (process.env.NODE_ENV === 'dev') {
      var host = 'http://localhost:' + ((process.env.PORT || 3000) + 1);

      options.cssValidator = host + '/css-validator/validator';
      options.htmlValidator = host + '/check';
    }

    new Specberus().validate(options);
  });
};

SpecberusWrapper.version = new Specberus().version;

module.exports = SpecberusWrapper;
