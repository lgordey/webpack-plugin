
'use strict'

var fs = require('fs');

var WebpackPlugin = function (svg1, svg2) {
    this.svg1 = svg1;
    this.svg2 = svg2;
};

WebpackPlugin.prototype.apply = function (compiler) {

  var oneSvg = fs.readFileSync(this.svg1, 'utf-8');
  var secondSvg = fs.readFileSync(this.svg2, 'utf-8');

  var sprite = oneSvg + secondSvg;

  compiler.plugin('emit', function(compilation, callback) {
    compilation.assets['svg/my-sprite.svg'] = {
      source: function() { return sprite },
      size: function() { return 5; }
    }
    callback();
  });
  
};

module.exports = WebpackPlugin;
