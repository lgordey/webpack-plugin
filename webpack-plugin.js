
'use strict'

var fs = require('fs');
var crypto = require('crypto');

var WebpackPlugin = function (svg1, svg2) {
    this.svg1 = svg1;
    this.svg2 = svg2;
};

WebpackPlugin.prototype.hash = function (buffer) {
  return crypto.createHash('md5').update(buffer).digest('hex');
};

WebpackPlugin.prototype.apply = function (compiler) {
  var self = this;
  var oneSvg = fs.readFileSync(this.svg1, 'utf-8');
  var secondSvg = fs.readFileSync(this.svg2, 'utf-8');

  var sprite = oneSvg + secondSvg;

  compiler.plugin('emit', function(compilation, callback) {
    
    compilation.assets['svg/my-sprite.' + self.hash(sprite) + '.svg'] = {
      source: function() { return new Buffer(sprite) },
      size: function() { return Buffer.byteLength(this.source(), 'utf8'); }
    }
    callback();
  });
  
};

module.exports = WebpackPlugin;
