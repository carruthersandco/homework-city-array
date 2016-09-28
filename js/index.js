// wait till all dom elements loaded then run start function
// store city options to an array
// write city list options to DOM
// run the .change(changeBodyClass) function

// changeBodyClass function will:
// get the value from the user
// convert that value to a class attribute


$(document).ready(start);

var city = ["NYC", "SF", "LA", "ATX", "SYD"];
var selectedCityClass ='';

function start() {
  $(city).each(writeCityOptions);
  $('#city-type').change(bodyClass);
}

function writeCityOptions(index, element) {
  var options ='<option>' + element + '</option>';
  $('#city-type').append(options);
}

function bodyClass() {
  $('body').attr('class',userSelection());
}

function userSelection() {
  if ($('#city-type').val() == 'Select a city') {
    return '';
  } else {
    var userSelection = $('#city-type').val();
    var bodyClass = userSelection.toLowerCase()
    console.log(bodyClass);
    return bodyClass;
  }
}
