function titleCase(string){
	var words = string.split(' ');
	words = words.map(function(i){
		return i.charAt(0).toUpperCase().concat(i.slice(1).toLowerCase());
	});

	return words.join();
}