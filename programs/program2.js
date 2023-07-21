// Function to find the smallest and second smallest elements in an array.
function findSmallestElements(arr) {
    // Check if the array has at least two elements.
    if (arr.length < 2) {
      return 'Array should have at least two elements.';
    }
  
    // Initialize variables to store the smallest and second smallest elements.
    let smallest = Infinity; // Infinity is used as an initial value to ensure any number in the array will be smaller.
    let secondSmallest = Infinity; // Infinity is used to ensure any number in the array will be considered as the second smallest.
  
    // Loop through each element in the array.
    for (let num of arr) {
      // If the current number is smaller than the current smallest number,
      // update both smallest and secondSmallest accordingly.
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        // If the current number is smaller than the current second smallest number (but not equal to smallest),
        // update the secondSmallest accordingly.
        secondSmallest = num;
      }
    }
  
    // Return an array containing the smallest and second smallest elements.
    return [smallest, secondSmallest];
  }
  
  // Test the function with an example array.
  const arr = [8, 2, 7, 3, 5, 6, 4];
  const [smallest, secondSmallest] = findSmallestElements(arr);
  
  // Output the results.
  console.log(`Smallest: ${smallest}, Second Smallest: ${secondSmallest}`);