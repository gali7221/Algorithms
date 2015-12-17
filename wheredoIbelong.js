function where(arr, num){
	arr.push(num); // Insert num into array
	arr.sort(function(a, b){
		return a-b; // sort
		};
	return arr.indexOf(num); // return indexOf num
	)
}