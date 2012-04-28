var db = require('../db');
var express = require('express');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'LGBT RightsFinder',
      subtitle: 'Find your rights in Pennsylvania'
    });
  });
  app.get('/rights', express.query(), function(req, res) {
    db.rights(req.query.state, req.query.county, req.query.city, function(err, data) {
      res.send(data);
    });
  });
};
