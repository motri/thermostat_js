

$(document).ready(function(){
  var th = new Thermostat;
  $('#temp').text(th._temp);
  $('#increase').on('click', function(){
  th.up(1)
  $('#temp').text(th._temp)
})
});
