const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7defc4647b54aefbe37ab568b1cf8c94/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body } = {} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 
            ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperature high today is ' + body.daily.data[0].temperatureHigh + ' and the temperature low for today is ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast