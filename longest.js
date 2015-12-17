function longestWord(sentence){
	var words = sentence.split(' ');
	var longest = 0;
	for(var i=0; i<words.length; i++){
		longest = Math.max(longest, words[i].length);
	}
	return longest;
}