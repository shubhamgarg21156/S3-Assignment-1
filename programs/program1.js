const fs = require('fs');

function countWordsLinesSize(inputFilePath, outputFilePath) {
  // Read the content of the input file asynchronously.
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Split the content into an array of words using spaces as the separator.
    const words = data.split(' ');

    // Count the number of words.
    const wordCount = words.length;

    // Split the content into an array of lines using the newline character as the separator.
    const lines = data.split('\n');

    // Count the number of lines in the file.
    const lineCount = lines.length;

    // Calculate the total size of the file in bytes.
    const totalSize = Buffer.byteLength(data, 'utf8');

    // Prepare the result string containing word count, line count, and total size.
    const result = `Word Count: ${wordCount}\nLine Count: ${lineCount}\nTotal Size: ${totalSize} bytes\n`;

    // Write the result string to the output file asynchronously.
    fs.writeFile(outputFilePath, result, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }

      console.log('Count and size data stored in the output file successfully.');
    });
  });
}

// Define input and output file paths.
const inputFilePath = 'input.txt'; // Replace 'input.txt' with the path of the input file you want to read.
const outputFilePath = 'output.txt'; // Replace 'output.txt' with the path of the output file where the result will be stored.

// Call the countWordsLinesSize function with the input and output file paths to process the file.
countWordsLinesSize(inputFilePath, outputFilePath);
