if (process.env.REDISTOGO_URL) {
  var redis = require('redis-url').connect(process.env.REDISTOGO_URL);
} else {
  var redis = require('redis').createClient();
}
