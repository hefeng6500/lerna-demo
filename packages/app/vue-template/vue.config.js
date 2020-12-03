const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    console.log("test", resolve('../../lib/module-a/lib/module-a'))
    config.resolve.alias.set('@', resolve('src'));
    config.resolve.alias.set('module-a', resolve('../../lib/module-a/lib/module-a'));
  }
};
