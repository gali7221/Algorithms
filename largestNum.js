function largestNumber(arr){
	var largestArray = [];
	
	for(var i=0; i<arr.length; i++){
		var largestNum = 0; // largest Num is set to 0
		for(var j=0; j<arr.length; j++){
			if(largestNum < arr[i][j]){ // if largest num is less than value at arr[i][j]
				largestNum = arr[i][j];	// largest = arr[i][j]
			}
		}
		largestArray.push(largestNum); // 
	}
	return largestArray;
}


// Using the .map and .apply
function largestNumberMap(arr){
	var newArray = arr.map(function(subarray){
		return Math.max.apply(undefined, subarray);
	});

	return newArray;
}