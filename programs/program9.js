// This function separates even and odd numbers from an array while removing duplicate elements.
function separateEvenOddAndRemoveDuplicates(arr) {
    // Create a new array 'uniqueArr' that contains only unique elements from the input array 'arr'.
    const uniqueArr = Array.from(new Set(arr));
  
    // Filter the 'uniqueArr' to get an array 'evenNumbers' containing only even numbers.
    const evenNumbers = uniqueArr.filter((num) => num % 2 === 0);
  
    // Filter the 'uniqueArr' to get an array 'oddNumbers' containing only odd numbers.
    const oddNumbers = uniqueArr.filter((num) => num % 2 !== 0);
  
    // Combine the 'evenNumbers' and 'oddNumbers' arrays and return the result array.
    return [...evenNumbers, ...oddNumbers];
}
  
// Input array containing some numbers, including duplicates.
const inputArray = [1, 2, 3, 4, 5, 2, 4, 6, 7, 8];

// Call the 'separateEvenOddAndRemoveDuplicates' function with the input array and store the result in 'resultArray'.
const resultArray = separateEvenOddAndRemoveDuplicates(inputArray);

// Output the result array after separating even and odd numbers and removing duplicates.
console.log('Separated Even and Odd Numbers:', resultArray);
  