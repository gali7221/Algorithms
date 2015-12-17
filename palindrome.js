function palindrome(palindrome){

	// remove special characters, spaces, and make lowercase
	var isPalindrome = palindrome.toLowerCase().replace(/[^a-z0-9]+/g, ""); 
	return palindrome = isPalindrome.split('').reverse().join('');
}