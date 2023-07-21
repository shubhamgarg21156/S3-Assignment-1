// Function to interchange the first and last digit of a number.
function interchangeFirstLastDigit(number) {
    // Convert the number to a string to manipulate its digits.
    const numStr = number.toString();
  
    // If the number has only one digit or less, there is nothing to interchange, so return the same number.
    if (numStr.length <= 1) {
      return number;
    }
  
    // Extract the first digit and last digit from the number as strings.
    const firstDigit = numStr[0];
    const lastDigit = numStr[numStr.length - 1];
  
    // Extract the middle digits of the number as a string (excluding the first and last digit).
    const middleDigits = numStr.slice(1, numStr.length - 1);
  
    // Concatenate the last digit, middle digits, and first digit to form the interchanged number as a string.
    const interchangedStr = lastDigit + middleDigits + firstDigit;
  
    // Convert the interchanged number back to an integer and return it.
    return parseInt(interchangedStr);
  }
  
  // Test the function with an example number.
  const number = 12345;
  const result = interchangeFirstLastDigit(number);
  
  // Output the result of the interchanged number.
  console.log('Interchanged Number:', result);
  