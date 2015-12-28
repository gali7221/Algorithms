function bouncer(arr){
	return arr.filter(function(val){
		return val;
	})
}

bouncer([7, "ate", "", false, 9]);