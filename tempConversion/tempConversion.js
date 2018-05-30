var ftoc = function(f) {
  	celsius = ((f - 32)*(5/9));
  	if(f % 1 !== 0){
  		return celsius.toFixed(1);
  	} else if(celsius % 1 !== 0){
  		return celsius.toFixed(1);
  	} else {
  		return celsius;
  	}
}

var ctof = function(c) {
  	fahrenheit = (c*(9/5)) + 32;
  	if(c % 1 !== 0){
  		return fahrenheit.toFixed(1);
  	} else if(fahrenheit % 1 !== 0){
  		return fahrenheit.toFixed(1);
  	} else {
  		return fahrenheit;
  	}
}

module.exports = {
  ftoc,
  ctof
}
