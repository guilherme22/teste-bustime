var Twit = require('twit')

var T = new Twit({
    consumer_key:         ''
  , consumer_secret:      ''
  , access_token:         ''
  , access_token_secret:  ''
})

module.exports = {
	getTwitt : function(cb){
		T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
  			cb(data);
		})
	}
}
