const request = require('request');

let getWeather = (lat, lng, cb) => {
    request({
        url: `https://api.darksky.net/forecast/2f5d8adeac5fa03bc899fc97d2a2cad6/${lat},${lng}`,
        json: true
    },(error, response, body) => {
        if(!error && response.statusCode === 200){
            cb(undefined, {
                temp: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        } else {
            cb('Unable to fetch weather');
        }
    })
};

module.exports = {
    getWeather
}
