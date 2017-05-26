const botBuilder = require('claudia-bot-builder');
const excuse = require('huh');
var fetch = require('node-fetch');
module.exports = botBuilder(function (message) {
   return fetch('http://apidev.accuweather.com/currentconditions/v1/4-948_1_AL.json?language=en&apikey=hoArfRosT1215')
      .then((response) => response.json())
      .then((responseJson) => {
        return ('Thank you for '+ message.text + '. It looks ' + responseJson[0].WeatherText + ' with Temperature of '+ responseJson[0].Temperature.Imperial.Value + ' F');
      })
});