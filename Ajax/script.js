API_KEY = "9ceda7597ff2347635da4cc58bcb07c1"

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "9ceda7597ff2347635da4cc58bcb07c1",
      dataType: 'jsonp',
    }).done(function (data){
    }).fail(function (data){
    });
  });
});