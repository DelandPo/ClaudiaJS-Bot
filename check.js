var requestURL = 'http://apidev.accuweather.com/currentconditions/v1/4-948_1_AL.json?language=en&apikey=hoArfRosT1215';
var fetch = require('node-fetch');

        fetch('http://apidev.accuweather.com/currentconditions/v1/4-948_1_AL.json?language=en&apikey=hoArfRosT1215')
      .then((response) => response.json())
      .then((responseJson) => {
       console.log( 'It looks' + responseJson[0].WeatherText + ' with Temperature of '+ responseJson[0].Temperature.Imperial.Value + ' F') ;
      });
    