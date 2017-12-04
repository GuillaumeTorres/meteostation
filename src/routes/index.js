let insertRoute = require('./insert')
let apiRoutes = require('./api')

module.exports = function routes(app){
    app.use('/insert', insertRoute)
    app.use('/api', apiRoutes)
}
