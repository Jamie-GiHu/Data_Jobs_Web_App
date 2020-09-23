//For the app
// var data = JSON.parse('{{ data | tojson | safe}}');

var filteredData;
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("csvjson (3).json").then(function (data) {

    //Filter the data so we can visualise only jobs with salaries:
    data.forEach((job) => {
        filteredData = data.filter(job => job.salary_min > 1000);

    });

    //Slice the data to show the first 10 job listings:
    var tenJobs = filteredData.slice(0, 10);
    console.log(tenJobs);

    // Creating a variable to get a reference to the table body
    // var div = d3.select('#title');
    // var div2 = d3.select('#title2');

    //Appending the table with each jobs data with Arrow Functions
    tenJobs.forEach((job) => {
        Object.entries(job).forEach(([key, value]) => {
            if (key == "title") {
            d3.select("#title1").append("div").text(`${value}`);
            }
            if (key == "company") {
            d3.select("#title2").append("h3").text(`${value}`);
            }
            if (key == "description") {
            d3.select("#text").append("p").text(`${value}`);
            }
            if (key == "salary_min") {
            d3.select("#salary").append("li").text("Salary Min: " + value);
            }
            if (key == "salary_max") {
            d3.select("#salary").append("li").text("Salary Max: " + value);
            }
        });

    });
    
});




// // Creating a variable to get a reference to the table body
// var tbody = d3.select("tbody");

// //Appending the table with each jobs data with Arrow Functions
// tenJobs.forEach((job) => {
//     var row = tbody.append("tr");
//     Object.entries(job).forEach(([key, value]) => {
//         if (key == "title") {
//             var cell = row.append("tr");
//             cell.text(value);
//         }
//     });

    // Object.entries(job).forEach(([key, value]) => {
    //     if (key == "company") {
    //         var cell = row.append("tr");
    //         cell.text("Company: " + value);
    //     }

    //     if (key == "description") {
    //         var cell = row.append("tr");
    //         cell.text(value);
    //     }
    //     if (key == "salary_min") {
    //         var cell = row.append("tr");
    //         cell.text("Salary Min: " + value);
    //     }
    //     if (key == "salary_max") {
    //         var cell = row.append("tr");
    //         cell.text("Salary Max: " + value);
    //     }
//     });
// });
