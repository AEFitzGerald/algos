var isSunny = true;
var temperature = 45; 
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

//isSunny is true --> I should bring sunglasses,
//temperature is less than 50 --> I should bring sunglasses, a coat,
//isRaining false
//--> I should bring sunglasses, a coat, and a smile!