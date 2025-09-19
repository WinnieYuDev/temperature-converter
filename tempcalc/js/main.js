
//psuedo code:
//create html for inputs of farenheit or celcius with ids to grab and a submit value
//create css for style, and add image of thermometer
//establish variables for farenheit and celcius with e.g let f and let c
//establish functions
//add formula x=y(32°F − 32) × 5/9 = 0°C to input
//make conditionals and if statements
//display value with variableinput.value

const CeInput = document.getElementById('Celsius');
const FaInput = document.getElementById('Fahrenheit');

window.onload = function () {
  alert("Hi. Please use this conversion calculator.");
};

//Cel to Fah
CeInput.oninput = function () {
  const celsiusValue = parseFloat(CeInput.value);

  if (isNaN(celsiusValue)) {
    FaInput.value = '';
    //does not place in value if it is not a number
  } else {
    const fahrenheit = (celsiusValue * 9) / 5 + 32;
    FaInput.value = fahrenheit.toFixed(2);
  }
  //celcius number is typed in then celciusvalue, changed to parsefloat form, turns to fahrenheit by establishing a new variable that is to be displayed
};

//Fah to Cel
FaInput.oninput = function () {
  const fahrenheitValue = parseFloat(FaInput.value);

  if (isNaN(fahrenheitValue)) {
    CeInput.value = '';
    //does not place in value if it is not a number    
  } else {
    const celsius = ((fahrenheitValue - 32) * 5) / 9;
    CeInput.value = celsius.toFixed(2);
    //fahrenheit number is typed in, changed to parsefloat form, turns to celcius by establishing a new variable that is to be displayed
  }
};
