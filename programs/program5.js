function capitalizeCharacter(str, char) {
    // Convert the target character to lowercase and uppercase versions.
    const charLowerCase = char.toLowerCase();
    const charUpperCase = char.toUpperCase();
  
    // Initialize an empty string to store the result.
    let result = '';
  
    // Loop through each character in the input string.
    for (let i = 0; i < str.length; i++) {
      // Get the current character from the input string.
      const currentChar = str[i];
  
      //if it is lowercase
      if (currentChar.toLowerCase() === charLowerCase) {
        // Append the uppercase version of the target character to the result string.
        result += charUpperCase;
      } else {
        // If the character doesn't match the target character, simply append it to the result string.
        result += currentChar;
      }
    }
  
    // Return the final result string with the target character capitalized wherever it occurs.
    return result;
}

const inputString = 'Hello world, welcome to the world of JavaScript!';
const character = 'o';
const resultString = capitalizeCharacter(inputString, character);
console.log('Result:', resultString);
