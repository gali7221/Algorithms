function mutation(arr){
	var test = arr[0].toLowerCase();
	var target = arr[1].toLowerCase();

	test = test.split('');
	target = target.split('');

	for(var i=0; i<test.length; i++){
		if(target.indexOf(test[i]) < 0)
			return false;
	}
	return true;
}

mutation(["hello", "hey"]);