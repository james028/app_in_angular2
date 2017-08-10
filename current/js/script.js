$(document).ready(function() {
    $("#submitCity").click(function(){
        return getWeather();
    });
});



function getWeather() {
    var city = $("#city").val();
    
    if (city != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
            //console.log(data);
            
            var widget = showResults(data);
            $("#showWeather").html(widget);
            
            $("#city").val('');
        }
        });
    } else {
        $("#error").html("<div>City field cannot be empty</div>");
    }
}



function showResults(data) {
    return "<p>Temperature: " + data.main.temp + "</p>" + 
             "<p> Humidity: " + data.main.humidity + "</p>" + 
            "<p> Wind: " + data.wind.speed + "</p>" +
            "<p>Weather description: " + data.weather[0].description + "</P>";
}