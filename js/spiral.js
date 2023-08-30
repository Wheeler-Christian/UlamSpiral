// List of primes:
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// vvvvv Functions vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv 
/**
 * Makes a table data element in the DOM
 * @param {number} num the number that is to be used as the text content and the ID 
 * @returns {element} the table data element that we just created
 */
function createTableData(num) {
    // <td></td>
    let tableData = document.createElement('td');

    // <td>2</td>
    tableData.appendChild(document.createTextNode(num));

    // <td id="n2">2</td>
    tableData.id = `n${num}`;

    // Is num a prime or composite number?
    const primeness = PRIMES.includes(num) ? 'prime' : 'composite';

    // Add that class to the prime class
    tableData.classList.add(primeness);

    // return the table data element
    return tableData;
}


function appendTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${getRowIdString(row)}`);
    console.log(`#${getRowIdString(row)}`);
    console.log(tableRow);

    // Append tableData as the last child of tableRow
    tableRow.appendChild(tableData);
}


function prependTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${getRowIdString(row)}`);

    // PREPEND tableData as the FIRST child of tableRow
    tableRow.prepend(tableData);
}


function getRowIdString(row) {
    // Is this row zero?
    if(row === 0) return 'row_zero';

    // else not row zero. It could be row ±1, ±2, ±3...
    const sign = (row > 0) ? 'pos' : 'neg'; // is it positive or negative?
    const absValue = Math.abs(row); // get the absolute value of the number

    // return the row id as a string
    return `row_${sign}${Math.abs(row)}`; // combine the sign and the absolute value to make a row id string
}

// Todo
function prependTableRow(table, row) {
    // <tr></tr>
    let tableRow = document.createElement('tr');

    // <tr id=row_pos1></tr>
    // give the table row an id according to the parameter row
    tableRow.id = `${getRowIdString(row)}`;

    // PREPEND the table row element as the LAST child of the table element
    table.prepend(tableRow);
    console.log(tableRow);
}

// Todo
function appendTableRow(table, row) {
    // <tr></tr>
    let tableRow = document.createElement('tr');

    // <tr id=row_neg1></tr>
    // give the table row an id according to the parameter row
    tableRow.id = `${getRowIdString(row)}`;

    // APPEND the table row element as the LAST child of the table element
    table.append(tableRow);
    console.log(tableRow);
}

//TODO: JSDOC FOR FUNCTIONS CREATED ALREADY
//TODO: functions for go right, go up, go left, and go down, as seen in the notes.
// ^^^^^ Functions ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// vvvvv Start making the spiral vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

// Get the starting variables:
const table = document.querySelector('table');
let row = 0; // Start at row zero.
let num = 1; // Start at the number 1.

appendTableData(row, ++num); // right
prependTableRow(table, ++row); // up one row
prependTableData(row, ++num); // left one
prependTableData(row, ++num); // left one
