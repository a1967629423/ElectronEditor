const config = require('./config').default
const path = require('path')
module.exports = {
    outputDir:path.join(config.release.dir,config.release.name),
    devServer:{
        host:config.production.host,
        port:config.production.port
    }
}