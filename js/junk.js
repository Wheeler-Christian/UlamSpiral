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

    console.log(tableData);

    // return the table data element
    return tableData;
}

/**
 * Adds a tableData element as the last child of this tableRow
 * @param {string} row the id of the current row
 * @param {number} num the number we are currently on
 */
function appendTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${row}`);

    // Append tableData as the last child of tableRow
    tableRow.appendChild(tableData);
}

function prependTableData(row, num) {
    // Create the table data element
    let tableData = createTableData(num);

    // Get the tableRow element
    let tableRow = document.querySelector(`#${row}`);

    // Append tableData as the last child of tableRow
    //does this even work?
    //tableRow.prependChild(tableData);
}

// ^^^^^ Functions ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

appendTableData('row_zero', 2);

