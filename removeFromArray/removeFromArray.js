var removeFromArray = function(main, r1, r2, r3, r4) {
	let mainArray = main;
	let removeArray = [r1, r2, r3, r4];
	for(i = 0; i < mainArray.length; i++){
		for(x = 0; x < removeArray.length; x++){
			if(mainArray[i] === removeArray[x]){
				mainArray.splice(i, 1);
			}
		}
	}
	return mainArray;
}

module.exports = removeFromArray