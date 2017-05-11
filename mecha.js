

$(document).ready(function(){
  var th = new Thermostat;
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

  })
  $('#off').on('click', function(){
    th.powerModeOff()
  })
  $('#reset').on('click', function(){
    th.resetTemp()
    $('#temp').text(th._temp)
  })

});
