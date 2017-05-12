

$(document).ready(function(){
  var th = new Thermostat;
  var weather;
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var city = 'London';
  var apiKey = '&appid=abc3302e9ff41d114253dcfe743b7ce4' ;
  var units = '&units=metric';
  var url = api + city + units + apiKey;

  $.get(url, function(weather){
    $('#tempUpdate').text(weather['main'].temp + " C.");
    $('#weatherIcon').html("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' alt='Icon depicting current weather.'>")
  })
  $('#temp').text(th._temp);
  $('#increase').on('click', function(){
    th.up(1)
    $('#temp').text(th._temp)
  })
  $('#decrease').on('click', function(){
    th.down(1)
    $('#temp').text(th._temp)
  })
  $('#on').on('click', function(){
    th.powerModeOn()
    ('#poweroff').css('opacity', '0.0');
    ("#poweron").css(color, 0.9);
  })
  $('#off').on('click', function(){
    th.powerModeOff()
    ("#poweroff").css('opacity', '0.9');
    ("#poweron").css('opacity', '0');
  })
  $('#reset').on('click', function(){
    th.resetTemp()
    $('#temp').text(th._temp)
  })

});
