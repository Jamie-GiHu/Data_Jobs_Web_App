// Creating map object
var myMap = L.map("map", {
  center: [-25.69, 133.88],
  zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// // // Store API query variables
// // var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// // var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
// // var complaint = "&complaint_type=Rodent";
// // var limit = "&$limit=10000";

// // // Assemble API query URL
// // var url = baseURL + date + complaint + limit;

// Grab the data with d3
d3.json("jobSearchResults.json", function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var latitude = response[i].latitude;
    var longitude = response[i].longitude;

    // Check for location property
    if (latitude) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup("<h1>" + response[i].title + "</h1> <hr> <h3>Company: " + response[i].company + "</h3>" 
        + "<p><a href=" + response[i].redirect_url + ">Position description</a></p>" +
        "<p>Date posted: " + new Date(response[i].created) + "</p>" ));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
