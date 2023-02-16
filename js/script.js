function test() {
    // Retriving data for local storage
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    // Storing data

    var name = localStorage.setItem("name", name);
    var email = localStorage.setItem("email", email);

}

$('#send').click(function() {
    $('#modalSubscriptionForm').modal('hide');
});



// Hotels API

// creates a function that will be called when the button is clicked
function getHotels(destinationID) {
    // creates a variable that will hold the value of the input field
    // var destinationID = "-1456928";
    var arrivalDate = document.getElementById("arrivalDate").value;
    var departureDate = document.getElementById("departureDate").value;
    "+ Variable +"
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id="+ destinationID +"&order_by=popularity&filter_by_currency=GBP&adults_number=2&room_number=1&checkout_date="+ departureDate +"&units=metric&checkin_date="+ arrivalDate +"&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "6d65fccad2msh6dbae654ae49311p1052d0jsn36975f6b60f0",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var hotelName = document.getElementById("hotel-name");
        hotelName.textContent = response.result[0].hotel_name;
        var hotelPrice = document.getElementById("hotel-price");
        hotelPrice.textContent = response.result[0].min_total_price + " GBP";
        const settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://booking-com.p.rapidapi.com/v1/hotels/photos?hotel_id=" + response.result[0].hotel_id + "&locale=en-gb",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "6d65fccad2msh6dbae654ae49311p1052d0jsn36975f6b60f0",
                "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
            }
        };

        $.ajax(settings2).done(function (response2) {
            //prints the url of the first image
            console.log(response2[0].url_max);
            var hotelImage = document.getElementById("hotel-image");
            hotelImage.setAttribute("src", response2[0].url_max);
        });

    });
}
