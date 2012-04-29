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

// for this to work better we should really move our data from separate keys to a hash 
// (or a few hashses, one for each level, perhaps)
// see: http://stackoverflow.com/questions/10155398/getting-multiple-key-values-from-redis
exports.list = function(query, fn){
  var items = {};
  var pending;
  redis.keys(query, function(err, keys){
    if (err) fn(err);
    pending = keys.length;
    keys.forEach(function(key){
      redis.get(key, function(err, value){
        if (err) fn(err);
        items[key] = JSON.parse(value);
        --pending || fn(null, { count: keys.length, data: items });
      });
    });
  });
}
