if (process.env.REDISTOGO_URL) {
  var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
} else {
  var redis = require('redis').createClient();
}

exports.rights = function(state, county, city, fn){
  var data = {};
  redis.get(state, function(err, val) {
    data.state = JSON.parse(val);
    redis.get(state + ':' + county, function(err, val) {
      data.county = JSON.parse(val);
      redis.get(state + ':' + county + ':' + city, function(err, val) {
        data.city = JSON.parse(val);
        fn(null, data);  
      });
    });
  });
};

// takes in a json file and loads it into redis
exports.load = function(items, fn){
  var pending = items.length;
  items.forEach(function(item){ 
    redis.set(item.id, JSON.stringify(item), function(err) {
      if (err) fn(err);
      --pending || fn(null, {success: true});
    });
  });
};
