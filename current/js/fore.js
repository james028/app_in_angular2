$(document).ready(function() {
    $("#submitCity").click(function() {
        getFore();
    });
});


function getFore() {
    var city = $("#city").val();
    var days = $("#days").val();
    
    if (city != '' && days != '') {
        
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=" + days + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                var header = "<h2>Weather for " + data.city.name + "</h2>";
                
                var table = '';
                for (var i=0; i < data.list.length; i++) {
                    table += "<tr>";
                    
                    table += "<td>" +data.list[i].weather[0].icon + "</td>";
                    table += "<td>" +data.list[i].weather[0].main + "</td>";
                    table += "<td>" +data.list[i].weather[0].description + "</td>";
                    table += "<td>" +data.list[i].temp.morn + "&deg;C</td>";
                    table += "<td>" +data.list[i].temp.night + "&deg;C</td>";
                    table += "<td>" +data.list[i].temp.min + "&deg;C</td>";
                    table += "<td>" +data.list[i].temp.max + "&deg;C</td>";
                    table += "<td>" +data.list[i].pressure + "</td>";
                    table += "<td>" +data.list[i].humidity + "</td>";
                    table += "<td>" +data.list[i].speed + "</td>";
                    table += "<td>" +data.list[i].deg + "</td>";
                    
                    table += "</tr>";
                }
                
                $("#foreWeather").html(table);
                $("#header").html(header);
                
                $("#city").val('');
                $("#days").val('');
            }
        });
    } else {
        $("#error").html("<div>City field cannot be empty</div>");
    }
}