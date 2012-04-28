
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'LGBT RightsFinder',
    subtitle: 'Find your rights in Pennsylvania'
  });
};
