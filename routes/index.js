
/*
 * GET home page.
 */

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'LGBT RightsFinder',
      subtitle: 'Find your rights in Pennsylvania'
    });
  });
  app.get('/api', function(req, res) {
    var body = {api: "goes here"};
    res.send(body);
  });
};
