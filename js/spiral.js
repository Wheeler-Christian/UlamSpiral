// import primes from './sieveOfEratosthenes';

// List of primes:
const primes1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const TABLE_BODY = document.querySelector('tbody');


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
    const primeness = primes.includes(num) ? 'prime' : 'composite';

    // Add that class to the prime class
    tableData.classList.add(primeness);

    // return the table data element
    return tableData;
}

/**
 * Appends a square containing the data at the END of the row
 * @param {number} row the current row we are on
 * @param {number} num the current number we are on
 */
function appendTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${getRowIdString(row)}`);

    // Append tableData as the last child of tableRow
    tableRow.appendChild(tableData);
}

/**
 * Prepends a square containing the data at the BEGINNING of the row
 * @param {number} row the current row we are on
 * @param {number} num the current number we are on
 */
function prependTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${getRowIdString(row)}`);

    // PREPEND tableData as the FIRST child of tableRow
    tableRow.prepend(tableData);
}

/**
 * Converts the number into a string that can be used as an ID for the row
 * @param {number} row the number identifying the current row
 * @returns the string that is the ID of the row
 */
function getRowIdString(row) {
    // Is this row zero?
    if(row === 0) return 'row_zero';

    // else not row zero. It could be row ±1, ±2, ±3...
    const sign = (row > 0) ? 'pos' : 'neg'; // is it positive or negative?
    const absValue = Math.abs(row); // get the absolute value of the number

    // return the row id as a string
    return `row_${sign}${Math.abs(row)}`; // combine the sign and the absolute value to make a row id string
}

/**
 * Creates a new row at the TOP of the table.
 * @param {number} row the number that identifies the row we need to create
 */
function prependTableRow(row) {
    // <tr></tr>
    let tableRow = document.createElement('tr');

    // <tr id=row_pos1></tr>
    // give the table row an id according to the parameter row
    tableRow.id = `${getRowIdString(row)}`;

    // PREPEND the table row element as the FIRST child of the table element
    TABLE_BODY.prepend(tableRow);
    console.log(tableRow);
}

/**
 * Creates a new row at the BOTTOM of the table.
 * @param {number} row the number that identifies the row we need to create
 */
function appendTableRow(row) {
    // <tr></tr>
    let tableRow = document.createElement('tr');

    // <tr id=row_neg1></tr>
    // give the table row an id according to the parameter row
    tableRow.id = `${getRowIdString(row)}`;

    // APPEND the table row element as the LAST child of the table element
    TABLE_BODY.append(tableRow);
    console.log(tableRow);
}

//TODO: JSDOC FOR FUNCTIONS CREATED ALREADY
//TODO: functions for go right, go up, go left, and go down, as seen in the notes.

function moveRight(row, num, dist) {
    // want to loop 'dist' times
    for(let i = 0; i < dist; i++) {
        appendTableData(row, ++num); // 2: right 1
        console.log('row ' + row, 'number ' + num, 'right ' + dist);
    }
    return num;
}

function moveUp(row, num, dist) {
    // want to loop 'dist - 1' times
    for(let i = 1; i < dist; i++) {
        appendTableData(++row, ++num); // 11: up 1
        console.log('row  ' + row, 'number  ' + num, 'down  ' + dist);
    }
    // After the loop has executed dist-1 times, create the last number on a new row
    prependTableRow(++row); // create row pos1
    prependTableData(row, ++num); // 3: on new row
    console.log('row  ' + row, 'number  ' + num, 'up  ' + dist);
    return [row, num];
}

function moveLeft(row, num, dist) {
    // want to loop 'dist' times
    for(let i = 0; i < dist; i++) {
        prependTableData(row, ++num); // left
        console.log('row  ' + row, 'number  ' + num, 'left  ' + dist);
    }
    return num;
}

function moveDown(row, num, dist) {
    // want to loop 'dist - 1' times
    for(let i = 1; i < dist; i++) {
        prependTableData(--row, ++num); // 6: down 1
        console.log('row  ' + row, 'number  ' + num, 'down  ' + dist);
    }
    // After the loop has executed dist-1 times, create the last number on a new row
    appendTableRow(--row); // create row neg1
    prependTableData(row, ++num); // 7: on new row
    console.log('row  ' + row, 'number  ' + num, 'down  ' + dist);
    return [row, num];
}

// vvvvv Start making the spiral vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
function loopSpiral() {
    // Get the starting variables:<tr id="row_pos3">…</tr>
    let row = 0; // Start at row zero.
    let num = 1; // Start at the number 1.
    let dist = 0; // Start at distance 0.
    console.log('row ' + row, 'number ' + num, 'right ' + 0);
    while(num <= 1000) {

        // increment distance
        dist++;

        // move right 1
        num = moveRight(row, num, dist);

        // move up 1
        [row, num] = moveUp(row, num, dist);

        // increment distance
        dist++;

        // move left 2
        num = moveLeft(row, num, dist);

        // move down 2
        [row, num] = moveDown(row, num, dist);
    }
}

// START THE LOOP THAT MAKES THE ULAM SPIRAL
loopSpiral();

// // move right 1
// // appendTableData(row, ++num); // 2: right 1
// // console.log(row, num);
// num = moveRight(row, num, dist);

// // move up 1
// // prependTableRow(table, ++row); // create row pos1
// // console.log(row, num);
// // prependTableData(row, ++num); // 3: on new row
// // console.log(row, num);
// [row, num] = moveUp(row, num, dist);

// // move left 2
// // prependTableData(row, ++num); // 4: left 1
// // console.log(row, num);
// // prependTableData(row, ++num); // 5: left 2
// // console.log(row, num);
// num = moveLeft(row, num, ++dist);

// // move down 2
// // prependTableData(--row, ++num); // 6: down 1
// // console.log(row, num);
// // appendTableRow(table, --row); // create new row neg1
// // console.log(row, num);
// // prependTableData(row, ++num); // 7: on new row
// // console.log(row, num);
// [row, num] = moveDown(row, num, dist);

// // move right 3
// appendTableData(row, ++num); // 8: right 1
// console.log(row, num);
// appendTableData(row, ++num); // 9: right 2
// console.log(row, num);
// appendTableData(row, ++num); // 10: right 3
// console.log(row, num);

