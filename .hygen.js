const configuration = require('./_templates/config.json');

module.exports = {
    helpers: {
        context: () => ({ alias: configuration.alias })
    }
}