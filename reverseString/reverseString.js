var reverseString = function(string) {
	let reverse = string.split("");
	let result = [];
	for(i = (reverse.length-1); i >= 0; i--){
		result.push(reverse[i]);
	}
	return result.join("");
}

module.exports = reverseString