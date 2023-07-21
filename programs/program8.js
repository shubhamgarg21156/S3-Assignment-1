function getMinutesBetweenTwoTimes(startTime, endTime) {
    // Parse the input times to extract hours and minutes.
    const [startHour, startMinute] = startTime.slice(0,5).split(':').map(Number);
    const [endHour, endMinute] = endTime.slice(0,5).split(':').map(Number);
  
    // Convert the time to 24-hour format for easier calculations.
    const startHour24 = startHour % 12 + (startTime.includes('PM') ? 12 : 0);
    const endHour24 = endHour % 12 + (endTime.includes('PM') ? 12 : 0);
  
    // Calculate the total number of minutes for both times.
    const totalMinutesStart = startHour24 * 60 + startMinute;
    const totalMinutesEnd = endHour24 * 60 + endMinute;
  
    // Calculate the difference in minutes between the two times.
    const minutesDifference = totalMinutesEnd - totalMinutesStart;
  
    return minutesDifference;
}

// Test the function with the sample input.
const startTime = '12:01AM';
const endTime = '12:00PM';

const minutesDifference = getMinutesBetweenTwoTimes(startTime, endTime);

// Output the result.
console.log(`Minutes between ${startTime} to ${endTime}: ${minutesDifference}`);
  