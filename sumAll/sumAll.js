var sumAll = function(num1, num2) {
	let sum = num1;

	if(num1 < 0 || num2 < 0){
		return "ERROR with negative parameters";
	} else if(typeof num1 !== "number"|| typeof num2 !== "number"){
		return "ERROR with non-number parameters";
	} else if(num1 < num2){
		for(var x = (num1+1); x <= num2; x++){
			sum += x;
		}
		return sum;
	} else if(num1 > num2){
		for(var y = (num1-1); y >= num2; y--){
			sum += y;
		}
		return sum;
	} else if(num1 == num2){
		sum = num1 + num2;
		return sum;
	}
}

module.exports = sumAll
