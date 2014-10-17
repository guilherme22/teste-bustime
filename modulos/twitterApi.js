var Twit = require('twit')

var T = new Twit({
    consumer_key:         'mYOkydmfsHfeuCOYntPFcCcFn'
  , consumer_secret:      'TbnykO78w6vUPt0xLBcF51206KIUmccjMksvqNu8DkKDSfl2CX'
  , access_token:         '193105220-4xYGJBNUzsNsp0Zag4fNo1CAlY1Nrr8XGa5XZ3UN'
  , access_token_secret:  'MZkjJRAtnxG5ARLNdwR4ZQLNGpITLpiJnm2XLOzE2f8ox'
})

module.exports = {
	getTwitt : function(cb){
		T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
  			cb(data);
		})
	}
}