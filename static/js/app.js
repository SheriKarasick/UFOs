// from data.js
const tableData = data;
console.log(tableData)
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters


// This function will replace your handleClick function
function updateFilters() {
    
  // Save the element, value, and id of the filter that was changed
	  let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
    let filters = [date, city, state, country, shape]
    let filterId = ["datetime", "city", "state", "country", "shape"]
    let userFilters = []

	for (var i = 0; i < filters.length; i++){
		if (filters[i]!=""){
      userFilters.push([filterId[i], filters[i]])
    }
  }
  return userFilters;
} 
		
  // Call function to apply all filters and rebuild the table
  		//filterTable();
  	
  // Set the filteredData to the tableData
	

  // Loop through all of the filters and keep any data that
  // matches the filter values

function filterTable() {
  userFilters = updateFilters()
 
  filteredData = tableData;
  if (userFilters.length == 0){
    console.log(userFilters)
		return buildTable(tableData);
  } else {
    console.log(userFilters)
		for (i = 0; i < userFilters.length; i++) {
      filteredData = filteredData.filter(row => row[userFilters[i][0]] == userFilters[i][1]);
    }       
  }  
  console.log(filteredData);
  return buildTable(filteredData);
}


// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", filterTable);

// Build the table when the page loads
buildTable(tableData);






















