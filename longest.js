function longestWord(sentence){
	var words = sentence.split(' ');
	var longest = 0;
	for(var i=0; i<words.length; i++){
		longest = Math.max(longest, words[i].length);
	}
	return longest;
}


/* 
1. Split the string into an array
2. Set the first index to max. 
3. Compare that bad boy to the rest of the array elements
*/

