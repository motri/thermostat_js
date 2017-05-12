

$(document).ready(function(){
  var th = new Thermostat;
  var weather;
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var city = 'London';
  var apiKey = '&appid=abc3302e9ff41d114253dcfe743b7ce4' ;
  var units = '&units=metric';
  var url = api + city + units + apiKey;
  th.weather = $.get(api + city + units + apiKey, function(weather){
    $('#tempUpdate').text(weather['main'].temp + " °C");
    $('#weatherIcon').html("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png' alt='Icon depicting current weather.'>")
  });
  $('#submit').on('click', function(){
    city = $('.city').select()
    console.log(city)
    th.weather
    console.log(url)
  });
  $('#temp').text(th._temp);
  $('#increase').on('click', function(){
    th.up(1);
    var temp = th._temp;
      if (temp < 18) {
        $('#temp').css('color', '#0c992d')
      }  else if (temp < 25) {
        $('#temp').css('color', 'black')
      } else {
        $('#temp').css('color', '#990c0c')
      }
    $('#temp').text(th._temp);
  });
  $('#decrease').on('click', function(){
    th.down(1);
    $('#temp').text(th._temp);
    var temp = th._temp;
      if (temp < 18) {
        $('#temp').css('color', '#0c992d')
      }  else if (temp < 25) {
        $('#temp').css('color', 'black')
      } else {
        $('#temp').css('color', '#990c0c')
      }
  });
  $('#on').on('click', function(){
    th.powerModeOn();
    $('#powerOff').css('opacity', 0.0);
    $("#powerOn").css('opacity', 1);
  })
  $('#off').on('click', function(){
    th.powerModeOff();
    $("#powerOff").fadeTo(0, 1);
    $("#powerOn").fadeTo(0, 0);

  });
  $('#reset').on('click', function(){
    th.resetTemp();
    $('#temp').text(th._temp);
  });
});
