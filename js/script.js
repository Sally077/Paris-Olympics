function test() {
    // Retriving data for local storage
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Storing data

    var name = localStorage.setItem("name", name);
    var email = localStorage.setItem("email", email);

}


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
        "url": "https://booking-com.p.rapidapi.com/v1/hotels/search?dest_id="+ destinationID +"&order_by=popularity&filter_by_currency=EUR&adults_number=2&room_number=1&checkout_date="+ departureDate +"&units=metric&checkin_date="+ arrivalDate +"&dest_type=city&locale=en-gb&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true&children_number=2",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "6d65fccad2msh6dbae654ae49311p1052d0jsn36975f6b60f0",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
        }
    };
    $.ajax(settings).done(function (response) {
        console.log(response.result[0]);
        console.log(arrivalDate);
        var hotelDiv = document.getElementById("hotels");
        var hotelImage = document.createElement("img");
        hotelImage.setAttribute("src", response.result[0].main_photo_url);
        hotelDiv.append(hotelImage);
        var hotelCard = document.createElement("div");
        hotelCard.setAttribute("class", "card-body");
        var hotelName = document.createElement("h5");
        hotelName.textContent = response.result[0].hotel_name;
        hotelName.setAttribute("class", "card-title");
        hotelCard.append(hotelName);
        var hotelDescription = document.createElement("p");
        hotelDescription.setAttribute("class", "card-text");
        hotelDescription.textContent = "Guest ratings: " + response.result[0].review_score_word;
        hotelCard.append(hotelDescription);
        var hotelPrice = document.createElement("p");
        hotelPrice.setAttribute("class", "card-text");
        hotelDescription.textContent = "Gross price: " + response.result[0].price_breakdown.gross_price;
        hotelCard.append(hotelDescription);
        hotelDiv.append(hotelCard);

    });
}


