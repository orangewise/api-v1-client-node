
var request 		= require('request-promise')
  , q           = require('q')
	, url 				= require('url');

var rootV1 = url.format({
	protocol:	'https',
	host:			'blockchain.info'
});

var rootV2 = url.format({
	protocol:	'https',
	host: 		'api.blockchain.info',
  path:     'v2'
});

function API(endpoints, v2) {
  this.endpoints  = endpoints;
  this.rootUrl    = v2 ? rootV2 : rootV1;
}

API.prototype.request = function (api, options) {
  try {
  	var endpoint	= this.endpoints[api].stringify(options)
  		, apiurl		= url.resolve(this.rootUrl, endpoint);
  	return request(apiurl).then(parseResponse).catch(handleError);
  } catch (err) {
    return q.reject(err);
  }
};

module.exports = API;

// Helper functions
function parseResponse(response) {
  try       { return JSON.parse(response);  }
  catch (e) { return response;              }
}

function handleError(e) {
  throw e.error || e || 'Unexpected error';
}