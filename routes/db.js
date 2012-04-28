if (process.env.REDISTOGO_URL) {
  var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
} else {
  var redis = require('redis').createClient();
}

exports.rights = function(state, county, city, fn){
	var result = {};
	result['state'] = state(state);
	result['county'] = county(state, county);
	result['city'] = city(state, county, city);
 	fn(null, result);  
}

// takes in a json file and loads it into redis
exports.load = function(json, fn){
	
}

function state(state){
	return redis.get(state);
}

function county(state, county){
	return redis.get(state + ':' + county);
}

function city(state, county, city){
	return redis.get(state + ':' + county + ':' +city);
}

