function sortStringAlphabetically(str) {
    // Convert the string to an array of characters.
    const charArray = str.split('');
  
    // Sort the array of characters alphabetically.
    charArray.sort();
  
    // Join the sorted array back into a string and return the result.
    return charArray.join('');
}
  
// Input string to be sorted alphabetically.
const inputString = 'programming';

// Call the sortStringAlphabetically function with the input string and store the result in sortedString.
const sortedString = sortStringAlphabetically(inputString);

// Output the sorted string.
console.log('Sorted String:', sortedString);
  