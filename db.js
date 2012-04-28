if (process.env.REDISTOGO_URL) {
  var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
} else {
  var redis = require('redis').createClient();
}

exports.rights = function(state, county, city, fn){
	var data = {};
  redis.get(state, function(err, val) {
    data.state = val;
    redis.get(state + ':' + county, function(err, val) {
      data.county = val;
      redis.get(state + ':' + county + ':' + city, function(err, val) {
        data.city = val;
        fn(null, data);  
      });
    });
  });
};

// takes in a json file and loads it into redis
exports.load = function(json, fn){
	var obj = JSON.parse(json);
	fn(null, obj);
};
