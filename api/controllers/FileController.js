var fs = require('fs');
var _ = require('lodash');
module.exports = {
  get: function (req, res) {
    res.sendfile('.tmp/' + req.path.substr(1));
  },

  getImagesList: function(req, res){
    var dir = '.tmp/public/images';
    fs.readdir(dir, function(err, files){
      if (err != undefined){
        res.json(500, {err: 'error reading files'});
      } else {
        var fileCollection = [];
        _.forEach(files, function(f){
          console.log(fs.statSync(dir + '/' + f));
          fileCollection.push({name: f, date: fs.statSync(dir + '/' + f).mtime});
        });

        res.json(_.pluck(_.sortByOrder(fileCollection, ['date'], [true]), 'name'));
      }
    });
  }
};
