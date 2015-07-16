var PORT = 8001,
  request = require('request'),
  queue = require('../../../server/utils/queue.js'),
  should = require('chai').should();

describe('API Endpoint Behavior', function() {
  var app = require('../../../server/server.js')(PORT);
  before(function(done) {
    setTimeout(function() {
      done();
    }, 1000);
  });

  after(function(done) {
    done();
  });
  it('should return "success" on /addKeyword endpoint', function(next) {
    var addKeywordOptions = {
      'uri': 'http://localhost:' + PORT + '/api/addKeyword/?api_key=xxxx&keyword=pizza'
    };
    request(addKeywordOptions, function(error, res, body) {
      body.should.deep.equal('success');
      next();
    });
  });
  it('should return keywords on /getKeywords endpoint', function(next) {
    var getKeywordsOptions = {
      'uri': 'http://localhost:' + PORT + '/api/getKeywords/?api_key=xxxx&number=1'
    };
      request(getKeywordsOptions, function(error, res, body) {
        body.should.deep.equal('["pizza"]');
        next();
      });
  });
});