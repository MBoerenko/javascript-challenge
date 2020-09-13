// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO Sightings from data.js
console.log(data);

// Starter Code
// var tableData = data;
// console.log(tableData);

// Step 1: Loop Through `data` and console.log each UFO Sightings object
data.forEach(function (ufoSightings) {
    console.log(ufoSightings);

// Step 2:  Use d3 to append one table row `tr` for each UFO Sightings object
    var row = tbody.append("tr");

    // Step 3:  Use `Object.entries` to console.log each UFO Sightings value
    Object.entries(ufoSightings).forEach(function ([key, value]) {
        console.log(key, value);

        // Step 4: Use d3 to append 1 cell per UFO Sightings value
        // Append a cell to the row for each value
        // in the UFO Sightings object
        var cell = row.append("td");

        // Step 5: Use d3 to update each cell's text with
        // UFO Sightings values (date, city, state, country, shape, duration, comments)
        cell.text(value);
    });
});

// Select the submit button in the html file
var button = d3.select("#filter-btn");

//Click event
button.on("click", function () {

    //Remove existing table
    d3.select("tbody").html("");

    //Prevent page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input elements and set all text to lowercase
    var inputDate = d3.select("#datetime").property("value");

    var inputCountry = d3.select("#country").property("value").toLowerCase();

    var inputState = d3.select("#state").property("value").toLowerCase();

    var inputCity = d3.select("#city").property("value").toLowerCase();

    var inputShape = d3.select("#shape").property("value").toLowerCase();

    // initialize data as filteredData
    filteredData = data;

    if (inputDate) {
        filteredData = filteredData.filter(record => record.datetime === inputDate);
    }
    if (inputCountry) {
        filteredData = filteredData.filter(record => record.country === inputCountry);
    }
    if (inputState) {
        filteredData = filteredData.filter(record => record.state === inputState);
    }
    if (inputCity) {
        filteredData = filteredData.filter(record => record.city === inputCity);
    }
    if (inputShape) {
        filteredData = filteredData.filter(record => record.shape === inputShape);
    }

    // Display the filtered dataset
    filteredData.forEach((ufoSightings) => {
        var row = tbody.append('tr');

        Object.entries(ufoSightings).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});


