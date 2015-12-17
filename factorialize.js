function factorial(number){
	var answer = 1;
	for(var i=2; i<=number; i++){
		answer = answer * i;
	}
	return answer;
}

factorialize(8);