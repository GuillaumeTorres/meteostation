let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let env = require('node-env-file')
let routes = require('./routes/index')
let Parameter = require('./db/db').Parameter
let cors = require('cors')

env(__dirname + '/.env');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'jade');

setInterval(() => {
    const temperatureData = {
        type: 'temperature',
        value: Math.random() * 2 + 22,
        date: new Date()
    }

    const pressureData = {
        type: 'pressure',
        value: Math.random() + 1,
        date: new Date()
    }

    const luminosityData = {
        type: 'luminosity',
        value: Math.random() * 5 + 55,
        date: new Date()
    }

    const temperature = new Parameter(temperatureData)
    const pressure = new Parameter(pressureData)
    const luminosity = new Parameter(luminosityData)

    temperature.save()
    pressure.save()
    luminosity.save()

}, 5000)

routes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
err.status = 404;
next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

module.exports = app;