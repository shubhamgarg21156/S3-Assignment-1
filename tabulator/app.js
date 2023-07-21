const tableData = []; // Array to store table data
const pageSize = 50;
let table;

// Function to generate random data
function generateRandomData() {
    const randomData = [];
    for (let i = 1; i <= 100; i++) {
    randomData.push({
        id: i,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // Random date within the last few days
        text: `Text ${i}`,
    });
    }
    return randomData;
}

// Function to initialize the table
function initializeTable() {
    table = new Tabulator("#table-container", {
    data: tableData,
    layout: "fitDataFill",
    columns: [
        { title: "ID", field: "id", sorter: "number", width: 100 },
        { title: "Date Time", field: "date", sorter: "datetime", width: 200 },
        { title: "Text", field: "text", sorter: "string", width: 200 },
    ],
    pagination: "local",
    paginationSize: pageSize,
    });
}

// Function to add new data to the table
function addDataToTable() {
    const randomData = generateRandomData();
    tableData.push(...randomData);
    table.setData(tableData);
}

// Event listener for "Add Data" button click
document.getElementById("addDataBtn").addEventListener("click", addDataToTable);

// Function to set the page
function setPage(page) {
    table.setPage(page);
}

// Function to go to the first page
function goToFirstPage() {
    setPage(1);
}

// Function to go to the last page
function goToLastPage() {
    const lastPage = Math.ceil(tableData.length / pageSize);
    setPage(lastPage);
}

// Function to go to the next page
function goToNextPage() {
    const currentPage = table.getPage();
    setPage(currentPage + 1);
}

// Function to go to the previous page
function goToPreviousPage() {
    const currentPage = table.getPage();
    setPage(currentPage - 1);
}

// Initialize the table
initializeTable();