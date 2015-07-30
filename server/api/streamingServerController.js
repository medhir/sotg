var db = require('../db/schema.js'),
  StreamingServer = require('./streamingServerModel.js');

module.exports = {

  getAvailableKey: function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("req.ip: ", req.ip);
    console.log("req.headers: ", req.headers);
    console.log("req.connection.remoteAddress: ", req.connection.remoteAddress);
    // var ip = req.ip.substring(req.ip.lastIndexOf(':') + 1);
    var port = req.query.port;
    new StreamingServer()
      .query('where', 'registered', '=', 0)
      .fetchAll()
      .then(function(collection) {
        console.log("Collection: ", collection);
        if (collection.length > 0) {
          res.status(200).send(collection.models[0].get('key'));
          collection.models[0].set('registered', true);
          collection.models[0].set('ip', ip);
          collection.models[0].set('port', port);
          collection.models[0].save();
        } else {
          res.status(400).send('no keys available at this time');
        }
      });

  }

};
