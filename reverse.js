function reverseString(string){
	var reverse = string.split('').reverse().join('');
	console.log(reverseString("hiyahoo"));
	return reverse;
}


function reverseNumber(number){
	number = number + "";
	number.split('').reverse().join('');
	console.log(reverseNumber(343423424));
	return number;

}
reverseString('blahdeblah');
reverseNumber(333334443);