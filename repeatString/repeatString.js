var repeatString = function(string, num) {
	let result = [];
	for(i = 0; i < num; i++){
		result.push(string);
	}
	if(num < 0){
		return "ERROR";
	} else if(num === 0){
		return "";
	} else {
		return result.join("");
	}
}

module.exports = repeatString
