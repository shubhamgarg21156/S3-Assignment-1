function countBits(number) {
    return number.toString(2).length; //convert number to binary and return its length
}

const num = 47;
const bitsCount = countBits(num); //count bits of the number
console.log(`Number of Bits for ${num}: ${bitsCount}`); //print the count
