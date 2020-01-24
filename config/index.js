const fs  = require('fs')
let config;
if(fs.existsSync('config/config.js')){
    config = require('./config.js')
}else if(fs.existsSync( 'config/config.default.js')) {
    config = require('./config.default.js')
} else {
    console.assert(false,'config is not exist')
}
module.exports = config
module.exports.default = config
