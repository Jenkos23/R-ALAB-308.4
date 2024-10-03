//Assignment  Loop
// Part 1: FizzBuzz
// iterate through 1-100
for (let z = 1; z <= 100; z++){
    if (z % 3 && z % 5 === 0) {
        console.log('fizzBuzz')
    }
    else if (z % 3 === 0){
        console.log("fizz")
    }
    else if (z % 5 === 0){
        console.log("Buzz")

    }

    else{
        console.log(z)
    }

}

// Part 1b: Prime Time
// Declare an arbitrary number n
let n = 9;

// Loop to find the next prime number
let isPrime;
while (true) {
    n++; // Increment n to check next number
    isPrime = true; // Assume n is prime until proven otherwise

    // Check if n is prime
    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            isPrime = false; // Found a divisor, n is not prime
            break; // Exit the inner loop
        }
    }

    // If n is prime, log it and exit the loop
    if (isPrime) {
        console.log(n);
        break; // Exit the outer while loop
    }
}

//Part 1C: Feeling Loop

// Example CSV string
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Initialize variables
let row = "";  // Used to build each row
let cell = ""; // Used to build each cell

// Loop through the characters in the csvData
for (let i = 0; i < csvData.length; i++) {
    let char = csvData[i];

    // Check for newline character to indicate end of a row
    if (char === '\n') {
        // Log the row with the cells
        console.log(row);
        // Reset row for the next one
        row = "";
    } else if (char === ',') {
        // If we encounter a comma, add the cell to the current row
        row += cell + ' '; // Add cell followed by space for visual clarity
        // Reset cell for the next one
        cell = "";
    } else {
        // Otherwise, continue building the current cell
        cell += char;
    }
}

// At the end, log the last row if there's any data
if (cell.length > 0) {
    row += cell; // Add the last cell to the row
    console.log(row); // Log the last row
}


// Part 2: Expanding Functionality
console.log('\nPart 1 and 2\n')

// Refactoring code from previous assignment 308.3.1

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let resultArr = [];

// OPTION 1. MANUALLY EXTRACT DATA
//find the heading row
let headerEndIndex = csvData.indexOf('\n');
let headerRow = csvData.slice(0,headerEndIndex);
console.log('headers: ' + headerRow);

//split the header row by the comma and add to reasultArr, log the number of columns
headerArr = headerRow.split(',');
resultArr.push(headerArr);
console.log('Number of columns: ' + headerArr.length)

//split the rest of the data into rows
let dataRows = csvData.slice(headerEndIndex+1).split('\n');

//split each row into cell array and push to reasultArr
for (let i=0; i < dataRows.length ; i++) {
    let row = dataRows[i];
    let rowArr = row.split(',');
    resultArr.push(rowArr);
}
// CHECK THE RESULT
console.log('Result Array option 1: ')
console.log(resultArr);

// // OPTION 2. USING BUILT-IN METHOD
// let dataRowArr = csvData.split('\n');
// for (let i=0; i<dataRowArr.length; i++) {
//     let dataCell = dataRowArr[i].split(',');
//     resultArr.push(dataCell);
// }

// console.log('Number of columns: ' + resultArr[0].length)
// console.log('Result Array option 2: ')
// console.log(resultArr);


// Part 3: Transforming Data
console.log('\nPart 3: Transforming Data\n')

const inputArr = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"], 
    ["57", "Bob", "Fry Cook", "19"], 
    ["63", "Blaine", "Quiz Master", "58"], 
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

const peopleArray = [];

//starting from the row after header row, loop through each row
for (let i = 1; i < inputArr.length; i++) {
    //create a person object for each row in the data
    let row = inputArr[i];
    let personObj = {};

    //loop through the array elements of the row and add the key-value pair to personObj
    for (let k=0; k < row.length; k++) {
        // convert the keys to lower case
        let key = inputArr[0][k].toLowerCase();
        personObj[key] = row[k];
    }
    // after finish the row, add personObj to peopleArray
    peopleArray.push(personObj);
}

console.log(peopleArray);












//Part 4: Sorting and Manipulating Data
let people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
];

people.pop(); // This will remove "Blaine"

let newPerson1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
people.splice(1, 0, newPerson1); // Insert "Barry" at index 1

let newPerson2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
people.push(newPerson2); // Add "Bilbo" to the end

[
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]
let totalAge = 0;
let numberOfPeople = people.length;

for (let i = 0; i < numberOfPeople; i++) {
    totalAge += parseInt(people[i].age); // Convert age from string to number and sum it
}

let averageAge = totalAge / numberOfPeople;
console.log(`The average age is: ${averageAge}`);

//Part5 Full Circle
let Classpeople = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Function to convert array of objects to CSV
function arrayToCSV(arr) {
    // Create the header
    const headers = Object.keys(arr[0]);
    const csvRows = [];

    // Push the header row
    csvRows.push(headers.join(','));

    // Iterate over the array and create rows
    for (const row of arr) {
        const values = headers.map(header => {
            // Replace commas with empty string or wrap in quotes if needed to handle commas in data
            const escapedValue = ('' + row[header]).replace(/"/g, '""'); // Escape quotes
            return `"${escapedValue}"`; // Wrap in quotes
        });
        csvRows.push(values.join(','));
    }

    // Join all rows into a single string with newlines
    return csvRows.join('\n');
}

// Convert to CSV format
const csvOutput = arrayToCSV(Classpeople);

// Display the CSV output
console.log(csvOutput);
