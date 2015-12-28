function chunky(arr, size){
	var result = [];
	while(arr.length){
		result.push(arr.splice(0, size));
	}
	return result;
}

chunk(["a", "b", "c", "d"], 2);