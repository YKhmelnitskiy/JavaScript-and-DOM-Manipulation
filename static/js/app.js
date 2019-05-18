// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
//Make our function to retrieve our keys and values from the data.js, and then add our table to `tbody`. By adding rows and from there adding cell informations to that row.
var RetrieveYourData = function(UFOReport) {
    console.log(UFOReport);
        var row = tbody.append('tr');
    
        Object.entries(UFOReport).forEach(function([key, value]) {
            console.log(key, value);
    
        var cell = row.append('td');
        cell.text(value);
        });
};

tableData.forEach(RetrieveYourData);
// tableData.forEach(function(UFOReport) {
//     console.log(UFOReport);
//     var row = tbody.append('tr');

//     Object.entries(UFOReport).forEach(function([key, value]) {
//         console.log(key, value);

//     var cell = row.append('td');
//     cell.text(value);
//     });
// });


// Get a reference to the button

var submit = d3.select('button');

submit.on('click', function() {

    d3.event. preventDefault();


    var inputDate = d3.select('#datetime');
    var inputCity = d3.select('#city');

    
    var inputDateValue = inputDate.property('value');
    var inputCityValue = inputCity.property('value');

    if (inputDateValue == "") {
        if (inputCityValue == "") {
        }
        else {
            var filteredDataWithOnlyCity = tableData.filter(function (Data){
                return Data.city === inputCityValue
            });
        d3.selectAll('tr').remove();
        filteredDataWithOnlyCity.forEach(RetrieveYourData);  
        }
    }
    else {
        if (inputCityValue == "") {
            var filteredDataWithDate = tableData.filter(function (Data){
                return Data.datetime === inputDateValue
            });
        //console.log(filteredDataWithDate);
        d3.selectAll('tr').remove();
        filteredDataWithDate.forEach(RetrieveYourData);
        }
        else {
            var filteredDatawithDateandCity = tableData.filter(function (Data){
                return Data.datetime === inputDateValue && Data.city === inputCityValue
            });
        //console.log(filteredDatawithDateandCity);
        d3.selectAll('tr').remove();
        filteredDatawithDateandCity.forEach(RetrieveYourData);   
        }
    };


});

//optional thoughts
// if one criteria is filled, add it to something, move on to next one,if not
// base work for the if else
// if ():
//     v = dataset.append([])
    // if (inputDateValue == "") {
    //     if (inputCityValue == "") {
    //         console.log ("There is nothing")
    //     }
    //     else {
    //         var filteredDataWithOnlyCity = tableData.filter(function (Data){
    //             return Data.city === inputCityValue
    //         });  
    //     }
    // }
    // else {
    //     if (inputCityValue == "") {
    //         var filteredDataWithDate = tableData.filter(function (Data){
    //             return Data.datetime === inputDateValue
    //         });
    //     console.log(filteredDataWithDate);
    //     d3.selectAll('tr').remove();
    //     filteredDataWithDate.forEach(RetrieveYourData);
    //     }
    //     else {
    //         var filteredDatawithDateandCity = tableData.filter(function (Data){
    //             return Data.datetime === inputDateValue && Data.city === inputCityValue
    //         });
    //     console.log(filteredDatawithDateandCity);
    //     d3.selectAll('tr').remove();
    //     filteredDatawithDateandCity.forEach(RetrieveYourData);   
    //     }
    // };
