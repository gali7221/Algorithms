function slasher(arr, howMany){
	var result = arr.splice(0, howMany);
	return arr;
}

slasher([1, 2, 3], 2);