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

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");


    console.log(inputValue);

    var filteredData = data.filter(data => data.datetime === inputValue);
    console.log(filteredData)
    if (inputValue=="") {
        alert("Enter a valid date between 1/1/2010 and 1/13/2010")
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

};



